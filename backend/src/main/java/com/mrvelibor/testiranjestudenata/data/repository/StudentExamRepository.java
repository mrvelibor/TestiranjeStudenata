package com.mrvelibor.testiranjestudenata.data.repository;

import com.mrvelibor.testiranjestudenata.data.model.Course;
import com.mrvelibor.testiranjestudenata.data.model.StudentExam;
import com.mrvelibor.testiranjestudenata.data.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface StudentExamRepository extends JpaRepository<StudentExam, Long> {
    Collection<StudentExam> findByStudent(User student);
    Collection<StudentExam> findByExam_Course(Course course);
}
