
import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SelectOpenCourse from './Components/SelectOpenCourse/SelectOpenCourse';

import './App.css'
import StudentLoginPage from './pages/StudentLoginPage';
import StudentProfilePage from './pages/StudentProfilePage';
import AdminLoginPage from './pages/AdminLoginPage';
import StudentListPage from './pages/StudentListPage';
import CourseListPage from './pages/CourseListPage';
function App() {
  return( 
  <Router>
  <div className='App'>
    <Routes>
    <Route path={"/"} element={<StudentLoginPage/>}/>
    <Route path={"/student/profile"} element={<StudentProfilePage/>}/>
    <Route path={"/student/select-course"} element={<SelectOpenCourse/>}/>
    <Route path={"/admin/"} element={<CourseListPage/>}/>
    <Route path={"/admin/login"} element={<AdminLoginPage/>}/>
    <Route path={"/admin/student-list"} element={<StudentListPage/>}/>
    </Routes>
  {/* <Login></Login> */}
  {/* <SelectOpenCourse></SelectOpenCourse> */}
  {/* <StudentProfile></StudentProfile> */}
  {/* <AdminHome></AdminHome> */}
  {/* <AdminLogin></AdminLogin> */}
  {/* <StudentList></StudentList> */}
  {/* <AdminHeader></AdminHeader> */}
  {/* <CourseList></CourseList> */}
  {/* <UploadStudent></UploadStudent> */}
  {/* <AddCourse></AddCourse> */}
  </div>
  </Router>
)}
export default App;
