package com.edutrack.backend.service;

import com.edutrack.backend.dto.*;
import com.edutrack.backend.exception.EmailAlreadyExistsException;
import com.edutrack.backend.exception.InvalidPasswordException;
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
            throw new EmailAlreadyExistsException("Email already exists");
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

    public void registerStudentFull(StudentFullRegisterRequest request) {
        if (userRepo.findByEmail(request.getEmail()).isPresent()) {
            throw new EmailAlreadyExistsException("Email already exists");
        }
        User user = new User();
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole(Role.STUDENT);
        userRepo.save(user);
        Student student = new Student();
        student.setUser(user);
        student.setName(request.getName());
        student.setDob(request.getDob());
        student.setPhone(request.getPhone());
        student.setAddress(request.getAddress());
        student.setDepartment(request.getDepartment());
        student.setSemester(request.getSemester());
        student.setGender(request.getGender());
        student.setReligion(request.getReligion());
        student.setCategory(request.getCategory());
        student.setCaste(request.getCaste());
        student.setAadhaar(request.getAadhaar());
        student.setGithubId(request.getGithubId());
        student.setSecondaryEmail(request.getSecondaryEmail());
        student.setPincode(request.getPincode());
        student.setCity(request.getCity());
        student.setDistrict(request.getDistrict());
        student.setState(request.getState());
        student.setFatherName(request.getFatherName());
        student.setMotherName(request.getMotherName());
        student.setParentsMobile(request.getParentsMobile());
        student.setSslcMarks(request.getSslcMarks());
        student.setRegistrationNumber(request.getRegistrationNumber());
        student.setAdmissionYear(request.getAdmissionYear());
        studentRepo.save(student);
    }

    public void registerTeacherFull(TeacherFullRegisterRequest request) {
        if (userRepo.findByEmail(request.getEmail()).isPresent()) {
            throw new EmailAlreadyExistsException("Email already exists");
        }
        User user = new User();
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole(Role.TEACHER);
        userRepo.save(user);
        Teacher teacher = new Teacher();
        teacher.setUser(user);
        teacher.setName(request.getName());
        teacher.setDob(request.getDob());
        teacher.setPhone(request.getPhone());
        teacher.setAddress(request.getAddress());
        teacher.setSubjectSpecialization(request.getSubjectSpecialization());
        teacher.setExperienceYears(request.getExperienceYears());
        teacherRepo.save(teacher);
    }

    public void saveStudentDetails(String email, StudentDetailsRequest request) {
        User user = userRepo.findByEmail(email).orElseThrow();
        Student student = studentRepo.findByUser(user).orElseThrow();

        student.setName(request.getName());
        student.setGender(request.getGender());
        student.setDob(request.getDob());
        student.setReligion(request.getReligion());
        student.setCategory(request.getCategory());
        student.setCaste(request.getCaste());
        student.setAadhaar(request.getAadhaar());
        student.setGithubId(request.getGithubId());
        student.setPhone(request.getPhone());
        student.setSecondaryEmail(request.getSecondaryEmail());
        student.setAddress(request.getAddress());
        student.setPincode(request.getPincode());
        student.setCity(request.getCity());
        student.setDistrict(request.getDistrict());
        student.setState(request.getState());
        student.setFatherName(request.getFatherName());
        student.setMotherName(request.getMotherName());
        student.setParentsMobile(request.getParentsMobile());
        student.setSslcMarks(request.getSslcMarks());
        student.setRegistrationNumber(request.getRegistrationNumber());
        student.setAdmissionYear(request.getAdmissionYear());
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

    public void changePassword(String email, ChangePasswordRequest request) {
        User user = userRepo.findByEmail(email).orElseThrow(() -> new RuntimeException("User not found"));
        if (!passwordEncoder.matches(request.getCurrentPassword(), user.getPassword())) {
            throw new InvalidPasswordException("Current password is incorrect");
        }
        String newPassword = request.getNewPassword();
        if (newPassword.length() < 8)
            throw new InvalidPasswordException("Password must be at least 8 characters");
        if (!newPassword.matches(".*[A-Z].*"))
            throw new InvalidPasswordException("Password must contain at least one uppercase letter");
        if (!newPassword.matches(".*[a-z].*"))
            throw new InvalidPasswordException("Password must contain at least one lowercase letter");
        if (!newPassword.matches(".*\\d.*"))
            throw new InvalidPasswordException("Password must contain at least one digit");
        if (!newPassword.matches(".*[@$!%*?&].*"))
            throw new InvalidPasswordException("Password must contain at least one special character (@$!%*?&)");
        user.setPassword(passwordEncoder.encode(newPassword));
        userRepo.save(user);
    }
}
