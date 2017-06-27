package com.mrvelibor.testiranjestudenata.rest;

import com.mrvelibor.testiranjestudenata.data.entities.*;
import com.mrvelibor.testiranjestudenata.data.repository.StudentExamRepository;
import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.*;

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
