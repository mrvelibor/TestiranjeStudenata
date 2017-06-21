package com.mrvelibor.testiranjestudenata.data.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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
@Data
@NoArgsConstructor
@AllArgsConstructor
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
    @XmlTransient
    private StudentExam studentExamId;

    @JoinColumn(name = "SINGLE_CHOICE_ANSWER_ID", referencedColumnName = "SINGLE_CHOICE_ANSWER_ID")
    @ManyToOne
    private SingleChoiceAnswer singleChoiceAnswerId;
    
}
