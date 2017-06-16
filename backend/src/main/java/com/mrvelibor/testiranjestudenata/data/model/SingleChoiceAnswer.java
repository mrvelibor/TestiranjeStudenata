/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mrvelibor.testiranjestudenata.data.model;

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
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author Velibor
 */
@Entity
@Table(name = "single_choice_answer")
public class SingleChoiceAnswer implements Serializable {

    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "SINGLE_CHOICE_ANSWER_ID")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer singleChoiceAnswerId;
    @Lob
    @Size(max = 65535)
    @Column(name = "TEXT")
    private String text;
    @Size(max = 100)
    @Column(name = "IMAGE_URL")
    private String imageUrl;
    @JoinColumn(name = "QUESTION_ID", referencedColumnName = "QUESTION_ID")
    @ManyToOne(optional = false)
    private Question questionId;

    public SingleChoiceAnswer() {
    }

    public SingleChoiceAnswer(Integer singleChoiceAnswerId) {
        this.singleChoiceAnswerId = singleChoiceAnswerId;
    }

    public Integer getSingleChoiceAnswerId() {
        return singleChoiceAnswerId;
    }

    public void setSingleChoiceAnswerId(Integer singleChoiceAnswerId) {
        this.singleChoiceAnswerId = singleChoiceAnswerId;
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
        hash += (singleChoiceAnswerId != null ? singleChoiceAnswerId.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof SingleChoiceAnswer)) {
            return false;
        }
        SingleChoiceAnswer other = (SingleChoiceAnswer) object;
        if ((this.singleChoiceAnswerId == null && other.singleChoiceAnswerId != null) || (this.singleChoiceAnswerId != null && !this.singleChoiceAnswerId.equals(other.singleChoiceAnswerId))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.mrvelibor.testiranjestudenata.data.model.SingleChoiceAnswer[ singleChoiceAnswerId=" + singleChoiceAnswerId + " ]";
    }
    
}
