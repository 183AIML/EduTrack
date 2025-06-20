package com.edutrack.backend.dto;

import lombok.*;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TeacherDashboardDto {
    private String name;
    private LocalDate dob;
    private String phone;
    private String address;
    private String subjectSpecialization;
    private Integer experienceYears;
    private String email;
}
