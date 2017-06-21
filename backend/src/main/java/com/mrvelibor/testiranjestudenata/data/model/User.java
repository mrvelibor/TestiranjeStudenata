package com.mrvelibor.testiranjestudenata.data.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;
import javax.persistence.*;
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
@Table(name = "user")
public class User implements Serializable {

    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "USER_ID")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer userId;

    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 100)
    @Column(name = "USERNAME")
    private String username;

    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 256)
    @Column(name = "PASSWORD")
    private String password;

    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 100)
    @Column(name = "FULL_NAME")
    private String fullName;

    // @Pattern(regexp="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?", message="Invalid email")//if the field contains email address consider using this annotation to enforce field validation
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 100)
    @Column(name = "EMAIL")
    private String email;

    @JoinColumn(name = "USER_ROLE", referencedColumnName = "ROLE_ID")
    @ManyToOne(optional = false)
    private UserRole userRole;

    @XmlTransient
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "userId")
    private List<StudentExam> studentExamList;

    @XmlTransient
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "user")
    private List<StudentCourse> studentCourseList;
    
}
