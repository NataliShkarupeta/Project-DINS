import { Layout } from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from 'pages/HomePage/HomePage';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { theme, themeSecond } from '../styles/theme';
import { useState } from 'react';
import { LearnMore } from './LearnMore/LearnMore'; 
// import { useTranslation } from 'react-i18next';

export const App = () => {
  const [mainThema, setMainThema] = useState(true);
  const[more,setMore]=useState(false)

  return (
    <>
      <ThemeProvider theme={mainThema ? theme : themeSecond}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Natali Shkarupera</title>
          <link rel="canonical" href="http://mysite.com/example" />
          <meta name="description" content="Natali Shkarupera" />
        </Helmet>
        <Routes>
          <Route path="/" element={<Layout setMainThema={setMainThema} />}>
            <Route
              index
              element={
                !more ? <HomePage setMore={setMore} /> : <LearnMore setMore ={setMore}/>
              }
            />
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
