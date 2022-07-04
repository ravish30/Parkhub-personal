import React, { useEffect, useState } from 'react'
import { Box, Grid, TextField, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useDispatch } from 'react-redux'
import { Step1Data } from '../../../Applications/slices/authSlice';
import { toast } from 'react-toastify';
import { useSendVerificationCodeMutation } from '../../../Applications/reducers/auth';
import { LoaderVisibility } from '../../../Applications/slices/loaderSlice';



function Step1(props) {
    const dispatch = useDispatch();

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [organization, setOrganization] = useState('')
    const [location, setLocation] = useState('')
    const [email, setEmail] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')

    const [saveUserData, { isLoading, isError, isSuccess, ...data }] = useSendVerificationCodeMutation();

    useEffect(() => {
        // console.log(data)
        if(isLoading)
        {
            dispatch(LoaderVisibility(true))
        }
        else if(isError)
        {
            dispatch(LoaderVisibility(false))
            toast.error(data.error.error, {
                position: 'top-center',
                autoClose: 2000
            });
        }
        else if(isSuccess)
        {
            // console.log(data);
            if(data.data.success)
            {
                // toast.success(data.data.message, {
                //     position: 'top-center',
                //     autoClose: 2000
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

    const step1Handler = () => {
        const data = {
            firstName: firstname,
            lastName: lastname,
            organization: organization,
            location: location,
            email: email,
            mobileNumber: mobileNumber
        }

        if (data?.firstName && data?.lastName && data?.organization && data?.location && data?.email && data?.mobileNumber) {
            dispatch(Step1Data(data));
            saveUserData(data);
            // props.nextHandler();
        }
        else {
            toast.warning('Please fill all fields', {
                position: 'top-center',
                autoClose: 2000
            });
        }

    }

    return (
        <>
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h6" color="primary">User Information</Typography>
                <Grid container spacing={5}>
                    <Grid item lg={6} md={6}>
                        <TextField
                            type="text"
                            name="firstname"
                            label="Firstname"
                            variant="standard"
                            onChange={(e) => setFirstname(e.target.value)}
                            value={firstname}
                            InputProps={{ style: { color: "#fff", fontSize: "14px" } }}
                            InputLabelProps={{ style: { color: "#fff", fontSize: "14px" } }}
                            sx={{ borderBottom: "1px solid #fff", fontSize: "10px", width: "100%", marginTop: "25px" }}
                        />
                        <TextField
                            type="text"
                            name="organization"
                            label="Organization"
                            variant="standard"
                            onChange={(e) => setOrganization(e.target.value)}
                            value={organization}
                            InputProps={{ style: { color: "#fff", fontSize: "14px" } }}
                            InputLabelProps={{ style: { color: "#fff", fontSize: "14px" } }}
                            sx={{ borderBottom: "1px solid #fff", fontSize: "10px", width: "100%", marginTop: "25px" }}
                        />
                    </Grid>
                    <Grid item lg={6} md={6}>
                        <TextField
                            type="text"
                            name="lastname"
                            label="Lastname"
                            variant="standard"
                            onChange={(e) => setLastname(e.target.value)}
                            value={lastname}
                            InputProps={{ style: { color: "#fff", fontSize: "14px" } }}
                            InputLabelProps={{ style: { color: "#fff", fontSize: "14px" } }}
                            sx={{ borderBottom: "1px solid #fff", fontSize: "10px", width: "100%", marginTop: "25px" }}
                        />
                        <TextField
                            type="text"
                            name="location"
                            label="Location"
                            variant="standard"
                            onChange={(e) => setLocation(e.target.value)}
                            value={location}
                            InputProps={{ style: { color: "#fff", fontSize: "14px" } }}
                            InputLabelProps={{ style: { color: "#fff", fontSize: "14px" } }}
                            sx={{ borderBottom: "1px solid #fff", fontSize: "10px", width: "100%", marginTop: "25px" }}
                        />
                    </Grid>
                </Grid>
                <Box>
                    <TextField
                        type="text"
                        name="email"
                        label="Email"
                        variant="standard"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        InputProps={{ style: { color: "#fff", fontSize: "14px" } }}
                        InputLabelProps={{ style: { color: "#fff", fontSize: "14px" } }}
                        sx={{ borderBottom: "1px solid #fff", fontSize: "10px", width: "100%", marginTop: "25px" }}
                    />
                    <TextField
                        type="text"
                        name="mobileNumber"
                        label="Mobile Number"
                        variant="standard"
                        onChange={(e) => setMobileNumber(e.target.value)}
                        value={mobileNumber}
                        InputProps={{ style: { color: "#fff", fontSize: "14px" } }}
                        InputLabelProps={{ style: { color: "#fff", fontSize: "14px" } }}
                        sx={{ borderBottom: "1px solid #fff", fontSize: "10px", width: "100%", marginTop: "25px" }}
                    />
                </Box>
            </Box>
            <Box sx={{ marginTop: "100px", fontSize: "14px", display: "flex", justifyContent: "end" }}>
                <Box display="flex" alignItems="center" sx={{ cursor: 'pointer' }} onClick={step1Handler}>
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

export default Step1