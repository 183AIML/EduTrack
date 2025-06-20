package com.edutrack.backend.dto;

import lombok.*;
import javax.validation.constraints.*;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TeacherFullRegisterRequest {
    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
    private String email;

    @NotBlank(message = "Password is required")
    private String password;

    @NotBlank(message = "Role is required")
    private String role; // Should be "TEACHER"

    // Teacher details
    @NotBlank(message = "Name is required")
    private String name;
    @NotNull(message = "Date of birth is required")
    private LocalDate dob;
    @Pattern(regexp = "\\d{10}", message = "Phone number must be 10 digits")
    private String phone;
    @NotBlank(message = "Address is required")
    private String address;
    @NotBlank(message = "Subject specialization is required")
    private String subjectSpecialization;
    @NotNull(message = "Experience is required")
    private Integer experienceYears;
}
