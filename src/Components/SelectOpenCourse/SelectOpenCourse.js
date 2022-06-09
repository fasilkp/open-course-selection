import { TextField, FormControl, InputLabel,Select,MenuItem } from '@mui/material';
import React, {useState, useEffect} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import db from '../../Config/Firebase'
import { replaceSpecialCharecters } from '../../commonFunctions/idGenerate';
import { getDocs, collection, getDoc, doc, updateDoc, setDoc, increment } from 'firebase/firestore';
import './SelectOpenCourse.css'

function SelectOpenCourse() {
  const [opCourse, setOpCourse]=useState("")
  const [courses, setCourses]=useState([])
  const [courseFor, setCourseFor]=useState([])
  const [load, setLoad]=useState(false)
  const [avlbCourses, setAvlbCourses]=useState([])
  const location=useLocation()
  const navigate=useNavigate()
  const {regNo, course, email}=location.state
  useEffect(()=>{
      const fetchData = async () => {
            const querySnapshot = await getDocs(collection(db, "OpenCourses"));
            setCourses(querySnapshot.docs);
            const queryCourses = await getDoc(doc(db, "CoursesFor", replaceSpecialCharecters(course) ));
            setCourseFor(queryCourses.data());
            console.log(queryCourses.data());
            var newArr=[]
            querySnapshot.docs.filter((val)=> {
                  // return queryCourses.data().arr == -1;
                  console.log(val.data().code)
                  queryCourses.data().arr.filter((item)=>{
                        if(item.code==val.data().code && val.data().alottedSlot<=60){
                              newArr.push(item)
                        }
                  })
                });
            console.log(newArr)
            setAvlbCourses([...newArr])
          }
          fetchData()
            .catch(console.error);
  },[])
  const handleSubmit=async()=>{
        setLoad(true)
      await setDoc(doc(db, "Students", regNo), {
            openCourseCode:replaceSpecialCharecters(opCourse.split("|")[0]),
            openCourse:opCourse.split("|")[1],
            email
          },{ merge: true });
          await updateDoc(doc(db, "OpenCourses", replaceSpecialCharecters(opCourse.split("|")[0])), {
            alottedSlot: increment(1)
        });
        navigate('/student/display', {state:{regNo, heading:"You are Alotted To:"}})
        setLoad(false)
  }

  return <div className="OpenCourse">
  <div className="OCHead">
        <h1>Select Open Course</h1>
  </div>
  <div className="oc-container">
      <div className="oc-rows">
      <FormControl fullWidth variant="filled">
            <InputLabel id="demo-simple-select-label">Select Open Course</InputLabel>
            <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                  value={opCourse}
                  onChange={(e)=>setOpCourse(e.target.value)}>

                        {
                              avlbCourses[0] &&
                              avlbCourses.map((obj, index)=>{
                                    return <MenuItem key={index} value={obj.code+"|"+obj.course} className="opMenu">
                                          
                                          <div> <b>Name:</b> {obj.course}</div>
                                          <div> <b>Offered By:</b> {obj.offeredBy}</div>
                                          
                                          </MenuItem>
                              })
                        }
            </Select>
      </FormControl>
      </div>
      <div className="oc-rows">
      <Button className="btn" variant="contained" onClick={handleSubmit}
      disabled={opCourse==""}
      >{load ? "loading..." : "Submit"}</Button>
      </div>
  </div>

  </div>
}


export default SelectOpenCourse