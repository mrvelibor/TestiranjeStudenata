/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mrvelibor.testiranjestudenata.data.model;

import java.math.BigDecimal;
import java.util.List;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 *
 * @author Velibor
 */
@Entity
@Table(name = "question")
public class Question {

    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "QUESTION_ID")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer questionId;
    @Size(max = 10)
    @Column(name = "QUESTION_TYPE")
    private String questionType;
    @Lob
    @Size(max = 65535)
    @Column(name = "TEXT")
    private String text;
    @Size(max = 100)
    @Column(name = "IMAGE_URL")
    private String imageUrl;
    @Column(name = "CORRECT_STATEMENT")
    private Boolean correctStatement;
    @Column(name = "CORRECT_VALUE")
    private BigDecimal correctValue;
    @JoinColumn(name = "EXAM_ID", referencedColumnName = "EXAM_ID")
    @ManyToOne(optional = false)
    private Exam examId;
    @JoinColumn(name = "SINGLE_CHOICE_ANSWER_ID", referencedColumnName = "SINGLE_CHOICE_ANSWER_ID")
    @ManyToOne
    private SingleChoiceAnswer singleChoiceAnswerId;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "questionId")
    private List<MultipleChoiceAnswer> multipleChoiceAnswerList;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "questionId")
    private List<SingleChoiceAnswer> singleChoiceAnswerList;

    public Question() {
    }

    public Question(Integer questionId) {
        this.questionId = questionId;
    }

    public Integer getQuestionId() {
        return questionId;
    }

    public void setQuestionId(Integer questionId) {
        this.questionId = questionId;
    }

    public String getQuestionType() {
        return questionType;
    }

    public void setQuestionType(String questionType) {
        this.questionType = questionType;
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

    public Boolean getCorrectStatement() {
        return correctStatement;
    }

    public void setCorrectStatement(Boolean correctStatement) {
        this.correctStatement = correctStatement;
    }

    public BigDecimal getCorrectValue() {
        return correctValue;
    }

    public void setCorrectValue(BigDecimal correctValue) {
        this.correctValue = correctValue;
    }

    public Exam getExamId() {
        return examId;
    }

    public void setExamId(Exam examId) {
        this.examId = examId;
    }

    public SingleChoiceAnswer getSingleChoiceAnswerId() {
        return singleChoiceAnswerId;
    }

    public void setSingleChoiceAnswerId(SingleChoiceAnswer singleChoiceAnswerId) {
        this.singleChoiceAnswerId = singleChoiceAnswerId;
    }

    public List<MultipleChoiceAnswer> getMultipleChoiceAnswerList() {
        return multipleChoiceAnswerList;
    }

    public void setMultipleChoiceAnswerList(List<MultipleChoiceAnswer> multipleChoiceAnswerList) {
        this.multipleChoiceAnswerList = multipleChoiceAnswerList;
    }

    public List<SingleChoiceAnswer> getSingleChoiceAnswerList() {
        return singleChoiceAnswerList;
    }

    public void setSingleChoiceAnswerList(List<SingleChoiceAnswer> singleChoiceAnswerList) {
        this.singleChoiceAnswerList = singleChoiceAnswerList;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (questionId != null ? questionId.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Question)) {
            return false;
        }
        Question other = (Question) object;
        if ((this.questionId == null && other.questionId != null) || (this.questionId != null && !this.questionId.equals(other.questionId))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.mrvelibor.testiranjestudenata.data.model.Question[ questionId=" + questionId + " ]";
    }
    
}
