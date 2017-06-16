package com.mrvelibor.testiranjestudenata.data.repository;

import com.mrvelibor.testiranjestudenata.data.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by Velibor on 15-Jun-17.
 */
public interface UserRepository extends JpaRepository<User, Integer> {
}
