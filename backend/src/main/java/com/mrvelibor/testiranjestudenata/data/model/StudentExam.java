package com.mrvelibor.testiranjestudenata.data.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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
@Data
@NoArgsConstructor
@AllArgsConstructor
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
    
}
