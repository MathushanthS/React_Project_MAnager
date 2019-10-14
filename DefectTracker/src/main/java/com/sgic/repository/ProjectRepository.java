package com.sgic.repository;

import javax.validation.Valid;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.sgic.entity.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long>{

	

}
