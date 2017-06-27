package com.mrvelibor.testiranjestudenata.data.repository;

import com.mrvelibor.testiranjestudenata.data.entities.Exam;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Collection;

public interface ExamRepository extends JpaRepository<Exam, Long> {
    @Query(value =
            "SELECT exam.* FROM exam " +
                "INNER JOIN course ON course.course_id = exam.course_id " +
                "INNER JOIN course_user ON course_user.course_id = course.course_id " +
                "WHERE course_user.user_id = ?1 " +
                "AND exam.exam_id NOT IN (SELECT student_exam.exam_id FROM student_exam WHERE student_exam.user_id = ?1)",
            nativeQuery = true
    )
    Collection<Exam> findAvailable(Long userId);
}
