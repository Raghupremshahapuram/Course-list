import React,{Component} from "react";
import axios from "axios";

class EnquireForm extends Component{
constructor(){
    super()
    this.state={
        name:"",
        email:""
    };
}
handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { course } = this.props;
    const enquiry = {
      courseId: course.id,
      courseName: course.name,
      name: this.state.name,
      email: this.state.email,
    };
    axios.post("http://localhost:5000/enquiries", enquiry).then(() => {
        alert("Enquiry submitted successfully!");
        this.props.onClose();
      });
    };

  render() {
    const { course, onClose } = this.props;
    return (
      <div>
        <h2>Enquire about {course.name}</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </label>
          <br />
          <button type="submit" class="btn btn-primary">Submit</button>  
          <button type="button" class="btn btn-primary btn-sm" onClick={onClose}>
            Close
          </button>
        </form>
      </div>
    );
  }
}
export default EnquireForm;