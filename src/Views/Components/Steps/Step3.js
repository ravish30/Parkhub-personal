import React from 'react'
import { Box, Grid, MenuItem, Select, TextField, Typography } from '@mui/material'
import { withStyles } from '@mui/styles';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  },
})(TextField);

function Step3() {
  return (
    <>
      <Box>
        <Typography variant="h6" color="primary" sx={{ textAlign: 'center' }}>Parking Customization</Typography>
        <Box sx={{ marginTop: "60px" }}>
          <Grid container spacing={0}>
            <Grid item lg={10} md={10}>
              <Box sx={{ marginBottom: "60px" }}>
                <Typography color="primary" variant="p">Enter the number of basements in your parking.</Typography>
              </Box>
              <Box sx={{ marginTop: "60px" }}>
                <Typography color="primary" variant="p">Enter the number of cars per basement.</Typography>
              </Box>
            </Grid>
            <Grid item lg={2} md={2}>
              <CssTextField
                type="number"
                name=""
                label=""
                variant="standard"
                InputProps={{ style: { color: "#fff", fontSize: "14px" } }}
                InputLabelProps={{ style: { color: "#fff", fontSize: "14px" } }}
                sx={{ fontSize: "10px", width: "100%", borderBottom: "1px solid #fff", marginBottom: "20px" }}
              />
              <CssTextField
                type="number"
                name=""
                label=""
                variant="standard"
                InputProps={{ style: { color: "#fff", fontSize: "14px" } }}
                InputLabelProps={{ style: { color: "#fff", fontSize: "14px" } }}
                sx={{ fontSize: "10px", width: "100%", borderBottom: "1px solid #fff", marginTop: "20px" }}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default Step3