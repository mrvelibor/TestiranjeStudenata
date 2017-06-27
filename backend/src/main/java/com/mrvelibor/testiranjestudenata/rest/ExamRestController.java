package com.mrvelibor.testiranjestudenata.rest;

import com.mrvelibor.testiranjestudenata.data.entities.Exam;
import com.mrvelibor.testiranjestudenata.data.entities.MultipleChoiceAnswer;
import com.mrvelibor.testiranjestudenata.data.entities.Question;
import com.mrvelibor.testiranjestudenata.data.repository.ExamRepository;
import com.mrvelibor.testiranjestudenata.data.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping(path = "exams")
public class ExamRestController {

    @Autowired
    private ExamRepository examRepository;

    @Autowired
    private QuestionRepository questionRepository;

    @GetMapping
    public List<Exam> getAllExams() {
        return examRepository.findAll();
    }

    @GetMapping("{examId}")
    public Exam getExam(@PathVariable Long examId) {
        return examRepository.findOne(examId);
    }

    @DeleteMapping("{examId}")
    public ResponseEntity deleteExam(@PathVariable Long examId) {
        examRepository.delete(examId);
        return new ResponseEntity(HttpStatus.OK);
    }

    @PostMapping
    public Exam createExam(@RequestBody Exam exam) {
        return examRepository.save(exam);
    }

    @PostMapping("{examId}/add_question")
    public ResponseEntity<Question> addQuestion(@PathVariable Long examId, @RequestBody Question questionJson) {
        Exam exam = examRepository.findOne(examId);
        if(exam == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        final Question question = new Question();
        question.setExam(exam);
        question.setText(questionJson.getText());
        question.setImageUrl(questionJson.getImageUrl());
        question.setQuestionType(questionJson.getQuestionType());
        switch (question.getQuestionType()) {
            case truefalse:
                if(questionJson.getCorrectStatement() == null) {
                    return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
                }
                question.setCorrectStatement(questionJson.getCorrectStatement());
                break;
            case numerical:
                if(questionJson.getCorrectValue() == null) {
                    return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
                }
                question.setCorrectValue(questionJson.getCorrectValue());
                break;
            case single:
                if(questionJson.getSingleChoiceAnswers() == null || questionJson.getSingleChoiceAnswers().size() < 3) {
                    return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
                }
                question.setSingleChoiceAnswers(questionJson.getSingleChoiceAnswers());
                break;
            case multiple:
                if(questionJson.getMultipleChoiceAnswers() == null || questionJson.getMultipleChoiceAnswers().size() < 3) {
                    return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
                }
                questionJson.getMultipleChoiceAnswers().stream().filter(answer -> answer.getAnswerCorrect() == null).forEach(answer -> answer.setAnswerCorrect(false));
                if(questionJson.getMultipleChoiceAnswers().stream().noneMatch(MultipleChoiceAnswer::getAnswerCorrect)) {
                    return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
                }
                questionJson.getMultipleChoiceAnswers().forEach(answer -> answer.setQuestion(question));
                question.setMultipleChoiceAnswers(questionJson.getMultipleChoiceAnswers());
                break;
            default:
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(questionRepository.save(question), HttpStatus.OK);
    }

}
