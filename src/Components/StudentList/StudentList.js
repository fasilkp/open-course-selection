import React from "react";
import { Table, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./StudentList.css";
function StudentList() {
    const style={
        width: "50%",
        paddingBottom: "15px"
      }
  return (
      <>
    <div className="StudentList">
      <Table striped bordered hover className="student-list-table">
        <thead>
          <tr>
            <th>Students Alotted : 40/50</th>
          </tr>
        </thead>
      </Table>
      <Table striped bordered hover className="student-list-table">
        <thead>
          <tr>
            <th style={style}>Filter: </th>
            <th>
              <NavDropdown title="All" id="nav-dropdown" >
                <NavDropdown.Item eventKey="4.1">All</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">
                  Alotted
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">
                  Not Alloted
                </NavDropdown.Item>
              </NavDropdown>
            </th>
          </tr>
        </thead>
      </Table>
      <Table striped bordered hover className="student-list-table">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
      </>
  );
}

export default StudentList;
