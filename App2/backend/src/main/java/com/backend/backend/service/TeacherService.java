package com.backend.backend.service;

import com.backend.backend.model.Teacher;
import com.backend.backend.model.User;
import com.backend.backend.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TeacherService {
    @Autowired
    private TeacherRepository teacherRepository;

    public Teacher registerTeacher(Teacher teacher) {
        return teacherRepository.save(teacher);
    }
}
