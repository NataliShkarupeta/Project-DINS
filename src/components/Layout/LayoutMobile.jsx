import { Link, Outlet, useLocation } from 'react-router-dom';
import {
  Background,
  BlockUnderLine,
  Blog,
  HeaderMobile,
  LiMobile,
  MenuBody,
  MenuBtn,
  MenuL1,
  MenuL2,
  MenuL3,
  Nav,
  SubL1,
  SubL2,
  SubMenuBtn,
  UlMobile,
  WrapButton,
  WrapLogo,
  WrapMain,
  WrapMoonAndSun,
} from './Layout.styled';
import { motion } from 'framer-motion';

import img from '../../images/free-icon-space-8657325 (1).png';
import { NavigationLink } from 'pages/HomePage/HomePage.styled';
import { Button } from 'components/common/commonButton/button.styled';
import { useFeatureStore } from 'components/Features/Features/store';
import { useTranslation } from 'react-i18next';
import { BsBrightnessHigh, BsMoonFill } from 'react-icons/bs';

import { Suspense } from 'react';
import { WrapDots } from 'components/PictureInfo/PictureInfo.styled';
import { ThreeDots } from 'react-loader-spinner';
import { Footer } from 'components/Footer/Footer';


const styles = {
  padding: '3px 6px',
};
const stylesOpen = {
  opacity: 1,
  transform: ' translateX(0)',
  transition: 'all 350ms cubic-bezier(0.4, 0, 0.2, 1)',
};
const stylesClose = {
  opacity: 0,
  transform: ' translateX(-100%)',
  transition: 'all 350ms cubic-bezier(0.4, 0, 0.2, 1)',
};

export const LayoutMobile = ({ setMainThema }) => {
const selectedMenu = useFeatureStore(store => store.selectedMenu);
const setSelectedMenu = useFeatureStore(store => store.setSelectedMenu);
   
  const changeLanguage = language => {
    i18n.changeLanguage(language);
    localStorage.setItem('leng', language);
  };

  const setLeng = useFeatureStore(store => store.setLeng);
  const [, i18n] = useTranslation();
  const [t] = useTranslation();

  const location = useLocation();

  const handelTranslate = () => {
    setSelectedMenu(!selectedMenu);

  };

  return (
    <Background>
      <WrapMain>
        <MenuBody style={selectedMenu ? stylesOpen : stylesClose}>
          {/* <div>{t('mobile.layout.menu')}</div> */}
          <Nav style={selectedMenu ? stylesOpen : stylesClose}>
            <SubMenuBtn onClick={handelTranslate}>
              <SubL1></SubL1>
              <SubL2></SubL2>
            </SubMenuBtn>

            <UlMobile>
              <LiMobile>
                <NavigationLink to="/" state={{ from: location }}>
                  {t('professions.dev')}
                </NavigationLink>
              </LiMobile>
              <LiMobile>
                <NavigationLink to="/painting" state={{ from: location }}>
                  {t('professions.art')}
                </NavigationLink>
              </LiMobile>

              <LiMobile>
                <NavigationLink to="/astrology" state={{ from: location }}>
                  {t('professions.astr')}
                </NavigationLink>
              </LiMobile>
              <LiMobile>
                <NavigationLink to="/beauty" state={{ from: location }}>
                  {t('professions.lash')}
                </NavigationLink>
              </LiMobile>
              <LiMobile> </LiMobile>

              {/* <li class="link">
                <a href="#">Work</a>
                <ol>
                  <li>
                    <a href="#">web</a>
                  </li>
                  <li>
                    <a href="#">graphic </a>
                  </li>
                  <li>
                    <a href="#">apps </a>
                  </li>
                </ol>
              </li> */}
            </UlMobile>
            <NavigationLink to="/blog">
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8, y: 0 }}
              >
                <Blog>{t('blog')}</Blog>
              </motion.div>
            </NavigationLink>
          </Nav>
        </MenuBody>
        <HeaderMobile>
          <WrapLogo>
            <Link to={`/`}>
              <motion.div
                animate={{
                  scale: [1, 1.1, 1.1, 1, 1],
                  rotate: [0, 0, 10, 10, 0],
                  borderRadius: ['0%', '0%', '20%', '20%', '0%'],
                }}
                transition={{
                  duration: 2,
                  ease: 'easeInOut',
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              >
                <img src={img} alt="Logo" width="70" />
              </motion.div>
            </Link>
          </WrapLogo>
          <MenuBtn onClick={handelTranslate}>
            <MenuL1></MenuL1>
            <MenuL2></MenuL2>
            <MenuL3></MenuL3>
          </MenuBtn>
        </HeaderMobile>
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
