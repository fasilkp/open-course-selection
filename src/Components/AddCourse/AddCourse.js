import { TextField} from '@mui/material';
import React, {useState} from 'react';
import Button from '@mui/material/Button';
import './AddCourse.css'

function AddCourse() {
  const [course, setCourse]=useState("")
  const handleChange=()=>{

  }

  return <div className="AddCourse">
  <div className="ACHead">
        <h1>Add Open Course</h1>
  </div>
  <div className="ac-container">
      <div className="ac-rows">
      <TextField id="outlined-basic" label="Enter Course Name" style={{width:"100%"}} variant="standard" />
      </div>
      <div className="ac-rows">
      <Button className="btn" variant="contained">Add</Button>
      </div>
  </div>

  </div>
}


export default AddCourse