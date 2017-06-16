/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mrvelibor.testiranjestudenata.data.model;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.List;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author Velibor
 */
@Entity
@Table(name = "student_exam_question")
public class StudentExamQuestion implements Serializable {
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "STUDEN_EXAM_QUESTION_ID")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer studenExamQuestionId;
    @Column(name = "SELECTED_STATEMENT")
    private Boolean selectedStatement;
    @Column(name = "SELECTED_VALUE")
    private BigDecimal selectedValue;
    @JoinTable(name = "student_multiple_choice_answers", joinColumns = {
        @JoinColumn(name = "STUDEN_EXAM_QUESTION_ID", referencedColumnName = "STUDEN_EXAM_QUESTION_ID")}, inverseJoinColumns = {
        @JoinColumn(name = "MULTIPLE_CHOICE_ANSWER_ID", referencedColumnName = "MULTIPLE_CHOICE_ANSWER_ID")})
    @ManyToMany
    private List<MultipleChoiceAnswer> multipleChoiceAnswerList;
    @JoinColumn(name = "QUESTION_ID", referencedColumnName = "QUESTION_ID")
    @ManyToOne(optional = false)
    private Question questionId;
    @JoinColumn(name = "STUDENT_EXAM_ID", referencedColumnName = "STUDENT_EXAM_ID")
    @ManyToOne(optional = false)
    private StudentExam studentExamId;
    @JoinColumn(name = "SINGLE_CHOICE_ANSWER_ID", referencedColumnName = "SINGLE_CHOICE_ANSWER_ID")
    @ManyToOne
    private SingleChoiceAnswer singleChoiceAnswerId;

    public StudentExamQuestion() {
    }

    public StudentExamQuestion(Integer studenExamQuestionId) {
        this.studenExamQuestionId = studenExamQuestionId;
    }

    public Integer getStudenExamQuestionId() {
        return studenExamQuestionId;
    }

    public void setStudenExamQuestionId(Integer studenExamQuestionId) {
        this.studenExamQuestionId = studenExamQuestionId;
    }

    public Boolean getSelectedStatement() {
        return selectedStatement;
    }

    public void setSelectedStatement(Boolean selectedStatement) {
        this.selectedStatement = selectedStatement;
    }

    public BigDecimal getSelectedValue() {
        return selectedValue;
    }

    public void setSelectedValue(BigDecimal selectedValue) {
        this.selectedValue = selectedValue;
    }

    public List<MultipleChoiceAnswer> getMultipleChoiceAnswerList() {
        return multipleChoiceAnswerList;
    }

    public void setMultipleChoiceAnswerList(List<MultipleChoiceAnswer> multipleChoiceAnswerList) {
        this.multipleChoiceAnswerList = multipleChoiceAnswerList;
    }

    public Question getQuestionId() {
        return questionId;
    }

    public void setQuestionId(Question questionId) {
        this.questionId = questionId;
    }

    @XmlTransient
    public StudentExam getStudentExamId() {
        return studentExamId;
    }

    public void setStudentExamId(StudentExam studentExamId) {
        this.studentExamId = studentExamId;
    }

    public SingleChoiceAnswer getSingleChoiceAnswerId() {
        return singleChoiceAnswerId;
    }

    public void setSingleChoiceAnswerId(SingleChoiceAnswer singleChoiceAnswerId) {
        this.singleChoiceAnswerId = singleChoiceAnswerId;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (studenExamQuestionId != null ? studenExamQuestionId.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof StudentExamQuestion)) {
            return false;
        }
        StudentExamQuestion other = (StudentExamQuestion) object;
        if ((this.studenExamQuestionId == null && other.studenExamQuestionId != null) || (this.studenExamQuestionId != null && !this.studenExamQuestionId.equals(other.studenExamQuestionId))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.mrvelibor.testiranjestudenata.data.model.StudentExamQuestion[ studenExamQuestionId=" + studenExamQuestionId + " ]";
    }
    
}
