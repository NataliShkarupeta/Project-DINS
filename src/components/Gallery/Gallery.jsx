import { normalizedDate } from 'pages/Blog/normalizeDate';
import { useEffect, useState } from 'react';
import { getAllPictures } from 'service/gallertService';
import { AboutArt, MainImageDiv, MainSection } from './Gallery.styled';
// import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import BannerComp from './Banner';
import Loader from './Loader';
import { BASIC_URL } from 'service/basicUrl';
import { useTranslation } from 'react-i18next';

const Gallary = () => {
  const [pictures, setPicures] = useState({});
  const [loader, setLoading] = useState(true);
  const [t] = useTranslation();

  useEffect(() => {
    getAllPictures().then(res => setPicures(res));
  }, []);

  return (
    <MainSection>
      {/* <Loader /> */}
      {loader ? (
        <motion.div key="loader">
          <Loader setLoading={setLoading} />
        </motion.div>
      ) : (
        <>
          <BannerComp />
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
          <section>
            <AboutArt>{t('gallaryPage.art')}</AboutArt>
          </section>
          <section>
            <ul style={{ display: 'flex', gap: '30px' }}>
              {pictures &&
                Object.values(pictures).map(
                  ({ title1, descriptions, image, createdAt, _id }) => (
                    <li key={_id}>
                      <h3>{title1}</h3>
                      <p>{normalizedDate(createdAt)}</p>
                      <p>{descriptions}</p>
                      <img
                        src={`${BASIC_URL}/${image}`}
                        alt={title1}
                        width={'300px'}
                      />
                    </li>
                  )
                )}
            </ul>
          </section>
        </>
      )}
    </MainSection>
  );
};

export default Gallary;
