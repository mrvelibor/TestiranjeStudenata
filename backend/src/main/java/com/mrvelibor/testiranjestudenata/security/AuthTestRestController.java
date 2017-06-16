package com.mrvelibor.testiranjestudenata.security;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

/**
 * Created by Velibor on 16-Jun-17.
 */
@RestController
public class AuthTestRestController {

    @GetMapping("tokentest")
    public String test(HttpSession session) {
        return "Logged in with token: " + session.getAttribute("token");
    }

}
