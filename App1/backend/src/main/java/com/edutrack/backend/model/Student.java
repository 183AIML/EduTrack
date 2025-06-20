package com.edutrack.backend.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;
import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "students")
public class Student implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "user_id", unique = true, nullable = false)
    private User user;

    private String name;
    private LocalDate dob;
    private String phone;
    private String address;
    private String department;
    private Integer semester;
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
