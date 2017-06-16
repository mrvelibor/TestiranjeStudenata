/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mrvelibor.testiranjestudenata.rest;

import com.mrvelibor.testiranjestudenata.data.model.Question;
import javax.persistence.EntityManager;
import org.jboss.logging.Logger;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Velibor
 */
@RestController
public class ExamManagementRestController {
    
    static Logger logger = Logger.getLogger("ExamRestController");

    private EntityManager em;

    public ExamManagementRestController() {
    }

    @PostMapping("create")
    public Question createQuestion(Question entity) {
        Question parsedQuestion;
        switch(entity.getQuestionType()) {
            case "truefalse":
                parsedQuestion = entity;
                break;
            case "numerical":
                parsedQuestion = entity;
                break;
            case "single":
                parsedQuestion = entity;
                break;
            case "multiple":
                parsedQuestion = entity;
                break;
            default:
                throw new IllegalArgumentException("Illegal question type!");
        }
        em.persist(parsedQuestion);
        return parsedQuestion;
    }
    
}
