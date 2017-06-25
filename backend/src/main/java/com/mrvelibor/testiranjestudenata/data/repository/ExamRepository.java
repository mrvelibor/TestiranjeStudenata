package com.mrvelibor.testiranjestudenata.data.repository;

import com.mrvelibor.testiranjestudenata.data.model.Course;
import com.mrvelibor.testiranjestudenata.data.model.Exam;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface ExamRepository extends JpaRepository<Exam, Long> {
    Collection<Exam> findByCourse(Course course);
}
