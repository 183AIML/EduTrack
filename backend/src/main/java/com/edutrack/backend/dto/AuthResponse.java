package com.edutrack.backend.dto;

import com.edutrack.backend.model.Role;
import lombok.*;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class AuthResponse {
    private String token;
    private Role role;
}
