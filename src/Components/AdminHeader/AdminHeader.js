import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AdminHeader.css";
import { Link } from "react-router-dom";

function AdminHeader() {
  const handleLogout=()=>{

  }
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="AdminHeader">
            Admin Panel
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto adminHeaders">
                <Nav.Link className="adminHeadersItem">
              <Link to="/admin/student-list" className="links">
                  Students
              </Link>
                </Nav.Link>
                <Nav.Link className="adminHeadersItem">
              <Link to="/admin" className="links">
                  Open Courses
              </Link>
                </Nav.Link>
                <Nav.Link className="adminHeadersItem" style={{color:"red"}} onClick={handleLogout}>
                  Logout
                </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default AdminHeader;
