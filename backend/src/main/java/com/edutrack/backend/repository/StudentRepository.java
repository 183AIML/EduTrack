package com.edutrack.backend.repository;

import com.edutrack.backend.model.Student;
import com.edutrack.backend.model.User;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
    Optional<Student> findByUser(User user);
}
