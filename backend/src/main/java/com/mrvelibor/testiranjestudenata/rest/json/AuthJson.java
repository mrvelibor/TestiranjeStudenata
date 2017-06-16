/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mrvelibor.testiranjestudenata.rest.json;

import com.mrvelibor.testiranjestudenata.data.model.User;

/**
 *
 * @author Velibor
 */
public class AuthJson {
    public User user;
    public String token;
    
    public AuthJson() {
    }
    
    public AuthJson(User user, String token) {
        this.user = user;
        this.token = token;
    }
    
}
