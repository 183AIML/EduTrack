package com.edutrack.backend.service;

import com.edutrack.backend.dto.*;
import com.edutrack.backend.model.*;
import com.edutrack.backend.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepo;
    private final StudentRepository studentRepo;
    private final TeacherRepository teacherRepo;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;

    public void register(RegisterRequest request) {
        if (userRepo.findByEmail(request.getEmail()).isPresent()) {
            throw new RuntimeException("User already exists");
        }

        User user = new User();
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole(request.getRole());

        userRepo.save(user);

        if (request.getRole() == Role.STUDENT) {
            Student student = new Student();
            student.setUser(user);
            studentRepo.save(student);
        } else if (request.getRole() == Role.TEACHER) {
            Teacher teacher = new Teacher();
            teacher.setUser(user);
            teacherRepo.save(teacher);
        }
    }

    public void saveStudentDetails(String email, StudentDetailsRequest request) {
        User user = userRepo.findByEmail(email).orElseThrow();
        Student student = studentRepo.findByUser(user).orElseThrow();

        student.setName(request.getName());
        student.setDob(request.getDob());
        student.setPhone(request.getPhone());
        student.setAddress(request.getAddress());
        student.setDepartment(request.getDepartment());
        student.setSemester(request.getSemester());

        studentRepo.save(student);
    }

    public void saveTeacherDetails(String email, TeacherDetailsRequest request) {
        User user = userRepo.findByEmail(email).orElseThrow();
        Teacher teacher = teacherRepo.findByUser(user).orElseThrow();

        teacher.setName(request.getName());
        teacher.setDob(request.getDob());
        teacher.setPhone(request.getPhone());
        teacher.setAddress(request.getAddress());
        teacher.setSubjectSpecialization(request.getSubjectSpecialization());
        teacher.setExperienceYears(request.getExperienceYears());

        teacherRepo.save(teacher);
    }

    public AuthResponse login(AuthRequest request) {
        User user = userRepo.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("Invalid credentials"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid credentials");
        }

        String token = jwtService.generateToken(user);
        return new AuthResponse(token, user.getRole());
    }
}
