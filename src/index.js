import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {store} from "./components/Redux/store"
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import {theme} from "./components/theme"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ThemeProvider>

  </Provider>
 
  </BrowserRouter>
  
);


