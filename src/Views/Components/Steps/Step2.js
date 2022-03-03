import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import OtpInput from 'react-otp-input';

function Step2() {
  const [otp, setOtp] = useState('')

  const handleOTPChange = (otp) => {
    setOtp(otp)
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
    </>
  )
}

export default Step2