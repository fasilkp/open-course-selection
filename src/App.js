
import React, {useContext, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SelectOpenCourse from './Components/SelectOpenCourse/SelectOpenCourse';

import './App.css'
import StudentLoginPage from './pages/StudentLoginPage';
import StudentProfilePage from './pages/StudentProfilePage';
import AdminLoginPage from './pages/AdminLoginPage';
import StudentListPage from './pages/StudentListPage';
import CourseListPage from './pages/CourseListPage';
import UploadStudentPage from './pages/UploadStudentPage';
import UploadCoursePage from './pages/UploadCoursePage';
import DisplayPage from './pages/DisplayPage';
function App() {


  return( 
  <Router>
  <div className='App'>
    <Routes>
    <Route path={"/"} element={<StudentLoginPage/>}/>
    <Route path={"/student/profile"} element={<StudentProfilePage/>}/>
    <Route path={"/student/Display"} element={<DisplayPage/>}/>
    <Route path={"/student/select-course"} element={<SelectOpenCourse/>}/>
    <Route path={"/admin/"} element={<CourseListPage/>}/>
    <Route path={"/admin/login"} element={<AdminLoginPage/>}/>
    <Route path={"/admin/student-list"} element={<StudentListPage/>}/>
    <Route path={"/admin/upload-course"} element={<UploadCoursePage/>}/>
    <Route path={"/admin/upload-student"} element={<UploadStudentPage/>}/>
    </Routes>

  </div>
  </Router>
)}
export default App;
