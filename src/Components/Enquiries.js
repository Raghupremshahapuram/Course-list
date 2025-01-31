import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEnquiries } from "../Redux/enquirySlice";

const Enquiries = () => {
  const dispatch = useDispatch();
  const { enquiries, status, error } = useSelector((state) => state.enquiries);

  useEffect(() => {
    dispatch(fetchEnquiries());
  }, [dispatch]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    // <div>
    //   <h2>User Enquiries</h2>
    //   <ul>
    //     {enquiries.map((enquiry, index) => (
    //       <li key={index}>
            
    //         <strong>Name:</strong> {enquiry.name} | <strong>Email:</strong> {enquiry.email}
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  //   <div>
  //   <h2>User Enquiries</h2>
  //   <table border="1">
  //     <thead>
  //         <tr>
  //         <th>Course Name</th>
  //         <th>Name</th>
  //         <th>Email</th>
  //         </tr>
  //     </thead>
  //     <tbody>
  //       {enquiries.map((enquiry, index) => (
  //           <tr key={index}>
  //           <td>{enquiry.course}</td> {/* ✅ Display Course Name */}
  //           <td>{enquiry.name}</td>
  //           <td>{enquiry.email}</td>
  //           </tr>
  //       ))}
  //     </tbody>
  //   </table>
  // </div>
   <div>
   <h2>User Enquiries</h2>
   <table border="1">
     <thead>
       <tr>
         <th>Course Name</th>
         <th>Name</th>
         <th>Email</th>
       </tr>
     </thead>
     <tbody>
       {enquiries.map((enquiry, index) => (
         <tr key={index}>
           <td>{enquiry.course}</td>
           <td>{enquiry.name}</td>
           <td>{enquiry.email}</td>
         </tr> 
       ))}
     </tbody>
   </table>
 </div>
  );
};

export default Enquiries;
