import { Box, Typography } from '@mui/material'
import React from 'react'

const About = () => {
    return (
        <Box>
            <Box sx={{ width: "85%", margin: 'auto' }}>
                <Typography color="primary" variant="h4" sx={{ marginTop: '50px', textAlign: 'center' }}>ABOUT PROJECT</Typography>
                {/* <Typography sx={{ background: '#768BF9', width: '250px', height: '5px', marginTop: '10px' }}></Typography> */}

                <Box sx={{ marginTop: '40px' }}>
                    <Typography color="primary" sx={{ lineHeight: '2.5rem' }}>From last few years, with the increasing population and urbanization in cities, there is rapid increase of the vehicles in the cities like Chandigarh, Delhi etc. In earlier times we were having enough space for parking our vehicles but now with the increase of cars, motorbikes, we are not having enough spacious parking. Therefore, everyone even the big companies and markets are facing the issues of management of parking.
                        For managing the parking, the companies hire some trusted persons but for that they need to charge them and it takes their a good amount of hard work to manage the cars in the parking as it is very large and it takes a lot of time. It also leads to regularly honking of cars and therefore leads to noise. There is no efficient management of parking and creates a lot of chaos which leads to unnecessary jams in parkings and its frustrating for the people and the companies also.<br /><br />
                        This project aims to provide a solution for exactly that problem, to resolve the proper management of parking in big cities and to decrease burden from the people that the companies hire to manage the parking. They can sit at the entering and leaving location of cars and can manage the whole parking by sitting there. Whole parking can be managed by just sitting at one end and just entering the details of the car owner and he ‘ll get that message via whatsapp or sms about his slot number and the car can be parked in a right place.
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default About