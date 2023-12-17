import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import {
  WrapMain,
  WrapButton,
  WrapMoonAndSun,
  BlockUnderLine,
  Background,
  Blog,
  WrapName,
} from './Layout.styled';
import { useTranslation } from 'react-i18next';
import { BsMoonFill, BsBrightnessHigh } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { NavigationLink } from 'pages/HomePage/HomePage.styled';
import { useFeatureStore } from 'components/Features/Features/store';
import { Button } from 'components/common/commonButton/button.styled';
import { Suspense } from 'react';
import { WrapDots } from 'components/PictureInfo/PictureInfo.styled';
import { ThreeDots } from 'react-loader-spinner';

export const Layout = ({ setMainThema }) => {
  const name = useFeatureStore(store => store.name);
  const setLeng = useFeatureStore(store => store.setLeng);
  const [t, i18n] = useTranslation();

  const changeLanguage = language => {
    i18n.changeLanguage(language);
    localStorage.setItem('leng', language);
  };
  console.log(name)
  const styles = {
    padding: '3px 6px',
  };

  return (
    <Background>
      <WrapMain>
        <Header />
        <BlockUnderLine>
          <WrapButton>
            <Button
              style={styles}
              onClick={() => {
                changeLanguage('en');
                setLeng('en');
              }}
            >
              En
            </Button>
            <Button
              style={styles}
              onClick={() => {
                changeLanguage('ua');
                setLeng('ua');
              }}
            >
              Ua
            </Button>
          </WrapButton>
          {!name && (
            <WrapName>
              <p>Natali</p>
              <p>Shkarupeta</p>
            </WrapName>
          )}
          <WrapMoonAndSun>
            <BsBrightnessHigh
              onClick={() => {
                setMainThema(true);
              }}
              cursor="pointer"
            />
            |
            <BsMoonFill
              onClick={() => {
                setMainThema(false);
              }}
              cursor="pointer"
            />
          </WrapMoonAndSun>
        </BlockUnderLine>
        <NavigationLink to="/blog">
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8, y: 0 }}
          >
            <Blog>{t('blog')}</Blog>
          </motion.div>
        </NavigationLink>
        <Suspense
          fallback={
            <WrapDots>
              <ThreeDots />
            </WrapDots>
          }
        >
          <Outlet />
        </Suspense>
      </WrapMain>

      <Footer />
    </Background>
  );
};
