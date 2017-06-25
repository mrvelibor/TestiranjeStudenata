package com.mrvelibor.testiranjestudenata.rest;

import com.mrvelibor.testiranjestudenata.data.model.Course;
import com.mrvelibor.testiranjestudenata.data.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping(path = "courses")
public class CourseRestController {

    @Autowired
    private CourseRepository courseRepository;

    @GetMapping
    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    @GetMapping("{courseId}")
    public Course getCourse(@PathVariable Long courseId) {
        return courseRepository.findOne(courseId);
    }

    @DeleteMapping("{courseId}")
    public ResponseEntity deleteCourse(@PathVariable Long courseId) {
        courseRepository.delete(courseId);
        return new ResponseEntity(HttpStatus.OK);
    }

    @PostMapping
    public Course createCourse(@RequestBody Course course) {
        return courseRepository.save(course);
    }

}
