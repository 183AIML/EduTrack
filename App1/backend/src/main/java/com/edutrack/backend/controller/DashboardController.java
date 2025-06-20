package com.edutrack.backend.controller;

import com.edutrack.backend.dto.StudentDashboardDto;
import com.edutrack.backend.dto.TeacherDashboardDto;
import com.edutrack.backend.model.Role;
import com.edutrack.backend.model.Student;
import com.edutrack.backend.model.Teacher;
import com.edutrack.backend.model.User;
import com.edutrack.backend.repository.StudentRepository;
import com.edutrack.backend.repository.TeacherRepository;
import com.edutrack.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/dashboard")
@RequiredArgsConstructor
public class DashboardController {
    private final UserRepository userRepository;
    private final StudentRepository studentRepository;
    private final TeacherRepository teacherRepository;

    @GetMapping("/student")
    public ResponseEntity<?> getStudentDashboard(Authentication authentication) {
        String email = authentication.getName();
        User user = userRepository.findByEmail(email).orElse(null);
        if (user == null)
            return ResponseEntity.badRequest().body("User not found");
        Student student = studentRepository.findByUser(user).orElse(null);
        if (student == null)
            return ResponseEntity.badRequest().body("Student details not found");
        StudentDashboardDto dto = StudentDashboardDto.builder()
                .name(student.getName())
                .dob(student.getDob())
                .phone(student.getPhone())
                .address(student.getAddress())
                .department(student.getDepartment())
                .semester(student.getSemester())
                .email(user.getEmail())
                .gender(student.getGender())
                .religion(student.getReligion())
                .category(student.getCategory())
                .caste(student.getCaste())
                .aadhaar(student.getAadhaar())
                .githubId(student.getGithubId())
                .secondaryEmail(student.getSecondaryEmail())
                .pincode(student.getPincode())
                .city(student.getCity())
                .district(student.getDistrict())
                .state(student.getState())
                .fatherName(student.getFatherName())
                .motherName(student.getMotherName())
                .parentsMobile(student.getParentsMobile())
                .sslcMarks(student.getSslcMarks())
                .registrationNumber(student.getRegistrationNumber())
                .admissionYear(student.getAdmissionYear())
                .build();
        return ResponseEntity.ok(dto);
    }

    @GetMapping("/teacher")
    public ResponseEntity<?> getTeacherDashboard(Authentication authentication) {
        String email = authentication.getName();
        User user = userRepository.findByEmail(email).orElse(null);
        if (user == null)
            return ResponseEntity.badRequest().body("User not found");
        Teacher teacher = teacherRepository.findByUser(user).orElse(null);
        if (teacher == null)
            return ResponseEntity.badRequest().body("Teacher details not found");
        TeacherDashboardDto dto = TeacherDashboardDto.builder()
                .name(teacher.getName())
                .dob(teacher.getDob())
                .phone(teacher.getPhone())
                .address(teacher.getAddress())
                .subjectSpecialization(teacher.getSubjectSpecialization())
                .experienceYears(teacher.getExperienceYears())
                .email(user.getEmail())
                .build();
        return ResponseEntity.ok(dto);
    }

    @GetMapping("/me")
    public ResponseEntity<?> getMyInfo(Authentication authentication) {
        String email = authentication.getName();
        User user = userRepository.findByEmail(email).orElse(null);
        if (user == null)
            return ResponseEntity.badRequest().body("User not found");
        // Return a simple map instead of anonymous class to avoid unused field warning
        return ResponseEntity.ok(java.util.Map.of(
                "email", user.getEmail(),
                "role", user.getRole()));
    }
}
