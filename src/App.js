import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material/styles'
import AppRoute from './Views/Routes/AppRoute';
import theme from './Views/Theme/Theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppRoute />
      </ThemeProvider>
    </>
  );
}

export default App;
