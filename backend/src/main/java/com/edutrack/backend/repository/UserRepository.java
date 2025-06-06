package com.edutrack.backend.repository;

import com.edutrack.backend.model.User;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email); // Custom query to find user by email
}
