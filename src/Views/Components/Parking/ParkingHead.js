import React from 'react'
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { Box } from '@mui/material';
import Basement from './Basement';

const Tab = styled(TabUnstyled)`
  font-family: Montserrat;
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: light;
  background-color: transparent;
  width: 150px;
  padding: 12px 16px;
  margin: 6px 6px;
  border: none;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  margin: 0;

  &.${tabUnstyledClasses.selected} {
    background-color: #768BF9;
    color: $fff;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  background-color: transparent;
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

function ParkingHead() {
  return (
    <Box>
      <TabsUnstyled defaultValue={0}>
        <Box
          display="flex"
          gap="20px"
          flexWrap="wrap-reverse"
          justifyContent="center"
          alignItems="center"
        >
          <TabsList>
            <Tab>Basement 1</Tab>
            <Tab>Basement 2</Tab>
            <Tab>Basement 3</Tab>
          </TabsList>
        </Box>
        <TabPanel value={0}>
          <Box sx={{ marginTop: "50px" }}>
            <Basement />
          </Box>
        </TabPanel>
        <TabPanel value={1}>
          <Box sx={{ marginTop: "50px" }}>
            <Basement />
          </Box>
        </TabPanel>
      </TabsUnstyled>
    </Box>
  )
}

export default ParkingHead