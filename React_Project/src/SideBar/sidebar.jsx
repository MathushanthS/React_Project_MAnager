import React, { Component } from 'react';
import './sidebar.css'
import { Link } from 'react-router-dom';
class Sidebar extends Component {
    render() {
        return (
            <div>
                <div class="sidenav">
                    {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />*/}
                    <Link to="/Dashboard">
                        Dashboard
                    </Link>

                    <div class="dropdown">
                        < a>  Projects   <i class="fa fa-caret-down" /> </ a>
                        <div className="dropdown-content">
                            <Link to="/addProject">
                                <a>Create New Project</a>
                            </Link>
                            <Link to="/viewProject">
                                <a >Project List</a>
                            </Link>
                        </div>
                    </div>


                    < a className=" fa fa-wrench" href="/defect"> Defects</a>
                    <div class="dropdown">
                        < a className="   fa fa-users"> Users  <i class="fa fa-caret-down" /></a>
                        <div className="dropdown-content">
                            <a href="/pro">Profile</a>
                            <a href="#">Previlages</a>
                            <a href="#">Experience</a>
                        </div>
                    </div>

                    < a className=" fa fa-gears"> Settings</a>
                </div>
            </div>


        );
    }
}

export default Sidebar;