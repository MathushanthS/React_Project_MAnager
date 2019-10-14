import React, { Component } from "react";
import axios from "axios";
import {Formik,Form,Field} from "formik";

class EditProject extends Component{
    constructor(props){
        super(props);
        this.state ={projects:[] ,name:null};
        
        this.state.projects={
            id:this.props.match.params.id,
            projectName: "",
            projecDescription: ""
        };
        //this.handleChangeid=this.handleChangeid.bind(this);
        this.handleChangename=this.handleChangename.bind(this);
        this.handleChangedescription=this.handleChangedescription.bind(this);
        
        this.routeListProject= this.routeListProject.bind(this);
        this.onsubmit=this.onsubmit.bind(this);

    }

    componentDidMount(){
        axios
        .get("http://localhost:8082/test/api/v1/project/" +this.props.match.params.id).then(result=>
        {
            console.table(result);
            this.setState({
               id:result.data.id,
                projectName:result.data.projectName,
                projectDescription:result.data.projectDescription
            });
        });
    }

    //GeT ID Methode
    handleChangeid(e){
        this.setState({
            id:e.target.value
        });
    }

    handleChangename(f){
        this.setState({
            projectName:f.target.value
        });
    }

    handleChangedescription(g){
        this.setState({
            projectDescription:g.target.value
        });
    }

    onsubmit(e){
        e.preventDefault();

        const update={
            id:this.state.id,
            projectName:this.state.projectName,
            projectDescription:this.state.projectDescription
        };

        axios
        .put("http://localhost:8082/test/api/v1/project/id/", update).then(res => {
            if (res.status === 200) {
              alert("Project update successfully.");
              window.location.reload();
            }
          });

        this.routeListProject();
    }

    routeListProject(){
        let path='/';
        this.props.history.push(path);
    }

    render() {
        return (
          <div className="col-sm-12">
            <div className="container">
              <br />
              <button
                className="btn btn-primary"
                type="submit"
                onClick={this.routeListProject}
              >
                <i className="fa fa-arrow-circle-left  "> Back</i>
              </button>
              <h3 align="center">EDIT-Project</h3>
            </div>
    
            <Formik>
              <Form className="container" onSubmit={this.onSubmit}>
                <fieldset>
                  <label>Project Id</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="id"
                    value={this.state.id}
                    onChange={this.handleChangeid}
                    placeholder="Project Id Here"
                    disabled
                  />
                </fieldset>
                <fieldset className="form-group">
                  <label> projectName</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="projectname"
                    value={this.state.projectName}
                    onChange={this.handleChangename}
                    placeholder="Project Name Here"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <label> Project Description</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="projectdescr"
                    value={this.state.projectDescription}
                    onChange={this.handleChangedescription}
                    placeholder="Project Describtion here"
                  />
                </fieldset>
                <button
                  className="btn btn-success"
                  value="Submit"
                  type="submit"
                  align="center" >
                  <i className="fa fa-plus"> Update</i>
                </button>
                &nbsp;
                <button
                  className="btn btn-danger"
                  type="reset"
                  onClick={this.routeListProject}
                  align="center">
                  <i className="fa fa-location-arrow"> cancel</i>
                </button>
                <br />
                &nbsp; &nbsp; &nbsp;
              </Form>
            </Formik>
          </div>
        );
      }
}
export default EditProject;
