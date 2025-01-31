import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { submitEnquiry } from "../Redux/enquirySlice";

import { useNavigate, useParams } from "react-router-dom";

const EnquireForm = () => {
  const { courseName } = useParams();
  const decodedCourseName = decodeURIComponent(courseName);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course] = useState(decodedCourseName);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitEnquiry({ name, email, course, }));
   
    navigate("/Enquiries");
  };

  return (
    <div>
    <h2>Enquire About: {decodedCourseName}</h2> 
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="text" value={course} readOnly />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default EnquireForm;
