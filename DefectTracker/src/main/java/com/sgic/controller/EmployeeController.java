package com.sgic.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.sgic.repository.DefectRepostories;
import com.sgic.repository.EmployeeRepository;
import com.sgic.repository.ProjectRepository;

@RestController
@RequestMapping("/api/v1")
public class EmployeeController {
	@Autowired
	DefectRepostories defectRepostories;

	@Autowired
	ProjectRepository projectRepostories;
	
	@Autowired
	EmployeeRepository employeeRepository;
	
	

	


}
