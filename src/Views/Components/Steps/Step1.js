import React from 'react'
import { Box, Grid, TextField, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'


function Step1() {
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
                            InputProps={{ style: { color: "#fff", fontSize: "14px" } }}
                            InputLabelProps={{ style: { color: "#fff", fontSize: "14px" } }}
                            sx={{ borderBottom: "1px solid #fff", fontSize: "10px", width: "100%", marginTop: "25px" }}
                        />
                        <TextField
                            type="text"
                            name="organization"
                            label="Organization"
                            variant="standard"
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
                            InputProps={{ style: { color: "#fff", fontSize: "14px" } }}
                            InputLabelProps={{ style: { color: "#fff", fontSize: "14px" } }}
                            sx={{ borderBottom: "1px solid #fff", fontSize: "10px", width: "100%", marginTop: "25px" }}
                        />
                        <TextField
                            type="text"
                            name="location"
                            label="Location"
                            variant="standard"
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
                        InputProps={{ style: { color: "#fff", fontSize: "14px" } }}
                        InputLabelProps={{ style: { color: "#fff", fontSize: "14px" } }}
                        sx={{ borderBottom: "1px solid #fff", fontSize: "10px", width: "100%", marginTop: "25px" }}
                    />
                    <TextField
                        type="text"
                        name="mobileNumber"
                        label="Mobile Number"
                        variant="standard"
                        InputProps={{ style: { color: "#fff", fontSize: "14px" } }}
                        InputLabelProps={{ style: { color: "#fff", fontSize: "14px" } }}
                        sx={{ borderBottom: "1px solid #fff", fontSize: "10px", width: "100%", marginTop: "25px" }}
                    />
                </Box>
            </Box>
        </>
    )
}

export default Step1