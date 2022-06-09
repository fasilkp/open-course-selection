import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { getDoc, doc, setDoc } from "firebase/firestore";
import db from "../../Config/Firebase";
import "./StudentProfile.css";
function StudentProfile() {
  const location = useLocation();
  const navigate = useNavigate();
  const [student, setStudent] = useState({});
  const { regNo } = location.state;
  const [email, setEmail]=useState("")
  useEffect(() => {
        console.log(regNo);
    const fetchData = async () => {
      const docSnap = await getDoc(doc(db, "Students", regNo));
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setStudent(docSnap.data());
        if(docSnap.data().openCourse!=="Not Selected"){
          navigate('/student/display', {state:{regNo, heading:"You are alotted To:"}})
        }
      } else {
        console.log("No such document!");
        navigate('/student/display', {state:{regNo, heading:"No Student Found"}})
      }
    };
    fetchData().catch(console.error);
  }, []);
  return (
    <div className="Profile">
      <div className="profile-container">
        <div className="p-rows  heading">
          <h2>PROFILE</h2>
        </div>
        <div className="p-rows">
          <label htmlFor="outlined-basics">Register No</label>
          <p>{regNo.toUpperCase()}</p>
        </div>
        <div className="p-rows">
          <label htmlFor="outlined-basics">Name</label>
          <p>{student && student.name}</p>
        </div>
        <div className="p-rows">
          <label htmlFor="outlined-basics">Course</label>
          <p>{student && student.courseName}</p>
        </div>
        <div className="p-rows">
          <label htmlFor="outlined-basics">Enter Email ID</label>
          <TextField
            className="input-field"
            id="outlined-basic"
            label="Email Id"
            variant="filled"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
          />
        </div>
        <div className="p-rows">
        <Link to="/student/select-course" state={{ regNo, email, course:student.courseName }} style={{width:"100%"}} className='links'>
          <Button className="btn" variant="contained" >Next</Button></Link>
        </div>
      </div>
    </div>
  );
}

export default StudentProfile;
