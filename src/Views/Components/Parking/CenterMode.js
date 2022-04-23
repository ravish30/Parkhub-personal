import React, { useState } from "react";
import Slider from "react-slick";
import { makeStyles, withStyles } from '@mui/styles'
import { Box, Typography, Button, Modal, TextField } from "@mui/material";

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
    }
}))

const CenterMode = () => {
    const classes = useStyles();

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
                {new Array(50).fill("").map((i, _) => {
                    return (
                        <Box sx={{ margin: "10px" }}>
                            <Box className={classes.card}>
                                <Typography color="primary" sx={{ textAlign: 'center' }}>Vacant</Typography>
                                <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ marginTop: "15px" }}>
                                    <Typography color="primary">Slot No :</Typography>
                                    <Typography color="primary" sx={{ border: "1px solid #fff", padding: "5px 10px", borderRadius: "10px", fontSize: "12px" }}>B1P1</Typography>
                                </Box>
                                <Box sx={{ marginTop: "200px" }}>
                                    <Button onClick={handleOpen} color="secondary" variant="outlined" sx={{ width: "100%", textAlign: 'center' }}>Park Here</Button>
                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                        sx={{ background: 'transparent' }}
                                        hideBackdrop={true}
                                    >
                                        <Box sx={style}>
                                            <Typography id="modal-modal-title" color="secondary" variant="h6" component="h2" sx={{ textAlign: 'center' }}>
                                                Customer Details
                                            </Typography>
                                            <Box sx={{ marginTop: "40px" }}>
                                                <Typography component="div" sx={{ margin: "20px auto" }}>
                                                    <CssTextField
                                                        type="text"
                                                        label="Customer Name"
                                                        name="customerName"
                                                        InputProps={{ style: { color: "#fff" } }}
                                                        InputLabelProps={{ style: { color: "#fff" } }}
                                                        sx={{ width: "100%", color: "#fff" }}
                                                    />
                                                </Typography>
                                                <Typography component="div" sx={{ margin: "20px auto" }}>
                                                    <CssTextField
                                                        type="number"
                                                        label="Customer Mobile Number"
                                                        name="customerNumber"
                                                        InputProps={{ style: { color: "#fff" } }}
                                                        InputLabelProps={{ style: { color: "#fff" } }}
                                                        sx={{ width: "100%", color: "#fff" }}
                                                    />
                                                </Typography>

                                            </Box>
                                            <Box display="flex" justifyContent="end">
                                                <Button color="secondary" onClick={handleClose}>Cancel</Button>
                                                <Button color="secondary" onClick={handleClose}>Save</Button>
                                            </Box>
                                        </Box>
                                    </Modal>
                                </Box>
                            </Box>
                        </Box>
                    )
                })}


            </Slider>
        </div>
    );
}

export default CenterMode