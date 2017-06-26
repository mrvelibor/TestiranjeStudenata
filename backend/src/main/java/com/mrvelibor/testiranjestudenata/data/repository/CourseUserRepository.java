package com.mrvelibor.testiranjestudenata.data.repository;

import com.mrvelibor.testiranjestudenata.data.model.Course;
import com.mrvelibor.testiranjestudenata.data.model.StudentCourse;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CourseUserRepository extends JpaRepository<StudentCourse, Long> {
    List<StudentCourse> removeByCourse(Course course);
}
