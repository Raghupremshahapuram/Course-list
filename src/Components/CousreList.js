import React,{Component} from "react";
import axios from "axios";
import EnquireForm from "./EnquireForm"
class CourseList extends Component{
constructor(){
    super()
    this.state={
        courses:[],
        selectcourse:null
    }
}

    componentDidMount() {
        axios.get("http://localhost:5000/courses").then((response) => {
          this.setState({ courses: response.data });
        });
      }
    handleEnquire =(course)=>{
        this.setState({selectcourse:course});
    };
    handleFormClose = () =>{
        this.setState({selectcourse: null});

    };
render(){
    const { courses, selectcourse } = this.state; 
    return(
        <div>
            <h1>CourseList</h1>
            <ul>
            {courses.map((course) => (
            <li key={course.id}>
              <h3>{course.name}</h3>
              <p>{course.description}</p>
              <button onClick={() => this.handleEnquire(course)}>Enquire</button>
            </li>
          ))}
        </ul>
        {selectcourse && (
          <EnquireForm
            course={selectcourse}
            onClose={this.handleFormClose}
          />
        )}
      </div>
    )
}
}
export default CourseList;