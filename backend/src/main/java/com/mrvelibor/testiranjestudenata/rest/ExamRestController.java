package com.mrvelibor.testiranjestudenata.rest;

import com.mrvelibor.testiranjestudenata.data.entities.Exam;
import com.mrvelibor.testiranjestudenata.data.repository.ExamRepository;
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

}
