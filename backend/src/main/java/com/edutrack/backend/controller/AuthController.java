package com.edutrack.backend.controller;

import com.edutrack.backend.dto.*;
import com.edutrack.backend.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest request) {
        authService.register(request);
        return ResponseEntity.ok("User registered successfully");
    }

    @PostMapping("/personal-details/student")
    public ResponseEntity<?> saveStudentDetails(@RequestParam String email, @RequestBody StudentDetailsRequest request) {
        authService.saveStudentDetails(email, request);
        return ResponseEntity.ok("Student details saved");
    }

    @PostMapping("/personal-details/teacher")
    public ResponseEntity<?> saveTeacherDetails(@RequestParam String email, @RequestBody TeacherDetailsRequest request) {
        authService.saveTeacherDetails(email, request);
        return ResponseEntity.ok("Teacher details saved");
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody AuthRequest request) {
        return ResponseEntity.ok(authService.login(request));
    }
}
