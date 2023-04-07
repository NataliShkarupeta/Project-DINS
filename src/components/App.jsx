import { Layout } from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from 'pages/HomePage/HomePage';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { theme, themeSecond } from '../styles/theme';
import { useState } from 'react';


export const App = () => {
const [mainThema, setMainThema]=useState(true)

  return (
    <>
      <ThemeProvider theme={ mainThema ? theme : themeSecond}>
        <div
          onClick={() => {
            setMainThema(!mainThema);
          }}
        >
          Click
        </div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Natali Shkarupera</title>
          <link rel="canonical" href="http://mysite.com/example" />
          <meta name="description" content="Natali Shkarupera" />
        </Helmet>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="developer"></Route>
            <Route path="painting"></Route>
            <Route path="astrology"></Route>
            <Route path="beauty"></Route>
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
};
