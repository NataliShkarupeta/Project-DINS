import {
  AboutArt,
  AboutMe,
  BgFirst,
  BgFourth,
  BgSecond,
  BgThirt,
  MainImageDiv,
  MainSection,
  P,
  SectionBeforPictures,
  WrapButton,
} from './Gallery.styled';
import { motion } from 'framer-motion';
import BannerComp from './Banner';
import Loader from './Loader';
import { BASIC_URL } from 'service/basicUrl';
import { useTranslation } from 'react-i18next';
// import { FaStarOfLife } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CommonButton } from 'components/common/commonButton/button';
import { useFeatureStore } from 'components/Features/Features/store';
import { useMedia } from 'react-use';
import { LoaderMobile } from './LoaderMobile';

const Gallary = () => {
  const [loader, setLoading] = useState(true);
  const [t] = useTranslation();
  const setName = useFeatureStore(store => store.setName);
  const location = useLocation();
  const rref = useRef();

  const isMobile = useMedia('(max-width:541px)');

  useEffect(() => {
    setName(true);

    return () => {
      setName(null);
    };
  }, [setName]);

  const styles = {
    width: '120px',
    padding: '2px 15px',
    backgroundColor: 'grey',
    color: 'white',
    fontSize: '18px',
  };
  const stylesMobile = {
    width: '60px',
    fontSize: '14px',
    lineHeight: '0.9',
    marginTop: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };

  return (
    <MainSection>
      {loader ? (
        <motion.div key="loader">
          {!isMobile ? (
            <Loader setLoading={setLoading} />
          ) : (
            <LoaderMobile setLoading={setLoading} />
          )}
        </motion.div>
      ) : (
        <>
          <BannerComp refToPict={rref} />
          {!loader &&
            (!isMobile ? (
              <MainImageDiv>
                <motion.img
                  src={`${BASIC_URL}/imagesLoader/lions.jpg`}
                  alt={`picture 'Lions'`}
                  layoutId="main-image"
                  transition={{
                    ease: [[0.6, 0.01, -0.05, 0.9]],
                    duration: 1.6,
                  }}
                  width="100%"
                />
              </MainImageDiv>
            ) : (
              <MainImageDiv>
                <motion.img
                  src={`${BASIC_URL}/imagesLoader/hot bread.jpg`}
                  alt={`picture 'Hot bread.jpg'`}
                  layoutId="main-image"
                  transition={{
                    ease: [[0.6, 0.01, -0.05, 0.9]],
                    duration: 1.3,
                  }}
                  width="100%"
                />
              </MainImageDiv>
            ))}
          <SectionBeforPictures>
            {!isMobile && <AboutArt>{t('gallaryPage.art')}</AboutArt>}
            <AboutMe ref={rref}>
              <BgFirst>
                <P>{t('gallaryPage.gallaryText.first')}</P>
                <P>{t('gallaryPage.gallaryText.second')}</P>
                <P>{t('gallaryPage.gallaryText.third')}</P>
              </BgFirst>
              <BgSecond>
                <P>{t('gallaryPage.gallaryText.fourth')}</P>
                <P>{t('gallaryPage.gallaryText.fifth')}</P>
              </BgSecond>
              <BgThirt>
                <P>{t('gallaryPage.gallaryText.sixth')}</P>
                <P>{t('gallaryPage.gallaryText.seventh')}</P>
                <P>{t('gallaryPage.gallaryText.eighth')}</P>
              </BgThirt>
              <BgFourth>
                <P>{t('gallaryPage.gallaryText.ninth')}</P>
                <P>{t('gallaryPage.gallaryText.tenth')}</P>
                <P>{t('gallaryPage.gallaryText.eleventh')}</P>
                <Link to={'/painting/list_pictures'} state={{ from: location }}>
                  <WrapButton>
                    <CommonButton
                      styled={isMobile ? stylesMobile : styles}
                      text={t('gallaryPage.buttonListPicture')}
                    />
                  </WrapButton>
                </Link>
              </BgFourth>
            </AboutMe>
          </SectionBeforPictures>
        </>
      )}
    </MainSection>
  );
};

export default Gallary;
