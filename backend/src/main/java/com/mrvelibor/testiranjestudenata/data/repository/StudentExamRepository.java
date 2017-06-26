package com.mrvelibor.testiranjestudenata.data.repository;

import com.mrvelibor.testiranjestudenata.data.model.StudentExam;
import com.mrvelibor.testiranjestudenata.data.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Collection;

public interface StudentExamRepository extends JpaRepository<StudentExam, Long> {
    Collection<StudentExam> findByStudent(User student);

    @Query(value =
            "SELECT student_exam.* FROM student_exam " +
                    "INNER JOIN exam ON exam.exam_id = student_exam.exam_id " +
                    "INNER JOIN course ON course.course_id = exam.course_id " +
                    "INNER JOIN course_user ON course_user.course_id = course.course_id " +
                    "WHERE course_user.user_id = ?1",
            nativeQuery = true
    )
    Collection<StudentExam> findByProfesor(Long userId);
}
