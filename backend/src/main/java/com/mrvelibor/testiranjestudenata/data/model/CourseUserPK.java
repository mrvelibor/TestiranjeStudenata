package com.mrvelibor.testiranjestudenata.data.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.validation.constraints.NotNull;

/**
 *
 * @author Velibor
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
public class CourseUserPK implements Serializable {

    @Basic(optional = false)
    @NotNull
    @Column(name = "USER_ID")
    private Long userId;

    @Basic(optional = false)
    @NotNull
    @Column(name = "COURSE_ID")
    private Long courseId;
    
}
