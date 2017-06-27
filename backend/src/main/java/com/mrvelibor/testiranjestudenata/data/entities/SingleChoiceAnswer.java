package com.mrvelibor.testiranjestudenata.data.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
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

/**
 *
 * @author Velibor
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "single_choice_answer")
public class SingleChoiceAnswer implements Serializable {

    @Id
    @Basic(optional = false)
    @Column(name = "SINGLE_CHOICE_ANSWER_ID")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long singleChoiceAnswerId;

    @JsonIgnore
    @NotNull
    @JoinColumn(name = "QUESTION_ID", referencedColumnName = "QUESTION_ID")
    @ManyToOne(optional = false)
    private Question question;

    @Lob
    @Size(max = 65535)
    @Column(name = "TEXT")
    private String text;

    @Size(max = 100)
    @Column(name = "IMAGE_URL")
    private String imageUrl;
    
}
