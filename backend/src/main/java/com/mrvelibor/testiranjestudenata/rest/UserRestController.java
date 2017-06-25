package com.mrvelibor.testiranjestudenata.rest;

import com.mrvelibor.testiranjestudenata.data.model.User;
import com.mrvelibor.testiranjestudenata.data.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Velibor on 24-Jun-17.
 */
@RestController("users")
public class UserRestController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    /*@GetMapping("/{userId}")
    public User getUser(@RequestParam Long userId) {
        return userRepository.findOne(userId);
    }*/

    @PostMapping
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }

}
