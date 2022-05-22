import React, { useState, useEffect } from 'react'
import { Box, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        marginTop: '60px'
    },
    planContainer: {
        border: '1px solid #fff',
        width: "320px",
        padding: "20px",
        borderRadius: '10px',
        '&:hover': {
            border: '1px solid #768BF9'
        }
    }
}))

function MembershipPlans() {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.root}>
                <Box className={classes.planContainer}>
                    <Typography color="primary" variant="h6" style={{ textAlign: 'center', fontWeight: 'bolder' }}>Standard</Typography>
                    <ul style={{ color: '#fff', marginTop: "40px" }}>
                        <li style={{ marginTop: "20px", marginBottom: "20px" }}>No of basements: 1</li>
                        <li style={{ marginTop: "20px", marginBottom: "20px" }}>Car per basement limit: 10</li>
                        <li style={{ marginTop: "20px", marginBottom: "20px" }}>Price: Rs 1</li>
                        <li style={{ marginTop: "20px", marginBottom: "20px" }}>Validity: 1 year</li>
                    </ul>
                    <Box sx={{ textAlign: 'center', marginTop: "110px" }}>
                        <Button color='secondary' variant='contained'>Subscribe Now</Button>
                    </Box>
                </Box>
                <Box className={classes.planContainer}>
                    <Typography color="primary" variant="h6" style={{ textAlign: 'center', fontWeight: 'bolder' }}>Gold</Typography>
                    <ul style={{ color: '#fff', marginTop: "40px" }}>
                        <li style={{ marginTop: "20px", marginBottom: "20px" }}>No of basements: Unlimited</li>
                        <li style={{ marginTop: "20px", marginBottom: "20px" }}>Car per basement limit: 10</li>
                        <li style={{ marginTop: "20px", marginBottom: "20px" }}>Price: Rs 5</li>
                        <li style={{ marginTop: "20px", marginBottom: "20px" }}>Validity: 1 year</li>
                    </ul>
                    <Box sx={{ textAlign: 'center', marginTop: "110px" }}>
                        <Button color='secondary' variant='contained'>Subscribe Now</Button>
                    </Box>
                </Box>
                <Box className={classes.planContainer}>
                    <Typography color="primary" variant="h6" style={{ textAlign: 'center', fontWeight: 'bolder' }}>Platinum</Typography>
                    <ul style={{ color: '#fff', marginTop: "40px" }}>
                        <li style={{ marginTop: "20px", marginBottom: "20px" }}>No of basements: Unlimited</li>
                        <li style={{ marginTop: "20px", marginBottom: "20px" }}>Car per basement limit: Unlimited</li>
                        <li style={{ marginTop: "20px", marginBottom: "20px" }}>Price: Rs 10</li>
                        <li style={{ marginTop: "20px", marginBottom: "20px" }}>Validity: 1 year</li>
                    </ul>
                    <Box sx={{ textAlign: 'center', marginTop: "110px" }}>
                        <Button color='secondary' variant='contained'>Subscribe Now</Button>
                    </Box>
                </Box>
                
            </Box>
        </>
    )
}

export default MembershipPlans