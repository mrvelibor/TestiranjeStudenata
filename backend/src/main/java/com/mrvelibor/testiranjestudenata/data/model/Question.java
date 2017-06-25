package com.mrvelibor.testiranjestudenata.data.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
    @Column(name = "QUESTION_ID")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long questionId;

    @JsonIgnore
    @JoinColumn(name = "EXAM_ID", referencedColumnName = "EXAM_ID")
    @ManyToOne(optional = false)
    private Exam exam;

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

    @JoinColumn(name = "SINGLE_CHOICE_ANSWER_ID", referencedColumnName = "SINGLE_CHOICE_ANSWER_ID")
    @ManyToOne
    private SingleChoiceAnswer singleChoiceAnswer;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "question")
    private List<MultipleChoiceAnswer> multipleChoiceAnswers;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "question")
    private List<SingleChoiceAnswer> singleChoiceAnswers;
    
}
