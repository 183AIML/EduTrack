package com.edutrack.backend.repository;

import com.edutrack.backend.model.Teacher;
import com.edutrack.backend.model.User;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TeacherRepository extends JpaRepository<Teacher, Long> {
    Optional<Teacher> findByUser(User user);
}
