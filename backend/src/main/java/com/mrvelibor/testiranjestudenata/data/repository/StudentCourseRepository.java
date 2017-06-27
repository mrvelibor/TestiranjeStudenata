package com.mrvelibor.testiranjestudenata.data.repository;

import com.mrvelibor.testiranjestudenata.data.entities.CourseUser;
import com.mrvelibor.testiranjestudenata.data.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface StudentCourseRepository extends JpaRepository<CourseUser, Long> {
    Collection<CourseUser> findByUser(User user);
}
