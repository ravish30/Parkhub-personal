import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import CenterMode from './CenterMode'

function Basement(props) {
  return (
    <>
      <Box>
        {/* <Typography color="primary">Basement</Typography> */}
        <Container>
          <CenterMode basementNo={props.basementNo} />
        </Container>
      </Box>
    </>
  )
}

export default Basement