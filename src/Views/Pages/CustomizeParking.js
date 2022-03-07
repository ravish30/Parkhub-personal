import { Box, Grid, Step, StepLabel, Stepper, Typography } from '@mui/material'
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Check from '@mui/icons-material/Check';
import Stack from '@mui/material/Stack';
import Step1 from '../Components/Steps/Step1';
import Step2 from '../Components/Steps/Step2';
import Step3 from '../Components/Steps/Step3';
import Step4 from '../Components/Steps/Step4';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const steps = ['Basic Info', 'Email Verification', 'Parking Details', 'Set Password']

const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 10,
        left: 'calc(-50% + 14px)',
        right: 'calc(50% + 14px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#768BF9',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#768BF9',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        borderColor: 'rgb(255,255,255)',
        borderTopWidth: 3,
        borderRadius: 1,
    },
}));

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
        color: '#768BF9',
    }),
    '& .QontoStepIcon-completedIcon': {
        color: '#768BF9',
        zIndex: 1,
        fontSize: 18,
    },
    '& .QontoStepIcon-circle': {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
    },
}));

function QontoStepIcon(props) {
    const { active, completed, className } = props;

    return (
        <QontoStepIconRoot ownerState={{ active }} className={className}>
            {completed ? (
                <Check className="QontoStepIcon-completedIcon" />
            ) : (
                <div className="QontoStepIcon-circle" />
            )}
        </QontoStepIconRoot>
    );
}

function CustomizeParking() {
    const [activeStep, setActiveStep] = useState(0)

    const nextHandler = () => {
        setActiveStep(activeStep + 1)
    }
    return (
        <>
            <Box>
                <Grid container spacing={2}>
                    <Grid item lg={4} md={4}>
                        <Box sx={{ width: "200px", margin: "auto", marginTop: "50px" }}>
                            <Stack>
                                <Stepper activeStep={activeStep} orientation="vertical" connector={<QontoConnector />}>
                                    {steps.map((step, index) => (
                                        <Step key={step}>
                                            <StepLabel StepIconComponent={QontoStepIcon}>
                                                <Typography color="primary" variant="div">{step}</Typography>
                                            </StepLabel>
                                        </Step>
                                    ))}
                                </Stepper>
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid item lg={6} md={6}>
                        <Box sx={{ width: "500px", margin: "auto" }}>
                            <Box>
                                {activeStep === 0 && <Step1 />}
                                {activeStep === 1 && <Step2 />}
                                {activeStep === 2 && <Step3 />}
                                {activeStep === 3 && <Step4 />}
                            </Box>
                            {(activeStep !== steps.length - 1) && <Box sx={{ marginTop: "100px", fontSize: "14px", display: "flex", justifyContent: "end" }}>
                                <Box display="flex" alignItems="center" sx={{ cursor: 'pointer' }} onClick={nextHandler}>
                                    <Typography
                                        color="secondary"
                                        variant="p"
                                    >
                                        Next
                                    </Typography>
                                    <NavigateNextIcon color="secondary" />
                                </Box>
                            </Box>}
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default CustomizeParking