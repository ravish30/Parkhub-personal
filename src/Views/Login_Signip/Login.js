import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { makeStyles, withStyles } from '@mui/styles'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    formWrapper: {
        width: "400px",
        margin: "auto",
        marginTop: "100px"
    }
}))

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



function Login() {
    const classes = useStyles();
    return (
        <>
            <Box>
                <Grid container spacing={2}>
                    <Grid item lg={6} md={6}>
                        <Box component="form" className={classes.formWrapper}>
                            <Typography component="div" sx={{ margin: "20px auto" }}>
                                <CssTextField
                                    type="email"
                                    label="Email"
                                    name="email"
                                    variant="outlined"
                                    InputProps={{ style: { color: "#fff" } }}
                                    InputLabelProps={{ style: { color: "#fff" } }}
                                    sx={{ width: "100%", color: "#fff" }}
                                />
                            </Typography>
                            <Typography component="div" sx={{ margin: "20px auto" }}>
                                <CssTextField
                                    type="password"
                                    label="Password"
                                    name="password"
                                    variant="outlined"
                                    InputProps={{ style: { color: "#fff" } }}
                                    InputLabelProps={{ style: { color: "#fff" } }}
                                    sx={{ width: "100%", color: "#fff" }}
                                />
                            </Typography>
                            <Box sx={{ marginTop: "30px" }}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="secondary"
                                    sx={{ width: "100%", paddingTop: "10px", paddingBottom: "10px", borderRadius: "2px" }}
                                >
                                    Sign in
                                </Button>
                            </Box>
                            <Box sx={{ marginTop: "100px", textAlign: 'center' }}>
                                <Link to="/customize-parking" style={{ textDecoration: 'none' }}>
                                    <Typography variant="p" color="secondary">Customize your parking now !</Typography>
                                </Link>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={6} md={6}>
                        <Box sx={{ marginLeft: "20px" }}>
                            <img src={require('../Assets/car-parking.gif')} alt="" />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Login