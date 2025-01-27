import React,{Component} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import CourseList from "./Components/CousreList";
import Enquiries from "./Components/Enquiries";

class Routing extends Component{
    render(){
        return(
            <Router>
              

          <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle" 
                        data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                                              
                    </button>
                
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                        <li> <Link to="/">Courses</Link> </li>
                        <li><Link to="/Enquires">User Enquiries</Link></li>
                    </ul>
                    </div>
                </div>
            </nav>
      <Routes>
        <Route path="/" element={<CourseList />} />
        <Route path="/Enquires" element={<Enquiries />} />
        
      </Routes>
    </Router>
        )
    }
}
export default Routing;