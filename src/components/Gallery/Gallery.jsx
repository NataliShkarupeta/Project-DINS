
import { useEffect, useRef, useState } from 'react';
import { getAllPictures } from 'service/gallertService';
import {
  AboutArt,
  AboutOrder,
  Li,
  MainImageDiv,
  MainSection,
  SectionBeforPictures,
  Ul,
  WrapPicture,
} from './Gallery.styled';
import { motion } from 'framer-motion';
import BannerComp from './Banner';
import Loader from './Loader';
import { BASIC_URL } from 'service/basicUrl';
import { useTranslation } from 'react-i18next';
import { FaStarOfLife } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { useFeatureStore } from 'components/Features/Features/store';

const Gallary = () => {
  const [pictures, setPicures] = useState({});
  const [loader, setLoading] = useState(true);
  const [t] = useTranslation();

  useEffect(() => {
    getAllPictures().then(res => setPicures(res));
  }, []);

   const setPict = useFeatureStore(store => store.setPict);

  const rref = useRef();
    const location = useLocation();

  const savePictueres = _id => {
    const image = Object.values(pictures).find(image => image._id === _id);
    setPict(image);
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
            <AboutOrder ref={rref}>
              <FaStarOfLife size={'10px'} /> <br />
              {t('gallaryPage.aboutOrder')}
            </AboutOrder>
          </SectionBeforPictures>
          <section>
            <Ul>
              {pictures &&
                Object.values(pictures).map(
                  ({ title1, image, _id }) => (
                    <Li key={_id}>
                      <Link to={`/painting/${_id}`} state={{ from: location }}>
                        <WrapPicture onClick={() => savePictueres(_id)}>
                        <img src={`${BASIC_URL}/${image}`} alt={title1} />
                      </WrapPicture>
                      </Link>
                    </Li>
                  )
                )}
            </Ul>
          </section>
        </>
      )}
    </MainSection>
  );
};

export default Gallary;
