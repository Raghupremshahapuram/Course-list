import React, { Component } from "react";
import axios from "axios";

class Enquiries extends Component {
  state = {
    enquiries: [],
  };

  componentDidMount() {
    axios.get("http://localhost:5000/enquiries").then((response) => {
      this.setState({ enquiries: response.data });
    });
  }

  render() {
    const { enquiries } = this.state;
    
    return (
      
      <div>
        <h1>User Enquiries</h1>
        <ul>
          {enquiries.map((enquiry, index) => (
            <li key={index}>
              <p><strong>Course:</strong> {enquiry.courseName}</p>
              <p><strong>Name:</strong> {enquiry.name}</p>
              <p><strong>Email:</strong> {enquiry.email}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Enquiries;
