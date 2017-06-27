/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mrvelibor.testiranjestudenata.rest.json;

import com.mrvelibor.testiranjestudenata.data.entities.Course;
import com.mrvelibor.testiranjestudenata.data.entities.User;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.util.List;

/**
 *
 * @author Velibor
 */
@AllArgsConstructor
@NoArgsConstructor
public class CourseUsersJson {
    public Course course;
    public List<User> users;
}
