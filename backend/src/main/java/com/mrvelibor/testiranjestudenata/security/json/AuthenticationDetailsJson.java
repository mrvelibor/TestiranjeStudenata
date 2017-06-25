package com.mrvelibor.testiranjestudenata.security.json;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;

@Data
@AllArgsConstructor
public class AuthenticationDetailsJson {
    String token;
    Authentication authentication;
}
