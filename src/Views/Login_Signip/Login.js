import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { makeStyles, withStyles } from '@mui/styles'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LoginUser } from '../../Applications/slices/authSlice';
import { useFormik } from "formik";
import * as yup from "yup";

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

const validationSchema = yup.object({
    email: yup
        .string("Enter your email")
        .email("Enter a valid email")
        .required("Email is required"),
    password: yup
        .string("Enter your password")
        .min(8, "Password should be of minimum 8 characters length")
        .required("Password is required")
})



function Login() {
    const dispatch = useDispatch()
    const classes = useStyles();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            resetForm({});
            localStorage.setItem('isAuth', true)
            dispatch(LoginUser())
            navigate('/myparking')
        }
    })



    return (
        <>
            <Box>
                <Grid container spacing={2}>
                    <Grid item lg={6} md={6}>
                        <Box component="form" className={classes.formWrapper} onSubmit={formik.handleSubmit}>
                            <Typography component="div" sx={{ margin: "20px auto" }}>
                                <CssTextField
                                    type="email"
                                    label="Email"
                                    name="email"
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
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
                                    onBlur={formik.handleBlur}
                                    autoComplete="current-password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    error={
                                        formik.touched.password && Boolean(formik.errors.password)
                                    }
                                    helperText={formik.touched.password && formik.errors.password} variant="outlined"
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