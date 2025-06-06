package com.edutrack.backend.dto;

import com.edutrack.backend.model.Role;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RegisterRequest {
    private String email;
    private String password;
    private Role role;
}
