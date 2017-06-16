package com.mrvelibor.testiranjestudenata.security;

import io.jsonwebtoken.Claims;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.Arrays;

public class AuthenticationTokenFilter extends UsernamePasswordAuthenticationFilter {

    /**
     * The name of the Header parameter that contains the token.
     */
    @Value("Authorization")
    private String tokenHeaderName;

    @Autowired
    private TokenUtils tokenUtils;

    /**
     * Filters all REST calls and logs the user in if the token in the request Header is valid.
     * @param request
     * @param response
     * @param chain
     * @throws IOException
     * @throws ServletException
     */
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        try {
            HttpServletRequest httpRequest = (HttpServletRequest) request;
            HttpSession session = httpRequest.getSession();
            String tokenHeader = httpRequest.getHeader(tokenHeaderName);
            if(tokenHeader != null && tokenHeader.startsWith("Bearer ")) {
                String token = tokenHeader.substring("Bearer ".length());
                // Get the claims and validate the token
                Claims claims = tokenUtils.validateAndUseToken(token);
                // If the token is validated in the repository, log the user in
                if (claims != null) {
                    String username = claims.getSubject();
                    // TODO: Get real authorities and capabilities from the database
                    UserDetails userDetails = new User(username, "", Arrays.asList(new GrantedAuthority[]{new SimpleGrantedAuthority("ROLE_USER")}));
                    UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                    authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(httpRequest));
                    SecurityContextHolder.getContext().setAuthentication(authentication);
                    session.setAttribute("token", token);
                }
            }
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        chain.doFilter(request, response);
    }

}