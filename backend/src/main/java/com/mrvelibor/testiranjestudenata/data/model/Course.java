package com.mrvelibor.testiranjestudenata.data.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author Velibor
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "course")
public class Course {

    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "COURSE_ID")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer courseId;

    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 5)
    @Column(name = "COURSE_CODE")
    private String courseCode;

    @Size(max = 100)
    @Column(name = "NAME")
    private String name;

    @XmlTransient
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "courseId")
    private List<Exam> examList;
    
}
