package com.mrvelibor.testiranjestudenata.rest;

import com.mrvelibor.testiranjestudenata.data.entities.Exam;
import com.mrvelibor.testiranjestudenata.data.entities.MultipleChoiceAnswer;
import com.mrvelibor.testiranjestudenata.data.entities.Question;
import com.mrvelibor.testiranjestudenata.data.entities.SingleChoiceAnswer;
import com.mrvelibor.testiranjestudenata.data.entities.StudentExam;
import com.mrvelibor.testiranjestudenata.data.entities.StudentExamQuestion;
import com.mrvelibor.testiranjestudenata.data.entities.User;
import com.mrvelibor.testiranjestudenata.data.repository.ExamRepository;
import com.mrvelibor.testiranjestudenata.data.repository.StudentExamQuestionRepository;
import com.mrvelibor.testiranjestudenata.data.repository.StudentExamRepository;
import com.mrvelibor.testiranjestudenata.rest.json.QuestionAnswerJson;
import com.mrvelibor.testiranjestudenata.rest.json.StudentExamAnswersJson;
import java.math.BigDecimal;
import java.util.*;
import java.util.logging.Logger;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

/**
 *
 * @author Velibor
 */
@RestController
@RequestMapping(path = "student")
public class StudentRestController {

    private static final Logger log = Logger.getLogger(StudentRestController.class.getName());

    @Autowired
    private ExamRepository examRepository;

    @Autowired
    private StudentExamRepository studentExamRepository;

    @Autowired
    private StudentExamQuestionRepository studentExamQuestionRepository;

    @GetMapping("exams/available")
    public Collection<Exam> getAvailableExams(Authentication authentication) {
        User currentUser = (User) authentication.getPrincipal();
        return examRepository.findAvailable(currentUser.getUserId());
    }

    @GetMapping("exams/completed")
    public Collection<StudentExam> getCompletedExams(Authentication authentication) {
        User currentUser = (User) authentication.getPrincipal();
        return studentExamRepository.findByStudent(currentUser);
    }

    @GetMapping("exams/{studentExamId}")
    public StudentExam getCompletedExam(@PathVariable Long studentExamId) {
        return studentExamRepository.findOne(studentExamId);
    }

    @PostMapping("exams/{examId}/start")
    public ResponseEntity<StudentExam> startExam(@PathVariable Long examId, Authentication authentication) {
        User currentUser = (User) authentication.getPrincipal();
        Exam exam = examRepository.findOne(examId);
        
        StudentExam studentExam = new StudentExam();
        studentExam.setExam(exam);
        studentExam.setStudent(currentUser);
        studentExam.setStartTime(new Date());        
        studentExam = studentExamRepository.save(studentExam);

        Question[] allQuestions = exam.getQuestions().toArray(new Question[exam.getQuestions().size()]);
        Set<Question> questions = new HashSet<>(exam.getNumberOfQuestions());
        Random rand = new Random();
        while(questions.size() < exam.getNumberOfQuestions()) {
            questions.add(allQuestions[rand.nextInt(allQuestions.length)]);
        }
        
        List<StudentExamQuestion> examQuestions = new ArrayList<>();
        for(Question question : questions) {
            StudentExamQuestion examQuestion = new StudentExamQuestion();
            examQuestion.setQuestion(question);
            examQuestion.setStudentExam(studentExam);
            examQuestion = studentExamQuestionRepository.save(examQuestion);
            examQuestions.add(examQuestion);
        }
        studentExam.setQuestions(examQuestions);
        
        return new ResponseEntity<>(studentExam, HttpStatus.OK);
    }

    @PostMapping("exams/{studentExamId}/finish")
    public ResponseEntity<StudentExam> finishExam(@PathVariable Long studentExamId, @RequestBody StudentExamAnswersJson entity, Authentication authentication) {
        User currentUser = (User) authentication.getPrincipal();
        StudentExam studentExam = studentExamRepository.findOne(studentExamId);

        if(studentExam == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        if(!Objects.equals(currentUser.getUserId(), studentExam.getStudent().getUserId())) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
        if(studentExam.getEndTime() != null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        BigDecimal points = new BigDecimal(0);
        for(StudentExamQuestion examQuestion : studentExam.getQuestions()) {
            try {
                Question question = examQuestion.getQuestion();
                log.info(question.toString());
                QuestionAnswerJson answer = entity.answers.stream()
                    .filter(a -> Objects.equals(a.question.getQuestionId(), question.getQuestionId()))
                    .findFirst().get();
                log.info(answer.toString());
                switch(question.getQuestionType()) {
                    case truefalse: {
                        log.info("Answer statement: " + answer.answerStatement);
                        if (answer.answerStatement == null) {
                            continue;
                        }
                        examQuestion.setAnswerStatement(answer.answerStatement);
                        if (Objects.equals(answer.answerStatement, question.getCorrectStatement())) {
                            points = points.add(BigDecimal.ONE);
                        }
                        break;
                    }
                    case numerical: {
                        log.info("Answer value: " + answer.answerValue);
                        if (answer.answerValue == null) {
                            continue;
                        }
                        examQuestion.setAnswerValue(answer.answerValue);
                        if (question.getCorrectValue().compareTo(answer.answerValue) == 0) {
                            points = points.add(BigDecimal.ONE);
                        }
                        break;
                    }
                    case single: {
                        log.info("Answer id: " + answer.singleChoiceAnswerId);
                        if (answer.singleChoiceAnswerId == null) {
                            continue;
                        }
                        SingleChoiceAnswer singleChoiceAnswer = new SingleChoiceAnswer();
                        singleChoiceAnswer.setSingleChoiceAnswerId(answer.singleChoiceAnswerId);
                        examQuestion.setSingleChoiceAnswer(singleChoiceAnswer);
                        if (Objects.equals(answer.singleChoiceAnswerId, question.getSingleChoiceCorrectAnswer().getSingleChoiceAnswerId())) {
                            points = points.add(BigDecimal.ONE);
                        }
                        break;
                    }
                    case multiple: {
                        List<MultipleChoiceAnswer> mcAnswers = question.getMultipleChoiceAnswers().stream()
                                .filter(a -> answer.multipleChoiceAnswerIds.contains(a.getMultipleChoiceAnswerId()))
                                .collect(Collectors.toList());
                        log.info("Answers: " + mcAnswers);
                        examQuestion.setMultipleChoiceAnswers(mcAnswers);
                        long totalCorrectAnswers = question.getMultipleChoiceAnswers().stream()
                                .filter(MultipleChoiceAnswer::getAnswerCorrect)
                                .count();
                        long correctAnswers = mcAnswers.stream()
                                .filter(MultipleChoiceAnswer::getAnswerCorrect)
                                .count();
                        if (correctAnswers == mcAnswers.size()) {
                            points = points.add(new BigDecimal(correctAnswers).divide(new BigDecimal(totalCorrectAnswers)));
                        }
                        break;
                    }
                }
                log.info("Points: " + points);
                studentExamQuestionRepository.save(examQuestion);
            }
            catch (NoSuchElementException ex) {
                log.info("No answer.");
            }
        }
        studentExam.setEndTime(new Date());
        studentExam.setPoints(points);
        studentExam = studentExamRepository.save(studentExam);
        return new ResponseEntity<>(studentExam, HttpStatus.OK);
    }
    
}
