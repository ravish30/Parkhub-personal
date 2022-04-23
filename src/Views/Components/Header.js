import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import { useSelector, useDispatch } from 'react-redux'
import { LogoutUser } from '../../Applications/slices/authSlice'

const useStyles = makeStyles((theme) => ({
    // head: {
    //     '&:hover': {
    //         color: "#768BF9"
    //     }
    // }
    activeLink: {
        textDecoration: 'none',
        color: "#fff"
    },
    notActiveLink: {
        color: 'rgba(255,255,255,0.4)',
        textDecoration: 'none'
    },
}))

function Header() {
    const dispatch = useDispatch();
    const classes = useStyles();
    const isAuth = useSelector(state => state.auth.isAuth)
    const navigate = useNavigate();
    const logoutHandler = () => {
        localStorage.clear();
        dispatch(LogoutUser())
        navigate('/')
    }
    return (
        <>
            {isAuth && (
                <Box sx={{ marginLeft: "70px", marginTop: "20px", marginRight: "70px", display: "flex", justifyContent: "space-between" }}>
                    <Box display="flex" alignItems="center" gap="100px">
                        <Typography color="primary" variant="h4" className={classes.head}>PARKHUB</Typography>
                        <Box display="flex" gap="40px">
                            {/* <NavLink to="/about" className={(navigationData) => navigationData.isActive ? classes.activeLink : classes.notActiveLink}>ABOUT</NavLink> */}
                            <NavLink to="/myparking" className={(navigationData) => navigationData.isActive ? classes.activeLink : classes.notActiveLink}>MY PARKING</NavLink>
                            <NavLink to="/membership-plans" className={(navigationData) => navigationData.isActive ? classes.activeLink : classes.notActiveLink}>MEMBERSHIP PLANS</NavLink>
                            <NavLink to="/profile" className={(navigationData) => navigationData.isActive ? classes.activeLink : classes.notActiveLink}>PROFILE</NavLink>
                        </Box>
                    </Box>
                    {/* <Box sx={{ background: "#768BF9", width: "150px", height: "3px", borderRadius: "20px", marginTop: "5px" }}></Box> */}
                    <Box>
                        <Button color="secondary" variant="outlined" sx={{ borderRadius: "30px", padding: "7px 25px" }} onClick={logoutHandler}>Logout</Button>
                    </Box>
                </Box>
            )}
            {!isAuth && (
                <Box sx={{ marginLeft: "70px", marginTop: "20px", marginRight: "70px" }}>
                    <Box display="flex" alignItems="center" gap="100px">
                        <Typography color="primary" variant="h4" className={classes.head}>PARKHUB</Typography>
                        {/* <Box display="flex" gap="40px">
                            <NavLink to="/about" className={(navigationData) => navigationData.isActive ? classes.activeLink : classes.notActiveLink}>ABOUT</NavLink>
                        </Box> */}
                    </Box>
                </Box>
            )}
        </>
    )
}

export default Header