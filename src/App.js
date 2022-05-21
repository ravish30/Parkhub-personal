import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material/styles'
import AppRoute from './Views/Routes/AppRoute';
import theme from './Views/Theme/Theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './Views/Common/Loader';
import { useSelector } from 'react-redux';
import Test from './Test';


function App() {

  const isVisible = useSelector(state => state.loader.isVisible);

  return (
    <>
      <ThemeProvider theme={theme}>
        {isVisible && <Loader />}
        {/* <Test /> */}
        <ToastContainer />
        <AppRoute />
      </ThemeProvider>
    </>
  );
}

export default App;
