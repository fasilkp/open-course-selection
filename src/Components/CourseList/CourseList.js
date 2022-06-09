import React, { useEffect, useState } from "react";
import { Table, NavDropdown, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { TextField } from "@mui/material";
import "./CourseList.css";
import db from "../../Config/Firebase";
import { replaceSpecialCharecters } from "../../commonFunctions/idGenerate";
import { getDocs, collection, setDoc, doc } from "firebase/firestore";

function CourseList() {
  const style = {
    width: "50%",
    paddingBottom: "15px",
  };
  const [courses, setCourses] = useState([]);
  const [code, setCode] = useState("");
  const [course, setCourse] = useState("");
  const [subject, setSubject] = useState("");
  const [offeredBy, setOfferedBy] = useState("");
  const [filterOption, setFilterOption]=useState("");
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "OpenCourses"));
      setCourses(querySnapshot.docs);
    };
    fetchData().catch(console.error);
  }, []);
  const uploadCourse = async () => {
    await setDoc(doc(db, "OpenCourses", replaceSpecialCharecters(code)), {
      code,
      course,
      offeredBy,
      subject,
      alottedSlot: 0,
    })
      .then(() => {
        alert(" files inserted");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  return (
    <>
      <div className="CourseList">
        {/* <Table striped bordered hover className="course-list-table">
          <thead>
            <tr>
              <th style={style}>Filter: </th>
              <th>
                <NavDropdown title="All" id="nav-dropdown">
                  <NavDropdown.Item eventKey="4.1">All</NavDropdown.Item>
                  <NavDropdown.Item eventKey="4.2">Alotted</NavDropdown.Item>
                  <NavDropdown.Item eventKey="4.3">
                    Not Alloted
                  </NavDropdown.Item>
                </NavDropdown>
              </th>
            </tr>
          </thead>
        </Table> */}
        <Table striped bordered hover className="course-list-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Code</th>
              <th>Course</th>
              <th>Offered By</th>
              <th>Subject</th>
              <th>Alloted Slot</th>
            </tr>
          </thead>
          <tbody>
            {courses[0] &&
              courses.map((obj, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{obj.data().code}</td>
                    <td>{obj.data().course}</td>
                    <td>{obj.data().offeredBy}</td>
                    <td>{obj.data().subject}</td>
                    <td>{obj.data().alottedSlot}</td>
                  </tr>
                );
              })}

            <tr>
              <td>*</td>
              <td>
                <TextField
                  className="input-field"
                  id="outlined-basic"
                  label="enter code"
                  variant="filled"
                  value={code}
                  onChange={(e) => setCode(e.target.value.toUpperCase())}
                />
              </td>
              <td>
                <TextField
                  className="input-field"
                  id="outlined-basic"
                  label="enter course name"
                  variant="filled"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                />
              </td>
              <td>
                <TextField
                  className="input-field"
                  id="outlined-basic"
                  label="enter offered By"
                  variant="filled"
                  value={offeredBy}
                  onChange={(e) => setOfferedBy(e.target.value)}
                />
              </td>
              <td style={{ display: "flex" }}>
                <TextField
                  className="input-field"
                  id="outlined-basic"
                  label="enter subject"
                  variant="filled"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </td>
              <td>
                <Button
                  variant="success"
                  onClick={uploadCourse}
                  disabled={
                    code === "" ||
                    course === "" ||
                    offeredBy === "" ||
                    subject === ""
                  }
                >
                  Add
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default CourseList;
