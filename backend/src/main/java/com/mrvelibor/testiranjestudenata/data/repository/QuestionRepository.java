package com.mrvelibor.testiranjestudenata.data.repository;

import com.mrvelibor.testiranjestudenata.data.entities.Exam;
import com.mrvelibor.testiranjestudenata.data.entities.Question;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface QuestionRepository extends JpaRepository<Question, Long> {
    Collection<Question> findByExam(Exam exam);
}
