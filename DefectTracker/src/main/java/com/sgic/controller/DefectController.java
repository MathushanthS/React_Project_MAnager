package com.sgic.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;

import com.sgic.entity.Defect;
import com.sgic.entity.Project;
import com.sgic.exception.ResourceNotFoundException;
import com.sgic.repository.DefectRepostories;
import com.sgic.repository.ProjectRepository;

import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;


@RestController
@RequestMapping("/api/v1")
public class DefectController {
	@Autowired
	DefectRepostories defectRepostories;

	@Autowired
	ProjectRepository projectRepostories;

	
	 @PostMapping("/project/{projectId}") public Object
	 createDefect(@PathVariable(value = "projectId") Long
	 projectId, @Valid @RequestBody Defect defect) { return
	 projectRepostories.findById(projectId).map(project -> {
	 defect.setProject(project); return defectRepostories.save(defect); }); }
	 


	@GetMapping("/project/{projectId}/defects")
	public Page<Defect> getAllDefectsByProjectId(@PathVariable(value = "projectId") Long projectId, Pageable pageable) {
		return defectRepostories.findByProjectId(projectId, pageable);
	}

	@DeleteMapping("/project/{projectId}/defects/{defectsId}")
	public ResponseEntity<?> deleteDefect(@PathVariable(value = "projectId") Long projectId,
			@PathVariable(value = "defectsId") Long defectsId) {
		return defectRepostories.findByIdAndProjectId(defectsId, projectId).map(defects -> {
			defectRepostories.delete(defects);
			return ResponseEntity.ok().build();
		}).orElseThrow(() -> new ResourceNotFoundException(
				"Comment not found with id " + defectsId + " and projectId " + projectId));
	}


	
	@PutMapping("/project/{projectId}/defect/{defectId}")
	public Defect updateDefect(@PathVariable(value = "projectId") Long projectId,
			@PathVariable(value = "defectId") Long defectId, @Valid @RequestBody Defect req) {
		if (!projectRepostories.existsById(projectId)){
		throw new ResourceNotFoundException("projectId " + projectId + " not found");
	}
		return defectRepostories.findById(defectId).map(res -> {
			res.setName(req.getName());
			res.setPriority(req.getPriority());
			res.setServerity(req.getServerity());
			return defectRepostories.save(res);
		}).orElseThrow(() -> new ResourceNotFoundException("defectId " + defectId + "not found"));
	}
}
