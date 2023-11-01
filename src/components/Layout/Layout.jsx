import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import {
  WrapMain,
  WrapButton,
  ButtonTranslate,
  WrapMoonAndSun,
  BlockUnderLine,
  Background,
  Blog,
} from './Layout.styled';
import { useTranslation } from 'react-i18next';
import { BsMoonFill, BsBrightnessHigh } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { NavigationLink } from 'pages/HomePage/HomePage.styled';
import { useFeatureStore } from 'components/Features/Features/store';

export const Layout = ({ setMainThema }) => {
  const setLeng = useFeatureStore(store=>store.setLeng)
  const [t, i18n] = useTranslation();

  const changeLanguage = language => {
    i18n.changeLanguage(language);
  };
  return (
    <Background>
      <WrapMain>
        <Header />
        <BlockUnderLine>
          <WrapButton>
            <ButtonTranslate onClick={() => {
              changeLanguage('en')
              setLeng("en")
              }}>
              En
            </ButtonTranslate>
            <ButtonTranslate onClick={() => {
              changeLanguage('ua')
              setLeng("ua")
              }}>
              Ua
            </ButtonTranslate>
          </WrapButton>
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
        <NavigationLink to='/blog'>
          <motion.div
            whileHover={{ scale: 1.2, color: 'purple' }}
            whileTap={{ scale: 0.8, y: 0 }}
          >
            <Blog>{t('blog')}</Blog>
          </motion.div>
        </NavigationLink>

        <Outlet />
      </WrapMain>

      <Footer />
    </Background>
  );
};
