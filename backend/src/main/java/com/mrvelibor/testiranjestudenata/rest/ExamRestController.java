package com.mrvelibor.testiranjestudenata.rest;

import com.mrvelibor.testiranjestudenata.data.entities.Exam;
import com.mrvelibor.testiranjestudenata.data.entities.MultipleChoiceAnswer;
import com.mrvelibor.testiranjestudenata.data.entities.Question;
import com.mrvelibor.testiranjestudenata.data.entities.SingleChoiceAnswer;
import com.mrvelibor.testiranjestudenata.data.repository.ExamRepository;
import com.mrvelibor.testiranjestudenata.data.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.math.BigDecimal;
import java.util.Collection;
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
        if(questionJson.getText() == null || questionJson.getText().isEmpty() || questionJson.getQuestionType() == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        Question question = new Question();
        question.setExam(exam);
        question.setText(questionJson.getText());
        question.setQuestionType(questionJson.getQuestionType());
        switch (question.getQuestionType()) {
            case truefalse: {
                Boolean correctStatement = questionJson.getCorrectStatement();
                if (correctStatement == null) {
                    return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
                }
                question.setCorrectStatement(correctStatement);
                break;
            }
            case numerical: {
                BigDecimal correctValue = questionJson.getCorrectValue();
                if (correctValue == null) {
                    return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
                }
                question.setCorrectValue(correctValue);
                break;
            }
            case single: {
                SingleChoiceAnswer correctAnswer = questionJson.getSingleChoiceCorrectAnswer();
                Collection<SingleChoiceAnswer> answers = questionJson.getSingleChoiceAnswers();
                if (correctAnswer == null || correctAnswer.getSingleChoiceAnswerId() == null || answers == null || answers.size() < 3) {
                    return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
                }
                if (answers.stream().anyMatch(a -> a.getText() == null || a.getText().isEmpty())) {
                    return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
                }
                SingleChoiceAnswer answer = answers.stream().filter(a -> a.getSingleChoiceAnswerId() == correctAnswer.getSingleChoiceAnswerId()).findAny().get();
                answers.forEach(a -> {
                    a.setQuestion(question);
                    a.setSingleChoiceAnswerId(null);
                });
                question.setSingleChoiceAnswers(answers);
                question.setSingleChoiceCorrectAnswer(answer);
                break;
            }
            case multiple: {
                Collection<MultipleChoiceAnswer> answers = questionJson.getMultipleChoiceAnswers();
                if (answers == null || answers.size() < 3) {
                    return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
                }
                answers.stream().filter(a -> a.getAnswerCorrect() == null).forEach(a -> a.setAnswerCorrect(false));
                if (answers.stream().noneMatch(MultipleChoiceAnswer::getAnswerCorrect)) {
                    return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
                }
                if (answers.stream().anyMatch(a -> a.getText() == null || a.getText().isEmpty())) {
                    return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
                }
                answers.forEach(answer -> answer.setQuestion(question));
                question.setMultipleChoiceAnswers(answers);
                break;
            }
            default:
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(questionRepository.save(question), HttpStatus.OK);
    }

}
