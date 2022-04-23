import { Box, Typography, TextField, Button } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function Step4() {
  const navigate = useNavigate();

  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')

  const customizeHandler = () => {
    const data = {
      password1: password1,
      password2: password2
    }

    if (data?.password1 && data?.password2) {
      if (data.password1 === data.password2) {
        navigate('/')
      }
      else {
        toast.warning('Passwords do not match', {
          position: 'top-center',
          autoClose: 2000
        })
      }
    }
  }
  return (
    <>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h6" color="primary">Setup your Password</Typography>
        <Box sx={{ marginTop: "30px" }}>
          <TextField
            type="password"
            name="password"
            label="Password"
            variant="standard"
            onChange={(e) => setPassword1(e.target.value)}
            value={password1}
            InputProps={{ style: { color: "#fff", fontSize: "14px" } }}
            InputLabelProps={{ style: { color: "#fff", fontSize: "14px" } }}
            sx={{ borderBottom: "1px solid #fff", fontSize: "10px", width: "100%", marginTop: "30px" }}
          />
          <TextField
            type="password"
            name="verifypassword"
            label="Re-enter Password"
            variant="standard"
            onChange={(e) => setPassword2(e.target.value)}
            value={password2}
            InputProps={{ style: { color: "#fff", fontSize: "14px" } }}
            InputLabelProps={{ style: { color: "#fff", fontSize: "14px" } }}
            sx={{ borderBottom: "1px solid #fff", fontSize: "10px", width: "100%", marginTop: "40px" }}
          />
        </Box>
        <Box display="flex" justifyContent="end" sx={{ marginTop: "100px" }}>
          <Button
            color="secondary"
            variant="contained"
            sx={{ padding: "10px 30px", borderRadius: "30px", textTransform: "capitalize" }}
            onClick={customizeHandler}
          >
            Customize Now
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default Step4