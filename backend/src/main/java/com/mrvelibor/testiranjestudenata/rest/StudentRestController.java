/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mrvelibor.testiranjestudenata.rest;

import com.mrvelibor.testiranjestudenata.data.model.Exam;
import com.mrvelibor.testiranjestudenata.data.model.MultipleChoiceAnswer;
import com.mrvelibor.testiranjestudenata.data.model.Question;
import com.mrvelibor.testiranjestudenata.data.model.SingleChoiceAnswer;
import com.mrvelibor.testiranjestudenata.data.model.StudentExam;
import com.mrvelibor.testiranjestudenata.data.model.StudentExamQuestion;
import com.mrvelibor.testiranjestudenata.data.model.User;
import com.mrvelibor.testiranjestudenata.data.repository.ExamRepository;
import com.mrvelibor.testiranjestudenata.data.repository.StudentExamQuestionRepository;
import com.mrvelibor.testiranjestudenata.data.repository.StudentExamRepository;
import com.mrvelibor.testiranjestudenata.data.repository.UserRepository;
import com.mrvelibor.testiranjestudenata.rest.json.ExamJson;
import com.mrvelibor.testiranjestudenata.rest.json.QuestionAnswerJson;
import com.mrvelibor.testiranjestudenata.rest.json.StudentExamAnswersJson;
import java.math.BigDecimal;
import java.util.*;
import java.util.stream.Collectors;
import javax.persistence.EntityManager;
import javax.websocket.server.PathParam;

import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 *
 * @author Velibor
 */
@RestController
@RequestMapping(path = "student")
public class StudentRestController {
    
    static Logger logger = Logger.getLogger("ExamRestController");

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ExamRepository examRepository;

    @Autowired
    private StudentExamRepository studentExamRepository;

    @Autowired
    private StudentExamQuestionRepository studentExamQuestionRepository;

    @GetMapping("exams/available")
    public List<Exam> getAvailableExams() {
        return examRepository.findAll();
    }

    @GetMapping("exams/completed")
    public List<StudentExam> getCompletedExams() {
        return studentExamRepository.findAll();
    }

    @GetMapping("exams/{studentExamId}")
    public StudentExam getCompletedExam(@PathVariable Long studentExamId) {
        return studentExamRepository.findOne(studentExamId);
    }

    @PostMapping("exams/{examId}/start")
    public StudentExam startExam(@PathVariable Long examId, @RequestBody ExamJson entity) {
        User user = userRepository.findOne(entity.user.getUserId());

        Exam exam = examRepository.findOne(examId);
        
        StudentExam studentExam = new StudentExam();
        studentExam.setExam(exam);
        studentExam.setStudent(user);
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
        
        return studentExam;
    }

    @PostMapping("exams/{studentExamId}/finish")
    public StudentExam finishExam(@PathVariable Long studentExamId, @RequestBody StudentExamAnswersJson entity) {
        StudentExam studentExam = studentExamRepository.findOne(studentExamId);
        BigDecimal points = new BigDecimal(0);
        
        for(StudentExamQuestion examQuestion : studentExam.getQuestions()) {
            try {
                Question question = examQuestion.getQuestion();
                QuestionAnswerJson answer = entity.answers.stream()
                    .filter(a -> Objects.equals(a.question.getQuestionId(), question.getQuestionId()))
                    .findFirst().get();
                switch(question.getQuestionType()) {
                    case "truefalse":
                        examQuestion.setSelectedStatement(answer.answerStatement);
                        if(Objects.equals(answer.answerStatement, question.getCorrectStatement())) {
                            points = points.add(BigDecimal.ONE);
                        }
                        break;
                    case "numerical":
                        examQuestion.setSelectedValue(answer.answerValue);
                        if(Objects.equals(answer.answerValue, question.getCorrectValue())) {
                            points = points.add(BigDecimal.ONE);
                        }
                        break;
                    case "single":
                        SingleChoiceAnswer singleChoiceAnswer = new SingleChoiceAnswer();
                        singleChoiceAnswer.setSingleChoiceAnswerId(answer.singleChoiceAnswerId);
                        examQuestion.setSingleChoiceAnswer(singleChoiceAnswer);
                        if(Objects.equals(answer.singleChoiceAnswerId, question.getSingleChoiceAnswer().getSingleChoiceAnswerId())) {
                            points = points.add(BigDecimal.ONE);
                        }
                        break;
                    case "multiple":
                        List<MultipleChoiceAnswer> mcAnswers = question.getMultipleChoiceAnswers().stream()
                                .filter(a -> answer.multipleChoiceAnswerIds.contains(a.getMultipleChoiceAnswerId()))
                                .collect(Collectors.toList());
                        examQuestion.setMultipleChoiceAnswers(mcAnswers);
                        long totalCorrectAnswers = question.getMultipleChoiceAnswers().stream()
                                .filter(a -> a.getAnswerCorrect())
                                .count();
                        long correctAnswers = mcAnswers.stream()
                                .filter(a -> a.getAnswerCorrect())
                                .count();
                        if(correctAnswers == mcAnswers.size()) {
                            points = points.add(BigDecimal.ONE.divide(new BigDecimal(totalCorrectAnswers)).multiply(new BigDecimal(correctAnswers)));
                        }
                        break;
                }
                studentExamQuestionRepository.save(examQuestion);
            }
            catch (NoSuchElementException ex) {                
            }
        }
        
        studentExam.setEndTime(new Date());
        studentExam.setPoints(points);
        studentExam = studentExamRepository.save(studentExam);
        return studentExam;
    }
    
}
