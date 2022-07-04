import { Box, Button, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import OtpInput from 'react-otp-input';
import { toast } from 'react-toastify';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useSelector } from 'react-redux'
import { useVerifyEmailMutation } from '../../../Applications/reducers/auth'
import { LoaderVisibility } from '../../../Applications/slices/loaderSlice';


function Step2(props) {
  const [otp, setOtp] = useState('')
  const dispatch = useDispatch();

  const email = useSelector(state => state.auth.step1.email)

  const [verifyEmail, { isLoading, isError, isSuccess, ...data }] = useVerifyEmailMutation();


  const newEmail = email.slice(0, 4) + "**********" + email.slice(email.length - 12, email.length)

  const handleOTPChange = (otp) => {
    setOtp(otp)
  }

  useEffect(() => {
    // console.log(data)
    if (isLoading) {
      dispatch(LoaderVisibility(true))
    }
    else if (isError) {
      dispatch(LoaderVisibility(false))
      toast.error(data.error.error, {
        position: 'top-center',
        autoClose: 2000
      });
    }
    else if (isSuccess) {
      // console.log(data);
      if (data.data.success) {
        // toast.success(data.data.message, {
        //   position: 'top-center',
        //   autoClose: 2000
        // });
        dispatch(LoaderVisibility(false))
        props.nextHandler();
      }
      else {
        toast.warning(data.data.message, {
          position: 'top-center',
          autoClose: 2000
        });
        dispatch(LoaderVisibility(false))
      }
    }
  }, [data])

  const step2Handler = () => {
    if (otp && otp.length === 6) {
      const data = {
        email: email,
        otp: otp
      }
      verifyEmail(data);
      // props.nextHandler();
      // toast.success('Email Verified', {
      //   position: 'top-center',
      //   autoClose: 2000
      // });
    }
    else {
      toast.error('Enter the otp', {
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
            You have been sent a 6 digit email verification code on your email id {newEmail}
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
            Verify Email and Proceed
          </Typography>
          <NavigateNextIcon color="secondary" />
        </Box>
      </Box>
    </>
  )
}

export default Step2