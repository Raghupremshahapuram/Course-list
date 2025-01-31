import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../Redux/courseSlice";
import { useNavigate } from "react-router-dom";

const CourseList =()=>{
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {courses, status, error} = useSelector((state)=>state.courses);

  useEffect(()=>{
    if (status==="idle"){
      dispatch(fetchCourses());
    }
  },
  [status,dispatch]);
  if (status === "loading") return <p>Loading courses...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Courses</h1>
      {courses.map((course) => (
        <div key={course.id} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{course.name}</h5>
            <p className="card-text">{course.description}</p>
            <button onClick={() => navigate(`/enquire/${course.id}/${encodeURIComponent(course.name)}`)}>Enquire</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CourseList;