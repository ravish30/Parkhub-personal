import { Box, Typography, TextField, Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Step4() {
  const navigate = useNavigate();

  const customizeHandler = () => {
    navigate('/myparking')
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
            InputProps={{ style: { color: "#fff", fontSize: "14px" } }}
            InputLabelProps={{ style: { color: "#fff", fontSize: "14px" } }}
            sx={{ borderBottom: "1px solid #fff", fontSize: "10px", width: "100%", marginTop: "30px" }}
          />
          <TextField
            type="password"
            name="verifypassword"
            label="Re-enter Password"
            variant="standard"
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