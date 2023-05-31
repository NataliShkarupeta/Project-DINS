import { Layout } from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from 'pages/HomePage/HomePage';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { theme, themeSecond } from '../styles/theme';
import { lazy, useState } from 'react';
import { LearnMore } from './LearnMore/LearnMore';
import { motion, AnimatePresence } from 'framer-motion';

const FrontEndPage = lazy(() => import('pages/FrontEndPage/FrontEndPage'));
const PaintingPage = lazy(() => import('pages/Painting/Painting'));
const AstrologyPage = lazy(() => import('pages/Astrology/Astrology'));
const BeautyPage = lazy(() => import('pages/Beauty/Beauty'));
const EducatorPage = lazy(() => import('pages/Educator/Educator'));
const HealthPage = lazy(() => import('pages/Health/Health'));
const SocialProject = lazy(() =>
  import('components/SocialProject/SocialProject')
);
const Gallary = lazy(() => import('components/Gallery/Gallery'));
const BlogPage = lazy(() => import('pages/Blog/Blog'));

export const App = () => {
  const [mainThema, setMainThema] = useState(true);
  const [more, setMore] = useState(false);

  return (
    <>
      <ThemeProvider theme={mainThema ? theme : themeSecond}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Natali Shkarupera</title>
          {/* <link rel="canonical" href="http://mysite.com/example" /> */}
          <meta name="description" content="Natali Shkarupera" />
        </Helmet>
        <Routes>
          <Route path="/" element={<Layout setMainThema={setMainThema} />}>
            <Route
              index
              element={
                <AnimatePresence>
                  {!more ? (
                    <HomePage setMore={setMore} />
                  ) : (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      style={{ overflow: 'hidden' }}
                      transition={{ duration: 2 }}
                      
                    >
                      <LearnMore setMore={setMore} />
                    </motion.div>
                  )}
                </AnimatePresence>
              }
            />
            <Route path="developer" element={<FrontEndPage />}></Route>
            <Route path="painting" element={<PaintingPage />}>
              <Route index element={<SocialProject />} />
              <Route path="my-gallary" element={<Gallary />} />
            </Route>
            <Route path="blog" element={<BlogPage />}></Route>
            <Route path="astrology" element={<AstrologyPage />}></Route>
            <Route path="beauty" element={<BeautyPage />}></Route>
            <Route path="educator" element={<EducatorPage />}></Route>
            <Route path="health" element={<HealthPage />}></Route>
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
};
