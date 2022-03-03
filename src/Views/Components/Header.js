import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
    // head: {
    //     '&:hover': {
    //         color: "#768BF9"
    //     }
    // }
}))

function Header() {
    const classes = useStyles();
    return (
        <>
            <Box sx={{ marginLeft: "70px", marginTop: "20px" }}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Typography color="primary" variant="h4" className={classes.head}>PARKHUB</Typography>
                </Link>
                {/* <Box sx={{ background: "#768BF9", width: "150px", height: "3px", borderRadius: "20px", marginTop: "5px" }}></Box> */}
            </Box>
        </>
    )
}

export default Header