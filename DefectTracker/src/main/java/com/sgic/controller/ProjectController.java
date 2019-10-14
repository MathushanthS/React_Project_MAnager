package com.sgic.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sgic.entity.Defect;
import com.sgic.entity.Project;
import com.sgic.exception.ResourceNotFoundException;
import com.sgic.repository.ProjectRepository;

//import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = { "http://localhost:3000" })
@RestController
@RequestMapping("/api/v1")

public class ProjectController {
	@Autowired
	ProjectRepository projectRepository;

	@PostMapping(value = "/project")
	public ResponseEntity<?> createProject(@RequestBody Project project) {
		projectRepository.save(project);
		return new ResponseEntity<Object>(HttpStatus.OK);
	}

	@GetMapping("/project")
	public List<Project> getProject() {
		return projectRepository.findAll();
	}
//	}@GetMapping("/project/{id}") 
//	public ResponseEntity<Project> getProjectById(@PathVariable("id") Long id)
//	{ return new ResponseEntity<Project> (this.findById(id), HttpStatus.OK); }
//	
		@GetMapping("/project/{id}")
		public ResponseEntity<Project> getProjectById(@PathVariable(value = "id") Long id)
		 throws ResourceNotFoundException {
		 Project project = projectRepository.findById(id)
		   .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + id));
		 return ResponseEntity.ok().body(project);
		}
	
//	private Project findById(Long id) {
//		// TODO Auto-generated method stub
//		return null;
//	}

//	@PutMapping("/project/{id}")
//	public void updateProject(@Valid @RequestBody Project project) {
//		 projectRepository.save(project);
//	}
	
	
	@PutMapping("/project/{id}")
	 public ResponseEntity<Project> updateProject(@RequestBody Project project, @PathVariable long id) {

	 Optional<Project> projectOptional = projectRepository.findById(id);

	 if (!projectOptional.isPresent())
	 return ResponseEntity.notFound().build();

	 project.setId(id);

	 projectRepository.save(project);

	 return ResponseEntity.noContent().build();
	 }

	
	
	@DeleteMapping("/project/{projectId}")
	public void deleteProject(@PathVariable Long project) {

			projectRepository.deleteById(project);

	}

}
