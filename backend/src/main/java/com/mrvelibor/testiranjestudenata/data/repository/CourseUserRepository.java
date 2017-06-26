package com.mrvelibor.testiranjestudenata.data.repository;

import com.mrvelibor.testiranjestudenata.data.model.Course;
import com.mrvelibor.testiranjestudenata.data.model.CourseUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CourseUserRepository extends JpaRepository<CourseUser, Long> {
    List<CourseUser> removeByCourse(Course course);
}
