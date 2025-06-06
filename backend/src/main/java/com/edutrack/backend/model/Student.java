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
}
