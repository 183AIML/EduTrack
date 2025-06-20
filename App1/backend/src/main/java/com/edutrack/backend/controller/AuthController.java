package com.edutrack.backend.controller;

import com.edutrack.backend.dto.*;
import com.edutrack.backend.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register/student-full")
    public ResponseEntity<?> registerStudentFull(@Valid @RequestBody StudentFullRegisterRequest request) {
        authService.registerStudentFull(request);
        return ResponseEntity.ok("Student registered successfully");
    }

    @PostMapping("/register/teacher-full")
    public ResponseEntity<?> registerTeacherFull(@Valid @RequestBody TeacherFullRegisterRequest request) {
        authService.registerTeacherFull(request);
        return ResponseEntity.ok("Teacher registered successfully");
    }

    @Deprecated
    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody RegisterRequest request) {
        authService.register(request);
        return ResponseEntity.ok("User registered successfully");
    }

    @Deprecated
    @PostMapping("/personal-details/student")
    public ResponseEntity<?> saveStudentDetails(@RequestParam String email,
            @Valid @RequestBody StudentDetailsRequest request) {
        authService.saveStudentDetails(email, request);
        return ResponseEntity.ok("Student details saved");
    }

    @Deprecated
    @PostMapping("/personal-details/teacher")
    public ResponseEntity<?> saveTeacherDetails(@RequestParam String email,
            @Valid @RequestBody TeacherDetailsRequest request) {
        authService.saveTeacherDetails(email, request);
        return ResponseEntity.ok("Teacher details saved");
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@Valid @RequestBody AuthRequest request) {
        return ResponseEntity.ok(authService.login(request));
    }

    @PostMapping("/change-password")
    public ResponseEntity<?> changePassword(@RequestParam String email,
            @Valid @RequestBody ChangePasswordRequest request) {
        authService.changePassword(email, request);
        return ResponseEntity.ok("Password changed successfully");
    }
}
