import {
  AboutArt,
  AboutMe,
  BgFirst,
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
import { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CommonButton } from 'components/common/commonButton/button';

const Gallary = () => {
  const [loader, setLoading] = useState(true);
  const [t] = useTranslation();

  const location = useLocation();
  const rref = useRef();

  const styles = {
    padding: '2px 10px',

  };

  return (
    <MainSection>
      {/* <Loader /> */}
      {loader ? (
        <motion.div key="loader">
          <Loader setLoading={setLoading} />
        </motion.div>
      ) : (
        <>
          <BannerComp refToPict={rref} />
          {!loader && (
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
          )}
          <SectionBeforPictures>
            <AboutArt>{t('gallaryPage.art')}</AboutArt>
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
              <P>{t('gallaryPage.gallaryText.ninth')}</P>
              <P>{t('gallaryPage.gallaryText.tenth')}</P>
              <P>{t('gallaryPage.gallaryText.eleventh')}</P>
              <Link to={'/painting/list_pictures'} state={{ from: location }}>
                <WrapButton>
                  <CommonButton
                    styled={styles}
                    text={t('gallaryPage.buttonListPicture')}
                  />
                </WrapButton>
              </Link>
            </AboutMe>
          </SectionBeforPictures>
        </>
      )}
    </MainSection>
  );
};

export default Gallary;
