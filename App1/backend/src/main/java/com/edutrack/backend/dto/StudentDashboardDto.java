package com.edutrack.backend.dto;

import lombok.*;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class StudentDashboardDto {
    private String name;
    private LocalDate dob;
    private String phone;
    private String address;
    private String department;
    private Integer semester;
    private String email;
    private String gender;
    private String religion;
    private String category;
    private String caste;
    private String aadhaar;
    private String githubId;
    private String secondaryEmail;
    private String pincode;
    private String city;
    private String district;
    private String state;
    private String fatherName;
    private String motherName;
    private String parentsMobile;
    private Double sslcMarks;
    private String registrationNumber;
    private Integer admissionYear;
}
