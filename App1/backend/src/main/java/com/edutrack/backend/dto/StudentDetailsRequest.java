package com.edutrack.backend.dto;

import lombok.*;
import javax.validation.constraints.*;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class StudentDetailsRequest {

    @NotBlank(message = "Name is required")
    private String name;

    @NotBlank(message = "Gender is required")
    private String gender;

    @NotNull(message = "Date of birth is required")
    private LocalDate dob;

    @NotBlank(message = "Religion is required")
    private String religion;

    @NotBlank(message = "Category is required")
    private String category;

    @NotBlank(message = "Aadhaar number is required")
    @Pattern(regexp = "\\d{12}", message = "Aadhaar must be 12 digits")
    private String aadhaar;

    @Pattern(regexp = "\\d{10}", message = "Phone number must be 10 digits")
    @NotBlank(message = "Mobile number is required")
    private String phone;

    @NotBlank(message = "Father's name is required")
    private String fatherName;

    @NotBlank(message = "Mother's name is required")
    private String motherName;

    @Pattern(regexp = "\\d{10}", message = "Parents' mobile number must be 10 digits")
    @NotBlank(message = "Parents' mobile number is required")
    private String parentsMobile;

    @NotNull(message = "SSLC marks are required")
    private Double sslcMarks;

    @NotNull(message = "Admission year is required")
    private Integer admissionYear;

    @NotBlank(message = "Department is required")
    private String department;

    @NotNull(message = "Semester is required")
    @Min(value = 1, message = "Semester must be at least 1")
    @Max(value = 6, message = "Semester must not exceed 6")
    private Integer semester;

    private String registrationNumber;
    private String secondaryEmail;
    private String pincode;
    private String city;
    private String district;
    private String state;
    private String githubId;
    private String caste;

    // Add missing address field
    private String address;
}
