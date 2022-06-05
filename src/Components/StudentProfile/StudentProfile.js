import { TextField } from '@mui/material';
import * as React from 'react';
import Button from '@mui/material/Button';
import './StudentProfile.css'

function Login() {
  return <div className="Profile">
  <div className="profile-container">
      <div className="p-rows  heading">
          <h2>PROFILE</h2>
      </div>
      <div className="p-rows">
            <label htmlFor="outlined-basics">Register No</label>
            <p>MSATSCS021</p>
      </div>
      <div className="p-rows">
            <label htmlFor="outlined-basics">Name</label>
            <p>Mohamed Fasil Kp</p>
      </div>
      <div className="p-rows">
            <label htmlFor="outlined-basics">Course</label>
            <p>Bsc Computer Science</p>
      </div>
      <div className="p-rows">
            <label htmlFor="outlined-basics">Enter Email ID</label>
            <TextField className="input-field" id="outlined-basic" label="Email Id" variant="filled" />
      </div>
      <div className="p-rows">
      <Button className="btn" variant="contained">Next</Button>
      </div>
  </div>

  </div>
}


export default Login