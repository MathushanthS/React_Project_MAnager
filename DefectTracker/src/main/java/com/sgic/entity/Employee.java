package com.sgic.entity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="employee")
public class Employee {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public long id;
	

	@ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)

	@JoinColumn(name = "projectId")
	
	@JsonIgnore
	private Project project;
	
	@NotNull
	public String name;
	
	@NotNull
	public long describtion;
	
	
	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public long getDescribtion() {
		return describtion;
	}
	public void setDescribtion(long describtion) {
		this.describtion = describtion;
	}
}
