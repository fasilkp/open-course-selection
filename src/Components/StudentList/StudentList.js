import React, { useEffect, useState } from "react";
import { Table, NavDropdown, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { TextField, MenuItem, FormControl, Select, InputLabel } from "@mui/material";
import "./StudentList.css";
import db from "../../Config/Firebase";
import { replaceSpecialCharecters } from "../../commonFunctions/idGenerate";
import { getDocs, collection, setDoc, doc, query, where } from "firebase/firestore";

function StudentList() {
  const style = {
    width: "50%",
    paddingBottom: "15px",
  };
  const [students, setStudents] = useState([]);
  const [regNo, setRegNo] = useState("");
  const [course, setCourse] = useState("");
  const [courses, setCourses] = useState([]);
  const [name, setName] = useState("");
  const [offeredBy, setOfferedBy] = useState("");
  const[alottedCount, setAlottedCount]=useState(0)
  const [filterOption, setFilterOption]=useState("All");
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "Students"));
      setStudents(querySnapshot.docs);
      const queryCourse = await getDocs(collection(db, "CoursesFor"));
      setCourses(queryCourse.docs);
      setCourse(queryCourse.docs[0].data().courseName)
      const q = query(collection(db, "cities"), where("openCourse", "!=", "Not Selected"));
      const alotted = await getDocs(q);
      console.log(alotted)
      setAlottedCount(alotted.length+1)
    };
    fetchData().catch(console.error);
  }, []);
  const uploadStudent = async () => {
    await setDoc(doc(db, "Students", replaceSpecialCharecters(regNo)), {
      regNo,
      course,
      name,
      openCourse: "Not Selected",
    })
      .then(() => {
        alert(" files inserted");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleFilterOption=(op)=>{
    setFilterOption(op)
  }
  return (
    <>
      <div className="StudentList">
        <Table striped bordered hover className="student-list-table">
          <thead>
            <tr>
              <th>Students Alotted : {alottedCount}/50</th>
            </tr>
          </thead>
        </Table>
        <Table striped bordered hover className="student-list-table">
          <thead>
            <tr>
              <th style={style}>Filter: </th>
              {/* <th>
                <NavDropdown title={filterOption} id="nav-dropdown">
                  <NavDropdown.Item eventKey="4.1" onClick={()=>handleFilterOption('All')}>All</NavDropdown.Item>
                  <NavDropdown.Item eventKey="4.2" onClick={()=>handleFilterOption('Alotted')}>Alotted</NavDropdown.Item>
                  <NavDropdown.Item eventKey="4.3" onClick={()=>handleFilterOption('Not Alotted')}>Not Alloted</NavDropdown.Item>
                </NavDropdown>
              </th> */}
              <th>
                <select name="Courses" id="">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </th>
            </tr>
          </thead>
        </Table>
        <Table striped bordered hover className="student-list-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Reg No</th>
              <th>Name</th>
              <th>Course</th>
              <th>Open Course</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>*</td>
              <td>
                <TextField
                  className="input-field"
                  id="outlined-basic"
                  label="enter regNo"
                  variant="filled"
                  value={regNo}
                  onChange={(e) => setRegNo(e.target.value.toUpperCase())}
                />
              </td>
              <td>
                <TextField
                  className="input-field"
                  id="outlined-basic"
                  label="enter name"
                  variant="filled"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </td>
              <td>
                
                  <select
                    labelId="demo-simple-select-filled-label"
                    className="input-field defailtInput"
                    id="demo-simple-select-filled"
                    value={course}
                    placeholder="Select Open Course"
                    onChange={(e)=>setCourse(e.target.value)}
                  >
                    {
                      courses[0] &&
                      courses.map((obj, index)=>{
                          return <option key={index} value={obj.data().courseName}>{obj.data().courseName}</option>
                      })
                    }
    
                  </select>
          

              </td>
              <td>
                <Button
                  variant="success"
                  onClick={uploadStudent}
                  disabled={
                    regNo === "" ||
                    course === "" ||
                    name === ""
                  }
                >
                  Add
                </Button>
              </td>
            </tr>
            {students[0] &&
              students.map((obj, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{obj.data().regNo}</td>
                    <td>{obj.data().name}</td>
                    <td>{obj.data().courseName}</td>
                    <td>{obj.data().openCourse}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default StudentList;
