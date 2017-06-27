package com.mrvelibor.testiranjestudenata.rest;

import com.mrvelibor.testiranjestudenata.data.entities.UserRole;
import com.mrvelibor.testiranjestudenata.data.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping(path = "roles")
public class RoleRestController {

    @Autowired
    private RoleRepository roleRepository;

    @GetMapping
    public List<UserRole> getAllUsers() {
        return roleRepository.findAll();
    }

    @GetMapping("{userId}")
    public UserRole getUserRole(@PathVariable Long roleId) {
        return roleRepository.findOne(roleId);
    }

}
