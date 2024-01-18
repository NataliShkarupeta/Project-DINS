import { Link, useLocation } from 'react-router-dom';
import {
  Background,
  BlockUnderLine,
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
  TextMobile,
  UlMobile,
  WrapButton,
  WrapLogo,
  WrapMain,
  WrapMoonAndSun,
  WrapNameNobile,
  WrapNameText,
} from './Layout.styled';
import { motion } from 'framer-motion';

import img from '../../images/free-icon-space-8657325 (1).png';
import { NavigationLink, PhotoWrap } from 'pages/HomePage/HomePage.styled';
import { Button } from 'components/common/commonButton/button.styled';
import { useFeatureStore } from 'components/Features/Features/store';
import { useTranslation } from 'react-i18next';
import { BsBrightnessHigh, BsMoonFill } from 'react-icons/bs';
// import { Suspense } from 'react';
// import { WrapDots } from 'components/PictureInfo/PictureInfo.styled';
// import { ThreeDots } from 'react-loader-spinner';
import { Footer } from 'components/Footer/Footer';

const styles = {
  padding: '3px 6px',
};

export const LayoutMobile = ({ setMainThema }) => {
  const changeLanguage = language => {
    i18n.changeLanguage(language);
    localStorage.setItem('leng', language);
  };

  const setLeng = useFeatureStore(store => store.setLeng);
  const [, i18n] = useTranslation();
  const [t] = useTranslation();

  const location = useLocation();

  return (
    <Background>
      <WrapMain>
        <MenuBody>
          {/* <div>{t('mobile.layout.menu')}</div> */}
          <Nav>
            <SubMenuBtn>
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
              <LiMobile>
                {/* <a >Email</> */}
              </LiMobile>
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
          <MenuBtn>
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
        <WrapNameText>
          <WrapNameNobile>
            <p>Natali</p>
            <p>Shkarupeta</p>
          </WrapNameNobile>
          <TextMobile>{t('mobile.layout.text')}</TextMobile>
        </WrapNameText>

        <PhotoWrap></PhotoWrap>
        {/* <Suspense
        fallback={
          <WrapDots>
            <ThreeDots />
          </WrapDots>
        }
      >
        <Outlet />
      </Suspense> */}
      </WrapMain>
      <Footer />
    </Background>
  );
};
