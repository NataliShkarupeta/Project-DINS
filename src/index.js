import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import './global.css';
import { BrowserRouter } from 'react-router-dom';
// import { ThemeProvider } from 'styled-components';
// import {theme} from './theme'
import './18n'
import { ThreeDots } from 'react-loader-spinner';



ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  // {/* {/* /* <ThemeProvider theme={theme}>  */}
  <BrowserRouter basename="/Project-DINS">
    <Suspense
      fallback={
        <div>
          <ThreeDots />
        </div>
      }
    >
      <App />
    </Suspense>
  </BrowserRouter>
  // {/* </ThemeProvider>  */}
  // </React.StrictMode>
);
