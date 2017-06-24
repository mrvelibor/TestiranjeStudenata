package com.mrvelibor.testiranjestudenata.data.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "question")
public class Question {

    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "QUESTION_ID")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long questionId;

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
    
}
