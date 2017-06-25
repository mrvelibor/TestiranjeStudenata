package com.mrvelibor.testiranjestudenata.data.repository;

import com.mrvelibor.testiranjestudenata.data.model.Course;
import com.mrvelibor.testiranjestudenata.data.model.Exam;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Collection;

public interface ExamRepository extends JpaRepository<Exam, Long> {
    Collection<Exam> findByCourse(Course course);

    @Query(value =
            "SELECT exam.* FROM exam " +
            "INNER JOIN course ON course.course_id = exam.course_id " +
            "INNER JOIN student_course ON student_course.course_id = course.course_id " +
            "WHERE student_course.user_id = ?1 " +
            "AND exam.exam_id NOT IN (SELECT student_exam.exam_id FROM student_exam WHERE student_exam.user_id = ?1)",
            nativeQuery = true
    )
    Collection<Exam> findAvailable(Long userId);
}
