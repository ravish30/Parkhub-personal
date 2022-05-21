import React, { useEffect, useState } from 'react'
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { Box } from '@mui/material';
import Basement from './Basement';
import { useGetParkingByBasementNoQuery } from '../../../Applications/reducers/parking.tsx';
import { LoaderVisibility } from '../../../Applications/slices/loaderSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { SetCarArray } from '../../../Applications/slices/parkSlice';

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
  const dispatch = useDispatch();

  const [activeBasement, setActiveBasement] = useState(1);

  const totalBasements = useSelector(state => state.parking.noOfBasements)

  const { data, isLoading, isError, isSuccess } = useGetParkingByBasementNoQuery(activeBasement)

  useEffect(() => {
    // console.log(data)
    if (isLoading) {
      dispatch(LoaderVisibility(true))
    }
    else if (isError) {
      dispatch(LoaderVisibility(false))
      toast.error(data.error.error, {
        position: 'top-center',
        autoClose: 2000
      });
    }
    else if (isSuccess) {
      console.log(data);
      if (data.success) {
        dispatch(SetCarArray(data.carArray));
        dispatch(LoaderVisibility(false))
      }
      else {
        toast.warning(data.data.message, {
          position: 'top-center',
          autoClose: 2000
        });
        dispatch(LoaderVisibility(false))
      }
      dispatch(LoaderVisibility(false))
    }
  }, [data])


  const tabHandler = (i) => {
    setActiveBasement(i);
  }




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
            {new Array(parseInt(totalBasements)).fill("").map((_, i) => {
              return (
                <Tab onClick={() => tabHandler(i+1)}>Basement {i + 1}</Tab>
              )
            })}
          </TabsList>
        </Box>

        {new Array(5).fill("").map((_, i) => {
          return (
            <TabPanel value={i}>
              <Box sx={{ marginTop: "50px" }}>
                <Basement basementNo={i + 1} />
              </Box>
            </TabPanel>
          )
        })}
      </TabsUnstyled>
    </Box>
  )
}

export default ParkingHead