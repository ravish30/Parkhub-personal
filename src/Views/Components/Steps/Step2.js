import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import OtpInput from 'react-otp-input';
import { toast } from 'react-toastify';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


function Step2(props) {
  const [otp, setOtp] = useState('')

  const handleOTPChange = (otp) => {
    setOtp(otp)
  }

  const step2Handler = () => {
    if (otp) {
      props.nextHandler();
      toast.success('Email Verified', {
        position: 'top-center',
        autoClose: 2000
      });
    }
  }

  return (
    <>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h6" color="primary">Email Verification</Typography>
        <Box sx={{ marginTop: "60px" }}>
          <Typography variant="p" color="primary" sx={{ fontSize: "14px" }}>
            You have been sent a 6 digit email verification code on your email id goy*********01@gmail.com
          </Typography>
        </Box>
        <Box sx={{ marginTop: "50px", display: "flex", justifyContent: 'center' }}>
          <Box>
            <OtpInput
              value={otp}
              onChange={handleOTPChange}
              numInputs={6}
              isInputNum="true"
              separator={<Box variant="span" sx={{ color: "#fff" }}>-</Box>}
              style={{ color: "#fff", height: "40px", width: "500px" }}
              inputStyle={{ width: "40px", height: "40px", margin: "10px" }}
            />
            {/* <Button onClick={() => console.log(otp)}>Verify</Button> */}
          </Box>
        </Box>
      </Box>
      <Box sx={{ marginTop: "100px", fontSize: "14px", display: "flex", justifyContent: "end" }}>
        <Box display="flex" alignItems="center" sx={{ cursor: 'pointer' }} onClick={step2Handler}>
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

export default Step2