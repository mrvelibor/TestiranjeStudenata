package com.mrvelibor.testiranjestudenata.rest;

import com.mrvelibor.testiranjestudenata.data.model.*;
import com.mrvelibor.testiranjestudenata.data.repository.ExamRepository;
import com.mrvelibor.testiranjestudenata.data.repository.StudentExamQuestionRepository;
import com.mrvelibor.testiranjestudenata.data.repository.StudentExamRepository;
import com.mrvelibor.testiranjestudenata.data.repository.UserRepository;
import com.mrvelibor.testiranjestudenata.rest.json.QuestionAnswerJson;
import com.mrvelibor.testiranjestudenata.rest.json.StudentExamAnswersJson;
import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.*;
import java.util.stream.Collectors;

/**
 *
 * @author Velibor
 */
@RestController
@RequestMapping(path = "profesor")
public class ProfesorRestController {
    
    static Logger logger = Logger.getLogger("ProfesorRestController");

    @Autowired
    private StudentExamRepository studentExamRepository;

    @GetMapping("exams/completed")
    public Collection<StudentExam> getCompletedExams(Authentication authentication) {
        User currentUser = (User) authentication.getPrincipal();
        return studentExamRepository.findByProfesor(currentUser.getUserId());
    }

    @GetMapping("exams/{studentExamId}")
    public StudentExam getCompletedExam(@PathVariable Long studentExamId) {
        return studentExamRepository.findOne(studentExamId);
    }
    
}
