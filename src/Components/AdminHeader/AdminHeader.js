import React from 'react'
import {Navbar, Container, Nav, Button  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AdminHeader.css';

function AdminHeader() {
  return (
    <div>
        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home" className='AdminHeader'>Admin Panel</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" >
      <Nav className="me-auto adminHeaders">
        <Nav.Link><Button variant="primary" size="sm">Add Course</Button></Nav.Link>
        <Nav.Link><Button variant="info" size="sm" style={{color:"white"}}>Add Student</Button></Nav.Link>
        <Nav.Link href="#home" className='adminHeadersItem'>Students</Nav.Link>
        <Nav.Link href="#home" className='adminHeadersItem'>Courses</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default AdminHeader