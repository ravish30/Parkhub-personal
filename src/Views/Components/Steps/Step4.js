import { Box, Typography, TextField } from '@mui/material'
import React from 'react'

function Step4() {
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
      </Box>
    </>
  )
}

export default Step4