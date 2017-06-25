/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mrvelibor.testiranjestudenata.rest.json;

import com.mrvelibor.testiranjestudenata.data.model.Question;
import java.math.BigDecimal;
import java.util.List;

/**
 *
 * @author Velibor
 */
public class QuestionAnswerJson {
    public Question question;
    public Boolean answerStatement;
    public BigDecimal answerValue;
    public Long singleChoiceAnswerId;
    public List<Long> multipleChoiceAnswerIds;
}
