package com.mrvelibor.testiranjestudenata.data.repository;

import com.mrvelibor.testiranjestudenata.data.entities.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, Long> {
    Course findOneByCourseCode(String courseCode);
}
