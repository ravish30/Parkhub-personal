import { Box, Typography } from '@mui/material'
import React from 'react'

function NotFound() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" sx={{ height: "50vh" }}>
      <Typography color="primary" variant="h2">404 Not Found</Typography>
    </Box>
  )
}

export default NotFound