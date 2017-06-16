/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mrvelibor.testiranjestudenata.data.model;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;

/**
 *
 * @author Velibor
 */
@Entity
@Table(name = "student_exam")
public class StudentExam {

    @Column(name = "POINTS")
    private BigDecimal points;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "STUDENT_EXAM_ID")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer studentExamId;
    @Column(name = "START_TIME")
    @Temporal(TemporalType.TIMESTAMP)
    private Date startTime;
    @Column(name = "END_TIME")
    @Temporal(TemporalType.TIMESTAMP)
    private Date endTime;
    @JoinColumn(name = "EXAM_ID", referencedColumnName = "EXAM_ID")
    @ManyToOne(optional = false)
    private Exam examId;
    @JoinColumn(name = "USER_ID", referencedColumnName = "USER_ID")
    @ManyToOne(optional = false)
    private User userId;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "studentExamId")
    private List<StudentExamQuestion> studentExamQuestionList;

    public StudentExam() {
    }

    public StudentExam(Integer studentExamId) {
        this.studentExamId = studentExamId;
    }

    public Integer getStudentExamId() {
        return studentExamId;
    }

    public void setStudentExamId(Integer studentExamId) {
        this.studentExamId = studentExamId;
    }

    public Date getStartTime() {
        return startTime;
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }

    public Date getEndTime() {
        return endTime;
    }

    public void setEndTime(Date endTime) {
        this.endTime = endTime;
    }

    public Exam getExamId() {
        return examId;
    }

    public void setExamId(Exam examId) {
        this.examId = examId;
    }

    public User getUserId() {
        return userId;
    }

    public void setUserId(User userId) {
        this.userId = userId;
    }

    public List<StudentExamQuestion> getStudentExamQuestionList() {
        return studentExamQuestionList;
    }

    public void setStudentExamQuestionList(List<StudentExamQuestion> studentExamQuestionList) {
        this.studentExamQuestionList = studentExamQuestionList;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (studentExamId != null ? studentExamId.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof StudentExam)) {
            return false;
        }
        StudentExam other = (StudentExam) object;
        if ((this.studentExamId == null && other.studentExamId != null) || (this.studentExamId != null && !this.studentExamId.equals(other.studentExamId))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.mrvelibor.testiranjestudenata.data.model.StudentExam[ studentExamId=" + studentExamId + " ]";
    }

    public BigDecimal getPoints() {
        return points;
    }

    public void setPoints(BigDecimal points) {
        this.points = points;
    }
    
}
