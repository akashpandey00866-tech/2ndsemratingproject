package com.example.studentrestapi;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StudentController {

@GetMapping("/")
public String welcome() {

return "Welcome to Student REST API";

}

@GetMapping("/student")
public Student getStudent() {

return new Student(101, "Rahul Sharma", "Computer Science");

}

@PostMapping("/student")
public Student createStudent(@RequestBody Student student) {

return student;

}

}