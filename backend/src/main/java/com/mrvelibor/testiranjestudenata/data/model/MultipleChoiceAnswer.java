/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mrvelibor.testiranjestudenata.data.model;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author Velibor
 */
@Entity
@Table(name = "multiple_choice_answer")
public class MultipleChoiceAnswer {

    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "MULTIPLE_CHOICE_ANSWER_ID")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer multipleChoiceAnswerId;
    @Lob
    @Size(max = 65535)
    @Column(name = "TEXT")
    private String text;
    @Size(max = 100)
    @Column(name = "IMAGE_URL")
    private String imageUrl;
    @Basic(optional = false)
    @NotNull
    @Column(name = "ANSWER_CORRECT")
    private boolean answerCorrect;
    @JoinColumn(name = "QUESTION_ID", referencedColumnName = "QUESTION_ID")
    @ManyToOne(optional = false)
    private Question questionId;

    public MultipleChoiceAnswer() {
    }

    public MultipleChoiceAnswer(Integer multipleChoiceAnswerId) {
        this.multipleChoiceAnswerId = multipleChoiceAnswerId;
    }

    public MultipleChoiceAnswer(Integer multipleChoiceAnswerId, boolean answerCorrect) {
        this.multipleChoiceAnswerId = multipleChoiceAnswerId;
        this.answerCorrect = answerCorrect;
    }

    public Integer getMultipleChoiceAnswerId() {
        return multipleChoiceAnswerId;
    }

    public void setMultipleChoiceAnswerId(Integer multipleChoiceAnswerId) {
        this.multipleChoiceAnswerId = multipleChoiceAnswerId;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public boolean getAnswerCorrect() {
        return answerCorrect;
    }

    public void setAnswerCorrect(boolean answerCorrect) {
        this.answerCorrect = answerCorrect;
    }

    @XmlTransient
    public Question getQuestionId() {
        return questionId;
    }

    public void setQuestionId(Question questionId) {
        this.questionId = questionId;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (multipleChoiceAnswerId != null ? multipleChoiceAnswerId.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof MultipleChoiceAnswer)) {
            return false;
        }
        MultipleChoiceAnswer other = (MultipleChoiceAnswer) object;
        if ((this.multipleChoiceAnswerId == null && other.multipleChoiceAnswerId != null) || (this.multipleChoiceAnswerId != null && !this.multipleChoiceAnswerId.equals(other.multipleChoiceAnswerId))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.mrvelibor.testiranjestudenata.data.model.MultipleChoiceAnswer[ multipleChoiceAnswerId=" + multipleChoiceAnswerId + " ]";
    }
    
}
