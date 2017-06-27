package com.mrvelibor.testiranjestudenata.data.repository;

import com.mrvelibor.testiranjestudenata.data.entities.StudentExamQuestion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentExamQuestionRepository extends JpaRepository<StudentExamQuestion, Long> {
}
