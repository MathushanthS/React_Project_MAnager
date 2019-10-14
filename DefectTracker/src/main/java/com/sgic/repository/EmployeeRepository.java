package com.sgic.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sgic.entity.Employee;
import com.sgic.entity.Project;


@Repository
public interface EmployeeRepository extends JpaRepository<Project, Long> {

//	void save(Employee employee);

}
