import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { makeStyles, withStyles } from '@mui/styles'
import { Box, Typography, Button, Modal, TextField } from "@mui/material";
import { toast } from 'react-toastify';


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

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

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

export default function CancelModal(props) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [userName, setUserName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [carName, setCarName] = useState('');

    const slotId = "B" + props.basementNo + "S" + (props.i + 1)

    const handleSubmit = () => {
        setOpen(false);
            toast.success('Car Departed', {
                position: 'top-center',
                autoClose: 2000
            });
    }

    return (
        <>
            <Button onClick={handleOpen} color="secondary" variant="outlined" sx={{ width: "100%", textAlign: 'center' }}>Cancel Booking</Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <Box sx={{ border: '1px solid #fff', borderRadius: '5px', minHeight: "150px", background: '#000' }}>
                    <DialogTitle sx={{ textAlign: 'center', background: "#000", color: "#fff" }}>Are You Sure, You want to cancel the parking?</DialogTitle>
                    {/* <DialogContent sx={{ width: "500px", backgroundColor: '#000' }}>
                        <DialogContentText id="alert-dialog-slide-description" sx=>
                            Are You sure, You want to cancel parking?
                        </DialogContentText>
                    </DialogContent> */}
                    <DialogActions sx={{ background: '#000', marginTop: "60px" }}>
                        <Box display="flex" justifyContent="end">
                            <Button color="secondary" onClick={handleClose}>Cancel</Button>
                            <Button color="secondary" onClick={handleSubmit}>Confirm</Button>
                        </Box>
                    </DialogActions>
                </Box>
            </Dialog>
        </>
    );
}
