package com.mrvelibor.testiranjestudenata.security;

import com.mrvelibor.testiranjestudenata.security.json.AuthenticationDetailsJson;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

/**
 * Created by Velibor on 16-Jun-17.
 */
@RestController
public class AuthTestRestController {

    @GetMapping("tokentest")
    public AuthenticationDetailsJson test(HttpSession session, Authentication authentication) {
        return new AuthenticationDetailsJson(
                (String) session.getAttribute("token"),
                authentication
        );
    }

}
