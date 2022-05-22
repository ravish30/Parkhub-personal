import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { makeStyles, withStyles } from '@mui/styles'
import { Box, Typography, Button, Modal, TextField } from "@mui/material";
import UserModal from "./UserModal";
import CancelModal from "./CancelModal";
import { useSelector } from "react-redux";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#000',
    border: '2px solid #000',
    borderRadius: "5px",
    p: 4,
    border: '1px solid #768BF9'
};

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


const useStyles = makeStyles((theme) => ({
    card: {
        border: "1px solid green",
        padding: "25px",
        borderRadius: "25px",
        margin: "5px",
        cursor: 'pointer',
        transition: '1s',
        "&:hover": {
            // border: "1px solid white",
            borderRadius: '25px',
        }
    },
    redcard: {
        border: "1px solid red",
        padding: "25px",
        borderRadius: "25px",
        margin: "5px",
        cursor: 'pointer',
        transition: '1s',
        "&:hover": {
            // border: "1px solid white",
            borderRadius: '25px',
        }
    }
}))

const CenterMode = (props) => {
    const classes = useStyles();

    const carArray = useSelector(state => state.parking.carArray);

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div>
            <Slider {...settings}>
                {carArray && carArray.map((data) => {
                    if (data.isVacant == true) {
                        return (
                            <Box sx={{ margin: "10px" }} key={data._id}>
                                <Box className={classes.card}>
                                    <Typography color="primary" sx={{ textAlign: 'center' }}>Vacant</Typography>
                                    <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ marginTop: "15px" }}>
                                        <Typography color="primary">Slot No :</Typography>
                                        <Typography color="primary" sx={{ border: "1px solid #fff", padding: "5px 10px", borderRadius: "10px", fontSize: "12px" }}>{data.slotId}</Typography>
                                    </Box>
                                    <Box sx={{ marginTop: "200px" }}>
                                        {/* <Button onClick={handleOpen} color="secondary" variant="outlined" sx={{ width: "100%", textAlign: 'center' }}>Park Here</Button> */}
                                        <UserModal basementNo={props.basementNo} _id={data._id} />
                                    </Box>
                                </Box>
                            </Box>
                        )
                    }
                    else if(data.isVacant == false) {
                        return (
                            <Box sx={{ margin: "10px" }} key={data._id}>
                                <Box className={classes.redcard}>
                                    <Typography color="primary" sx={{ textAlign: 'center' }}>Filled</Typography>
                                    <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ marginTop: "15px" }}>
                                        <Typography color="primary">Slot No :</Typography>
                                        <Typography color="primary" sx={{ border: "1px solid #fff", padding: "5px 10px", borderRadius: "10px", fontSize: "12px" }}>{data.slotId}</Typography>
                                    </Box>
                                    <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ marginTop: "15px" }}>
                                        <Typography color="primary">Name :</Typography>
                                        <Typography color="primary" sx={{ border: "1px solid #fff", padding: "5px 10px", borderRadius: "10px", fontSize: "12px" }}>{data.name}</Typography>
                                    </Box>
                                    <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ marginTop: "15px" }}>
                                        <Typography color="primary">Mobile No :</Typography>
                                        <Typography color="primary" sx={{ border: "1px solid #fff", padding: "5px 10px", borderRadius: "10px", fontSize: "12px" }}>{data.mobileNumber}</Typography>
                                    </Box>
                                    <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ marginTop: "15px" }}>
                                        <Typography color="primary">Car No :</Typography>
                                        <Typography color="primary" sx={{ border: "1px solid #fff", padding: "5px 10px", borderRadius: "10px", fontSize: "12px" }}>{data.carNo}</Typography>
                                    </Box>
                                    <Box sx={{ marginTop: "65px" }}>
                                        {/* <Button onClick={handleOpen} color="secondary" variant="outlined" sx={{ width: "100%", textAlign: 'center' }}>Cancel Booking</Button> */}
                                        <CancelModal basementNo={props.basementNo} _id={data._id} />
                                    </Box>
                                </Box>
                            </Box>
                        )
                    }
                })}
                
            </Slider>
        </div>
    );
}

export default CenterMode