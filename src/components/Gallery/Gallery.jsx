import {
  AboutArt,
  AboutOrder,
  MainImageDiv,
  MainSection,
  SectionBeforPictures,
} from './Gallery.styled';
import { motion } from 'framer-motion';
import BannerComp from './Banner';
import Loader from './Loader';
import { BASIC_URL } from 'service/basicUrl';
import { useTranslation } from 'react-i18next';
import { FaStarOfLife } from 'react-icons/fa';
import { useRef, useState } from 'react';

const Gallary = () => {
  const [loader, setLoading] = useState(true);
  const [t] = useTranslation();

  const rref = useRef();

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
            <AboutOrder ref={rref}>
              <FaStarOfLife size={'10px'} /> <br />
              
            </AboutOrder>
          </SectionBeforPictures>
        </>
      )}
    </MainSection>
  );
};

export default Gallary;
