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
import { useBookParkingMutation } from '../../../Applications/reducers/parking.tsx';
import { useDispatch } from 'react-redux';
import { LoaderVisibility } from '../../../Applications/slices/loaderSlice';


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

export default function UserModal(props) {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();

    const [bookSlot, { isLoading, isError, isSuccess, ...data }] = useBookParkingMutation();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [userName, setUserName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [carNumber, setCarNumber] = useState('');


    useEffect(() => {
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
            if(data.data.success)
            {
                toast.success(data.data.message, {
                    position: 'top-center',
                    autoClose: 2000
                });
    
                const message = "Hii "+userName+", the slot number for your car "+carNumber+" is "+props.slotId;
                mobileNumber = '+91'+mobileNumber;
    
                let number = mobileNumber.replace(/[^\w\s]/gi, "").replace(/ /g, "");
    
                let url = `https://web.whatsapp.com/send?phone=${number}`;
    
                url += `&text=${encodeURI(message)}&app_absent=0`;
    
                window.open(url);
                dispatch(LoaderVisibility(false))
                
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

    const handleSubmit = () => {
        if (userName && mobileNumber && carNumber) {
            const parkingData = {
                name: userName,
                mobileNumber: mobileNumber,
                carNo: carNumber,
                isVacant: false
            }

            const apiData = {
                _id: props._id,
                basementNo: props.basementNo,
                ...parkingData,
            }

            bookSlot(apiData);

            setOpen(false);
            
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
            <Button onClick={handleOpen} color="secondary" variant="outlined" sx={{ width: "100%", textAlign: 'center' }}>Park Here</Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <Box sx={{ border: '1px solid #fff', borderRadius: '5px' }}>
                    <DialogTitle sx={{ textAlign: 'center', background: "#000", color: "#fff" }}>Park To {props.slotId}</DialogTitle>
                    <DialogContent sx={{ width: "500px", backgroundColor: '#000' }}>
                        <DialogContentText id="alert-dialog-slide-description">
                            <Box sx={{ marginTop: "40px" }}>
                                <Typography component="div" sx={{ margin: "20px auto" }}>
                                    <CssTextField
                                        type="text"
                                        label="Name"
                                        name="customerName"
                                        InputProps={{ style: { color: "#fff" } }}
                                        InputLabelProps={{ style: { color: "#fff" } }}
                                        sx={{ width: "100%", color: "#fff" }}
                                        onChange={(e) => setUserName(e.target.value)}
                                        value={userName}
                                    />
                                </Typography>
                                <Typography component="div" sx={{ margin: "20px auto" }}>
                                    <CssTextField
                                        type="number"
                                        label="Mobile Number"
                                        name="customerNumber"
                                        InputProps={{ style: { color: "#fff" } }}
                                        InputLabelProps={{ style: { color: "#fff" } }}
                                        sx={{ width: "100%", color: "#fff" }}
                                        onChange={(e) => setMobileNumber(e.target.value)}
                                        value={mobileNumber}
                                    />
                                </Typography>
                                <Typography component="div" sx={{ margin: "20px auto" }}>
                                    <CssTextField
                                        type="text"
                                        label="Car Number"
                                        name="carNumber"
                                        InputProps={{ style: { color: "#fff" } }}
                                        InputLabelProps={{ style: { color: "#fff" } }}
                                        sx={{ width: "100%", color: "#fff" }}
                                        onChange={(e) => setCarNumber(e.target.value)}
                                        value={carNumber}
                                    />
                                </Typography>
                            </Box>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions sx={{ background: '#000' }}>
                        <Box display="flex" justifyContent="end">
                            <Button color="secondary" onClick={handleClose}>Cancel</Button>
                            <Button color="secondary" onClick={handleSubmit}>Park</Button>
                        </Box>
                    </DialogActions>
                </Box>
                {/* <Box sx={style}>
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
                </Box> */}
            </Dialog>
        </>
    );
}
