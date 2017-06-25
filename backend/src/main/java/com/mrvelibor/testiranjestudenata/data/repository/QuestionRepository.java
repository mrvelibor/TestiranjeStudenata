package com.mrvelibor.testiranjestudenata.data.repository;

import com.mrvelibor.testiranjestudenata.data.model.Exam;
import com.mrvelibor.testiranjestudenata.data.model.Question;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface QuestionRepository extends JpaRepository<Question, Long> {
    Collection<Question> findByExam(Exam exam);
}
