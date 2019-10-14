import React from "react";
import axios from "axios";
// import Alert from 'react-s-alert';
// import "@fortawesome/fontawesome-free/css/all.min.css";

class ListProject extends React.Component {
    constructor(props) {
      super(props);
      this.state = { projects: []};
      this.deleteProject = this.deleteProject.bind(this);
      this.refreshProject = this.refreshProject.bind(this);
      this.routeAddProject = this.routeAddProject.bind(this);
    
    }

    routeAddProject(){
        let path = `/project`;
        this.props.history.push(path);
    }

    componentDidMount() {
        axios.get("http://localhost:8082/test/api/v1/project").then(response => {
          this.setState({ projects: response.data });
          console.table(response.data);
          console.warn("Books Service is working");
        });
    
        // CALLING REFRESH BOOK METHOD
        this.refreshProject();
      }

      refreshProject(){
        axios.get("http://localhost:8082/test/api/v1/project").then(response => {
            console.warn("Refresh Service is working");
            this.setState({ projects: response.data });
          });
      }

      routeEditProject(id) {
        
        this.props.history.push(`/project/${id}`);
      }
    

      deleteProject(id){
        axios
        .delete("http://localhost:8082/test/api/v1/project/" + id)
        .then(response => {
          console.warn("Delete Service is working");
          this.refreshProject(response);
  
          alert(" Book deleted successfully");
        });
      }


render(){
    console.log(this.state.projects);
    return(
    <div className="col-sm-12">
        <br />

        <h3 align="center">PROJECT-LIST</h3>
        <br />
        <div className="container" onLoad={this.refreshBook}>
          <button
            className="btn btn-success"
            type="submit"
            onClick={this.routeAddProject}
          >
            <i className="fa fa-plus"> Add</i>
          </button>
          <br />

          <br />

          <table className="table">
            <thead>
              <tr>
                <th>PROJECT ID</th>
                <th>PROJECT NAME</th>
                <th>PROJECT DESCRIBTION</th>
                
                <th> &nbsp; &nbsp; &nbsp; &nbsp;ACTION</th>
              </tr>
            </thead>
            <tbody>
              {this.state.projects.map(project => (
                <tr key={project.id}>
                  <td>{project.id}</td>
                  <td>{project.projectName}</td>
                  <td>{project.projectDescription}</td>
                  
                  <td>
                    <button className="btn btn-primary" type="submit">
                      <i
                        className="fa fa-edit"
                        onClick={() => this.routeEditProject(project.id)}
                      >
                        Edit
                      </i>
                    </button>
                    &nbsp;
                    <button
                      className="btn btn-danger"
                      //NORMAL CALL
                      //onClick={() => this.deleteProject(project.id)}

                      //CALL WITH CONFIRM MESSAGE
                      onClick={() =>
                        window.confirm(
                          "Are you sure you wish to delete this Book? "
                        ) && this.deleteProject(project.id)
                      }
                    >
                      <i className="fa fa-trash"> Delete</i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
                }

}


export default ListProject;