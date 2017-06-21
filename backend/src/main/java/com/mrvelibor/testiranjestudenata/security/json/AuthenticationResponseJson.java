package com.mrvelibor.testiranjestudenata.security.json;

import com.mrvelibor.testiranjestudenata.data.model.User;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class AuthenticationResponseJson {
    User user;
    String token;
}
