package com.edutrack.backend.dto;

import lombok.*;
import javax.validation.constraints.*;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TeacherDetailsRequest {

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
    @Min(value = 0, message = "Experience must be a non-negative number")
    private Integer experienceYears;
}
