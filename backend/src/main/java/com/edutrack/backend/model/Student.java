package com.edutrack.backend.model;

import com.edutrack.backend.enums.Gender;
import com.edutrack.backend.enums.StudentStatus;
import com.edutrack.backend.enums.Religion;
import com.edutrack.backend.enums.Category;
import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;

@Entity
@Table(name = "students")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = true, unique = true)
    private String registrationNumber;

    @Column(nullable = false)
    private String firstName;

    private String lastName;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String studentPhone;

    @Column(nullable = false)
    private String parentPhone;

    @Column(unique = true)
    private String aadhaar;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Gender gender;

    @Column(nullable = false)
    private String mothersName;

    @Column(nullable = false)
    private String fathersName;

    @Column(nullable = false)
    private String address;

    @Column(nullable = false)
    private Double sslcMarks;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private StudentStatus status;

  
    @Column(nullable = false)
    private String caste;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Category category;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Religion religion;

    private LocalDate dob;
}
