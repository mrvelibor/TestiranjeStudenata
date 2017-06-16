package com.mrvelibor.testiranjestudenata.security.json;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class AuthenticationResponseJson {
    String token;
    String username;
    String type;
}
