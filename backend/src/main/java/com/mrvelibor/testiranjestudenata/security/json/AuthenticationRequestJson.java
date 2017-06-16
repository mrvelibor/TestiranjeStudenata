package com.mrvelibor.testiranjestudenata.security.json;

import lombok.Data;

@Data
public class AuthenticationRequestJson {
    String username;
    String password;
}
