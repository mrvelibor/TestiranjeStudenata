package com.mrvelibor.testiranjestudenata.data.repository;

import com.mrvelibor.testiranjestudenata.data.model.StudentCourse;
import com.mrvelibor.testiranjestudenata.data.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface StudentCourseRepository extends JpaRepository<StudentCourse, Long> {
    Collection<StudentCourse> findByUser(User user);
}
