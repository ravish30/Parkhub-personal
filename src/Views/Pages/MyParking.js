import React, { useState } from 'react'
import { Box } from '@mui/material'
import ParkingHead from '../Components/Parking/ParkingHead'

function MyParking() {
  return (
    <>
      <Box sx={{ marginTop: "40px" }}>
        <ParkingHead />
      </Box>
    </>
  )
}

export default MyParking