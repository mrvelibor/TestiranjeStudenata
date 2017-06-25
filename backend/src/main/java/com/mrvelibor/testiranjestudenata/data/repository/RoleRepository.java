package com.mrvelibor.testiranjestudenata.data.repository;

import com.mrvelibor.testiranjestudenata.data.model.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by Velibor on 25-Jun-17.
 */
public interface RoleRepository extends JpaRepository<UserRole, Long> {
}
