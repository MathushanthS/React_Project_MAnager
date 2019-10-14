import React, { Component } from "react";
import axios from "axios";
import { Formik, Form, Field } from "formik";



 class AddProject extends Component{
     constructor(props){
         super(props);
         this.state = {projects: [], name:null};
         this.state = { id:"", projectName:"", projectDescr:""};
         this.handleChangeid = this.handleChangeid.bind(this);
         this.handleChangename = this.handleChangename.bind(this);
         this.handleChangedscr = this.handleChangedscr.bind(this);
         this.onSubmit = this.onSubmit.bind(this);
         this.routeProjectList = this.routeProjectList.bind(this);
     }
 

 //get id

    handleChangeid(i) {
     this.setState({
        projectId : i.target.value
     });
 }

 //get name

    handleChangename(n){
        this.setState({
            projectName : n.target.value
        });
    }

    handleChangedscr(d){
        this.setState({
            projectDescr : d.target.value
        });
    }

    onSubmit(i){
        i.preventDefault()

        const save = {
           // id : this.state.projectId,
            projectName : this.state.projectName,
            projectDescription : this.state.projectDescr
        }

        axios.post("http://localhost:8082/test/api/v1/project", save).then(res => {
            if (res.status === 200) {
            alert("Project Added successfully.!");
            window.location.reload();
        }
        });

        this.setState({
            id : "",
            projectName : "",
            projectDescription : ""
        });

        this.routeProjectList();

    }

    routeProjectList(){
        let path = `/`;
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
                onClick={this.routeProjectList}
              >
                <i className="fa fa-arrow-circle-left  "> Back</i>
              </button>
              <h3 align="center">ADD-PROJECTS</h3>
            </div>
    
            <Formik>
              <Form className="container" onSubmit={this.onSubmit}>
                {/* <fieldset>
                  <label>Project ID</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="id"
                    value={this.state.projectId}
                    onChange={this.handleChangeid}
                    placeholder=""
                  />
                </fieldset> */}
                <fieldset className="form-group">
                  <label>Project Name</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="name"
                    value={this.state.projectName}
                    onChange={this.handleChangename}
                    placeholder=""
                  />
                </fieldset>
                <fieldset className="form-group">
                  <label>Project Description</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="description"
                    value={this.state.projectDescr}
                    onChange={this.handleChangedscr}
                    placeholder=""
                  />
                </fieldset>
                <button
                  className="btn btn-success"
                  value="Submit"
                  type="submit"
                  align="center"
                >
                  <i className="fa fa-plus"> Add</i>
                </button>
                &nbsp;
                <button
                  className="btn btn-danger"
                  type="reset"
                  onClick={this.routeProjectList}
                  align="center"
                >
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

export default AddProject;