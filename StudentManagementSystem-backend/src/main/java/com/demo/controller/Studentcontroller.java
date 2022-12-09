package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.dao.Studentdao;
import com.demo.model.Student;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class Studentcontroller {

	@Autowired
	private Studentdao st;
	
//	Add Student
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/addrecord")
	public Student addrecord(@RequestBody Student std) {
		return this.st.save(std);
	}
	
//	Update Student
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/updaterecord")
	public Student updaterecord(@RequestBody Student std) {
		return this.st.save(std);
	}
	
//	Delete Student
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/deleterecord")
	public void deleterecord(@RequestBody Student std) {
		this.st.delete(std);
	}
	
//	View Data
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/viewrecord")
	public List<Student> viewrecord(){
		return this.st.findAll();
	}
}
