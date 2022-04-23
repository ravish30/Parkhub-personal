import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material/styles'
import AppRoute from './Views/Routes/AppRoute';
import theme from './Views/Theme/Theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <AppRoute />
      </ThemeProvider>
    </>
  );
}

export default App;
