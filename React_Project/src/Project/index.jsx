
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ProjectList from "./ListProject";
import AddProject from "./AddProject";
import EditProject from "./EditProject"

class ProjectIndex extends Component{
  render(){
    return(
      <Router>
        <Switch>
        <Route path="/" exact component={ProjectList} />
        <Route path="/project" exact component={AddProject} />
        <Route path="/project/:id" exact component={EditProject} />
        </Switch>
      </Router>
    )
  }
}

export default ProjectIndex;