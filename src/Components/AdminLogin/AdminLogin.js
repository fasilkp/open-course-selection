import { TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import React, {useState} from 'react';
import Button from '@mui/material/Button';
import './AdminLogin.css'

function AdminLogin() {
    const [values, setValues]=useState("")
    const handleChange=()=>{}
    const handleClickShowPassword = () => {
        
      };
    
      const handleMouseDownPassword = () => {
        
      };
  return <div className="Login">
  <div className="login-header">
      <img src="data:image/jpeg;base64,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" alt="" />
      <h1>MAJLIS</h1>
      <h6>Arts and Science College</h6>
  </div>
  <div className="login-container admin">
      <div className="rows">
          <h2>LOGIN</h2>
      </div>
      <div className="rows">
            <TextField className="input-field" id="outlined-basic" label="Register No" variant="outlined" />
      </div>
      <div className="rows">
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" className="outputBox">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
          className="outputBox"
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </div>
      <div className="rows">
      <Button className="btn" variant="contained">Login</Button>
      </div>
  </div>

  </div>
}


export default AdminLogin