package com.mrvelibor.testiranjestudenata.data.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 *
 * @author Velibor
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "course_user")
public class CourseUser implements Serializable {

    @EmbeddedId
    protected CourseUserPK courseUserPK;

    @JoinColumn(name = "USER_ID", referencedColumnName = "USER_ID", insertable = false, updatable = false)
    @ManyToOne(optional = false)
    private User user;

    @JoinColumn(name = "COURSE_ID", referencedColumnName = "COURSE_ID", insertable = false, updatable = false)
    @ManyToOne(optional = false)
    private Course course;

    @Column(name = "COMPLETED")
    private Boolean completed;
    
}
