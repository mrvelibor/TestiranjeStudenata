package com.mrvelibor.testiranjestudenata.rest;

import com.mrvelibor.testiranjestudenata.data.model.Course;
import com.mrvelibor.testiranjestudenata.data.model.CourseUser;
import com.mrvelibor.testiranjestudenata.data.model.CourseUserPK;
import com.mrvelibor.testiranjestudenata.data.model.User;
import com.mrvelibor.testiranjestudenata.data.repository.CourseRepository;
import com.mrvelibor.testiranjestudenata.data.repository.CourseUserRepository;
import com.mrvelibor.testiranjestudenata.data.repository.UserRepository;
import com.mrvelibor.testiranjestudenata.rest.json.CourseUsersJson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@RestController()
@RequestMapping(path = "courses")
public class CourseRestController {

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private CourseUserRepository courseUserRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    @GetMapping("{courseId}")
    public CourseUsersJson getCourse(@PathVariable Long courseId) {
        Course course = courseRepository.findOne(courseId);
        List<User> users = userRepository.findByCourse(courseId);
        return new CourseUsersJson(course, users);
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

    @Transactional
    @PutMapping("{courseId}/users")
    public CourseUsersJson updateCourseUsers(@PathVariable Long courseId, @RequestBody List<Long> userIds) {
        Course course = courseRepository.findOne(courseId);
        List<CourseUser> courses = new ArrayList<>(userIds.size());
        List<User> users = new ArrayList<>(userIds.size());
        for (Long userId : userIds) {
            User user = userRepository.findOne(userId);
            CourseUser courseUser = new CourseUser();
            courseUser.setCourseUserPK(new CourseUserPK(userId, courseId));
            courses.add(courseUser);
            users.add(user);
        }
        courseUserRepository.removeByCourse(course);
        courseUserRepository.save(courses);
        return new CourseUsersJson(course, users);
    }

}
