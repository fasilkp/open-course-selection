import { TextField, FormControl, InputLabel,Select,MenuItem } from '@mui/material';
import React, {useState} from 'react';
import Button from '@mui/material/Button';
import './SelectOpenCourse.css'

function SelectOpenCourse() {
  const [course, setCourse]=useState("")
  const handleChange=()=>{

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
                  value={course}
                  onChange={handleChange}>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
            </Select>
      </FormControl>
      </div>
      <div className="oc-rows">
      <Button className="btn" variant="contained">Submit</Button>
      </div>
  </div>

  </div>
}


export default SelectOpenCourse