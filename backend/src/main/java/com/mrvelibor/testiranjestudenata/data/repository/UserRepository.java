package com.mrvelibor.testiranjestudenata.data.repository;

import com.mrvelibor.testiranjestudenata.data.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {
    User findOneByUsername(String username);
    User findOneByUsernameOrEmail(String username, String email);

    @Query(value =
            "SELECT user.* FROM course_user " +
                    "INNER JOIN user ON course_user.user_id = user.user_id " +
                    "WHERE course_user.course_id = ?1",
            nativeQuery = true
    )
    List<User> findByCourse(Long courseId);
}
