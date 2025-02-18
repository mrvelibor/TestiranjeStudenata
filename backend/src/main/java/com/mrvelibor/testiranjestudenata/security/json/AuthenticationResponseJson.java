package com.mrvelibor.testiranjestudenata.security.json;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.security.core.userdetails.UserDetails;

@Data
@AllArgsConstructor
public class AuthenticationResponseJson {
    UserDetails user;
    String token;
}
