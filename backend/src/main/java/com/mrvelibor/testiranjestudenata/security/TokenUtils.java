package com.mrvelibor.testiranjestudenata.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;

import javax.annotation.PostConstruct;
import java.util.Date;
import java.util.Map;

/**
 * Created by Velibor on 12-Apr-17.
 */
public class TokenUtils {

    @Value("${mrvelibor.security.token_secret}")
    private String secret;

    @Value("${mrvelibor.security.token_expiration_mins}")
    private Long tokenExpiration;

    private static final long MILIS_TO_MINS = 60000;

    @PostConstruct
    private final void updateTimes() {
        tokenExpiration *= MILIS_TO_MINS;
    }

    private Claims getClaimsFromToken(String token) {
        return Jwts.parser()
                .setSigningKey(secret)
                .parseClaimsJws(token)
                .getBody();
    }

    public Claims validateAndUseToken(String token) {
        // TODO: Check token in database

        Claims claims = getClaimsFromToken(token);
        String username = claims.getSubject();
        Date expiration = claims.getExpiration();

        if(username == null || expiration.before(new Date())) {
            return null;
        }

        return claims;
    }

    public String generateToken(Map<String, Object> claims) {
        String token = Jwts.builder()
                .setClaims(claims)
                .setExpiration(new Date(System.currentTimeMillis() + this.tokenExpiration))
                .signWith(SignatureAlgorithm.HS512, this.secret)
                .compact();

        String userGuid = (String) claims.get("sub");
        // TODO: Save token to database

        return token;
    }

    public String refreshToken(String token) {
        final Claims claims = getClaimsFromToken(token);
        claims.put("created", new Date());
        String newToken = generateToken(claims);
        removeToken(token);
        return newToken;
    }

    public void removeToken(String token) {
        String userGuid = getClaimsFromToken(token).getSubject();
        // TODO: Remove token from database
    }

}
