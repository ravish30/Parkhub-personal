import React, { useState } from 'react'
import { Box, Grid, MenuItem, Select, TextField, Typography } from '@mui/material'
import { withStyles } from '@mui/styles';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useDispatch } from 'react-redux'
import { Step3Data } from '../../../Applications/slices/authSlice';


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

function Step3(props) {
  const dispatch = useDispatch();

  const [basements, setBasements] = useState('')
  const [carsPerBasement, setCarsPerBasement] = useState('')

  const step3Handler = () => {
    const data = {
      noOfBasements: basements,
      noOfCarsPerBasement: carsPerBasement
    }
    if (data?.noOfBasements && data?.noOfCarsPerBasement) {
      dispatch(Step3Data(data));
      props.nextHandler();
    }

  }

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
                onChange={(e) => setBasements(e.target.value)}
                value={basements}
                InputProps={{ style: { color: "#fff", fontSize: "14px" } }}
                InputLabelProps={{ style: { color: "#fff", fontSize: "14px" } }}
                sx={{ fontSize: "10px", width: "100%", borderBottom: "1px solid #fff", marginBottom: "20px" }}
              />
              <CssTextField
                type="number"
                name=""
                label=""
                variant="standard"
                onChange={(e) => setCarsPerBasement(e.target.value)}
                value={carsPerBasement}
                InputProps={{ style: { color: "#fff", fontSize: "14px" } }}
                InputLabelProps={{ style: { color: "#fff", fontSize: "14px" } }}
                sx={{ fontSize: "10px", width: "100%", borderBottom: "1px solid #fff", marginTop: "20px" }}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box sx={{ marginTop: "100px", fontSize: "14px", display: "flex", justifyContent: "end" }}>
        <Box display="flex" alignItems="center" sx={{ cursor: 'pointer' }} onClick={step3Handler}>
          <Typography
            color="secondary"
            variant="p"
          >
            Next
          </Typography>
          <NavigateNextIcon color="secondary" />
        </Box>
      </Box>
    </>
  )
}

export default Step3