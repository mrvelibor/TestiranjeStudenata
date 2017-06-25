package com.mrvelibor.testiranjestudenata.security;

import com.mrvelibor.testiranjestudenata.data.model.User;
import com.mrvelibor.testiranjestudenata.data.model.UserRole;
import com.mrvelibor.testiranjestudenata.data.repository.UserRepository;
import com.mrvelibor.testiranjestudenata.security.json.AuthenticationRequestJson;
import com.mrvelibor.testiranjestudenata.security.json.AuthenticationResponseJson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@RestController
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenUtils tokenUtils;

    @Autowired
    private UserRepository userRepository;

    /**
     * Gets the authentication parameters from the POST call and logs the user in if the parameters match the ones in the database.
     * @param authenticationRequest
     * Username and password, JSON encoded
     * @return
     * The details of the logged in user.
     * @throws AuthenticationException
     * If username and/or password don't match the ones in the database.
     */
    @RequestMapping(value = "login", method = RequestMethod.POST)
    public ResponseEntity<AuthenticationResponseJson> authenticationRequest(@RequestBody AuthenticationRequestJson authenticationRequest) throws AuthenticationException {
        User user = userRepository.findOneByUsernameOrEmail(authenticationRequest.getUsername(), authenticationRequest.getUsername());
        Authentication authentication = this.authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        user,
                        authenticationRequest.getPassword()
                )
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);

        Map<String, Object> claims = new HashMap<>();
        claims.put("sub", user.getUsername());
        String token = tokenUtils.generateToken(claims);

        AuthenticationResponseJson response = new AuthenticationResponseJson(user, token);
        return ResponseEntity.ok(response);
    }

}
