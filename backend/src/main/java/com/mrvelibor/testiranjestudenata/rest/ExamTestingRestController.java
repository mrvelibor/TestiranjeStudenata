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
import com.mrvelibor.testiranjestudenata.rest.json.ExamJson;
import com.mrvelibor.testiranjestudenata.rest.json.QuestionAnswerJson;
import com.mrvelibor.testiranjestudenata.rest.json.StudentExamAnswersJson;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Objects;
import java.util.Random;
import java.util.Set;
import java.util.stream.Collectors;
import javax.persistence.EntityManager;
import javax.websocket.server.PathParam;

import org.jboss.logging.Logger;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Velibor
 */
@RestController("testing")
public class ExamTestingRestController {
    
    static Logger logger = Logger.getLogger("ExamRestController");

    private EntityManager em;

    public ExamTestingRestController() {
    }

    @PostMapping("{exam_id}/start")
    public StudentExam startExam(@PathParam("exam_id") Integer examId, ExamJson entity) {
        Exam exam = em.find(Exam.class, examId);
        User user = em.find(User.class, entity.user.getUserId());
        
        StudentExam studentExam = new StudentExam();
        studentExam.setExam(exam);
        studentExam.setStudent(user);
        studentExam.setStartTime(new Date());        
        em.persist(studentExam);
        
        List<Question> allQuestions = exam.getQuestions();
        Set<Question> questions = new HashSet<>(exam.getNumberOfQuestions());
        Random rand = new Random();
        while(questions.size() < exam.getNumberOfQuestions()) {
            questions.add(allQuestions.get(rand.nextInt(allQuestions.size())));
        }
        
        List<StudentExamQuestion> examQuestions = new ArrayList<>();
        for(Question question : questions) {
            StudentExamQuestion examQuestion = new StudentExamQuestion();
            examQuestion.setQuestion(question);
            examQuestion.setStudentExam(studentExam);
            em.persist(examQuestion);
            examQuestions.add(examQuestion);
        }
        studentExam.setStudentExamQuestions(examQuestions);
        
        return studentExam;
    }

    @PostMapping("{exam_id}/finish")
    public StudentExam finishExam(@PathParam("exam_id") Integer studentExamId, StudentExamAnswersJson entity) {
        StudentExam studentExam = em.find(StudentExam.class, studentExamId);        
        BigDecimal points = new BigDecimal(0);
        
        for(StudentExamQuestion examQuestion : studentExam.getStudentExamQuestions()) {
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
                        examQuestion.setSingleChoiceAnswerId(singleChoiceAnswer);
                        if(Objects.equals(answer.singleChoiceAnswerId, question.getSingleChoiceAnswer().getSingleChoiceAnswerId())) {
                            points = points.add(BigDecimal.ONE);
                        }
                        break;
                    case "multiple":
                        List<MultipleChoiceAnswer> mcAnswers = question.getMultipleChoiceAnswers().stream()
                                .filter(a -> answer.multipleChoiceAnswerIds.contains(a.getMultipleChoiceAnswerId()))
                                .collect(Collectors.toList());
                        examQuestion.setMultipleChoiceAnswerList(mcAnswers);
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
                em.persist(examQuestion);
            }
            catch (NoSuchElementException ex) {                
            }
        }
        
        studentExam.setEndTime(new Date());
        studentExam.setPoints(points);
        em.persist(studentExam);
        return studentExam;
    }
    
}
