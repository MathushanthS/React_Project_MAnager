package com.sgic.repository;

import java.util.Collection;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.sgic.entity.Defect;

public interface DefectRepostories extends JpaRepository<Defect, Long> {
	
	

	Page<Defect> findByProjectId(Long projectId, Pageable pageable);

	Optional<Defect> findByIdAndProjectId(Long id, Long projectId);
}
