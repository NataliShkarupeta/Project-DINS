import React, { useState } from 'react';
import { ButtonHome } from 'components/ButtonHome/ButtonHome';
import { Link } from 'react-router-dom';
import {
  ContainerForSlider,
  Row,
  Img,
  WrapAdvice,
  WrapBottonTurn,
  ButtonTurn,
  Advice,
  Description,
  H2,
  Ul,
  H3,
  Text,
  Li,
  WordLashMaker,
  WrapTitleAndEye,
} from './Beauty.styled';
import { motion } from 'framer-motion';
// import l3 from '../../images/beauty/lash3 (1).jpg';
// import l4 from '../../images/beauty/lash4 (1).jpg';
// import l6 from '../../images/beauty/lash6 (1).jpg';
// import l8 from '../../images/beauty/lash8 (1).jpg';
// import l9 from '../../images/beauty/lash9 (1).jpg';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { SiApachecassandra } from 'react-icons/si';
import { GiDeadHead, GiGems, GiTwoShadows, GiBullseye } from 'react-icons/gi';
import { useTranslation } from 'react-i18next';
import { useFeatureStore } from 'components/Features/Features/store';
import { useEffectOnce, useMedia } from 'react-use';
import { BASIC_URL } from 'service/basicUrl';

const styles = {
  position: 'absolute',
  width: '50vw',
  height: '75vh',
  overflow: 'hidden',
  borderRadius: '30px',
  top: '-37.5vh',
};
const styleXL = {
  position: 'absolute',
  width: '55vw',
  overflow: 'hidden',
  borderRadius: '30px',
  top: '-35.5vh',
};
const styleL = {
  position: 'absolute',
  width: '60vw',
  overflow: 'hidden',
  borderRadius: '30px',
  top: '-26.5vh',
};

const styleMobile = {
  position: 'absolute',
  width: '65vw',
  overflow: 'hidden',
  borderRadius: '30px',
};
const styleTablet = {
  position: 'absolute',
  width: '65vw',
  overflow: 'hidden',
  borderRadius: '30px',
};

const URLPHOTO = `${BASIC_URL}/imagesLash`;

const BeautyPage = () => {
  const [position, positionSet] = useState(2);
  const [t] = useTranslation();
  // const photoArr = [l4, l3, l6, l8, l9];

  const isMobile = useMedia('(max-width:541px)');
  const isTabletM = useMedia('(max-width: 721px)');
  const isTabletXL = useMedia('(max-width: 961px)');
  const isComp = useMedia('(max-width: 1141px)');

  const onRight = () => {
    if (position < photoArr.length - 1) {
      positionSet(position + 1);
    }
  };

  const onLeft = () => {
    if (position > 0) {
      positionSet(position - 1);
    }
  };

  const setSelectedMenu = useFeatureStore(store => store.setSelectedMenu);
  useEffectOnce(() => {
    setSelectedMenu(false);
  }, [setSelectedMenu]);

  const photoArr = [
    `${URLPHOTO}/4A5ECBA5-6CB3-4D77-94B7-487CD5332A67_1_201_a.jpeg`,
    `${URLPHOTO}/39F68309-2CDC-4CF6-BC91-0F9D485B75D8_1_201_a.jpeg`,
    `${URLPHOTO}/687CCF9A-3140-4044-B256-3742B8EB638C_1_201_a.jpeg`,
    `${URLPHOTO}/831D949E-C450-4090-AFF7-FE9E930B2922_1_201_a.jpeg`,
    `${URLPHOTO}/3572EF5D-AA11-419E-9C27-EC1E2FFBDBC2_1_201_a.jpeg`,
    `${URLPHOTO}/6324E2E5-020C-4694-A25C-0DCDAA6B6CE4_1_201_a.jpeg`,
    `${URLPHOTO}/88318323-1389-4D24-882E-D627AA1C3273_1_201_a.jpeg`,
    `${URLPHOTO}/D8D2D165-3934-44A4-9178-E6B355920325_1_201_a.jpeg`,
    `${URLPHOTO}/FFB3C878-5C2F-4B58-B47E-7869832352B4_1_201_a.jpeg`,
  ];

  return (
    <>
      {!isMobile && (
        <Link to={'/'}>
          <ButtonHome />
        </Link>
      )}
      {isMobile ? (
        <>
          <WrapTitleAndEye>
            <div style={{ width: '100%', height: '85px' }}></div>
          </WrapTitleAndEye>
          <H2>
            <WordLashMaker>{t('lashMakerPage.title')}</WordLashMaker>
            {t('lashMakerPage.titleCompl')}
          </H2>
        </>
      ) : (
        <WrapTitleAndEye>
          <H2>
            <WordLashMaker>{t('lashMakerPage.title')}</WordLashMaker>
            {t('lashMakerPage.titleCompl')}
          </H2>
          <SiApachecassandra size={60} color="purple" />
        </WrapTitleAndEye>
      )}

      <Description> {t('lashMakerPage.description')}</Description>
      <Description>{t('lashMakerPage.go')}</Description>

      <Ul>
        <Li key={1}>
          <p>{t('lashMakerPage.generalInformation.first')}</p>
        </Li>
        <Li key={2}>
          <p>{t('lashMakerPage.generalInformation.second')}</p>
        </Li>
      </Ul>

      <ContainerForSlider>
        <WrapBottonTurn>
          <ButtonTurn onClick={onRight}>
            <BsChevronLeft color="purple" />
          </ButtonTurn>
          <ButtonTurn onClick={onLeft}>
            <BsChevronRight color="purple" />
          </ButtonTurn>
        </WrapBottonTurn>
        <Row>
          {photoArr.map((photo, index) => (
            <motion.div
              style={
                isMobile
                  ? styleMobile
                  : isTabletM
                  ? styleTablet
                  : isTabletXL
                  ? styleL
                  : isComp
                  ? styleXL
                  : styles
              }
              key={index}
              initial={{ scale: 0, rotation: -180 }}
              animate={
                !isMobile && !isTabletM
                  ? {
                      rotate: 0,
                      left: `${(index - position) * 60 - 26}vw`,
                      scale: index === position ? 1 : 0.8,
                    }
                  : {
                      rotate: 0,
                      top: `${(index - position) * 60 - 26}vw`,
                      scale: index === position ? 1 : 0.8,
                    }
              }
              transition={{
                duration: 1,
                type: 'tween',
              }}
            >
              {/* <div></div> */}
              <Img src={photo} alt="/" />
            </motion.div>
          ))}
        </Row>
      </ContainerForSlider>
      <div>
        <H3>{t('lashMakerPage.needKnow.text')}</H3>
        <WrapAdvice>
          <Advice>
            {t('lashMakerPage.needKnow.first')} <GiTwoShadows size={30} />
          </Advice>
          <Advice>
            {t('lashMakerPage.needKnow.fourth')}
            <GiBullseye size={30} />
          </Advice>
          <Advice>
            {t('lashMakerPage.needKnow.second')} <GiDeadHead size={30} />
          </Advice>
          <Advice>
            {t('lashMakerPage.needKnow.third')}
            <GiGems size={30} />
          </Advice>
        </WrapAdvice>
      </div>
      <Text>{t('lashMakerPage.text')}</Text>
    </>
  );
};

export default BeautyPage;
