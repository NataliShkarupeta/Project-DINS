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
  // SvgEye,
  // SvgEye2,
  // SvgEye3,
  // SvgEye4,
  Li,
  WordLashMaker,
  WrapTitleAndEye,
} from './Beauty.styled';
import { motion } from 'framer-motion';
import l3 from '../../images/beauty/lash3 (1).jpg';
import l4 from '../../images/beauty/lash4 (1).jpg';
import l6 from '../../images/beauty/lash6 (1).jpg';
import l8 from '../../images/beauty/lash8 (1).jpg';
import l9 from '../../images/beauty/lash9 (1).jpg';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { SiApachecassandra } from 'react-icons/si';
import { GiDeadHead, GiGems, GiTwoShadows, GiBullseye } from 'react-icons/gi';
import { useTranslation } from 'react-i18next';
import { useFeatureStore } from 'components/Features/Features/store';
import { useEffectOnce, useMedia } from 'react-use';

const styles = {
  position: 'absolute',
  width: '50vw',
  height: '75vh',
  overflow: 'hidden',
  borderRadius: '30px',
  top: '-37.5vh',
};

const styleMobile = {

  // position: 'absolute',
  // width: '80%',
  // // height: '75vh',
  // overflow: 'hidden',
  // borderRadius: '30px',
  // top: '-12vh',
};

const BeautyPage = () => {
  const [position, positionSet] = useState(0);
  const [t] = useTranslation();

  const photoArr = [l4, l3, l6, l8, l9];
  const isMobile= useMedia('(max-width:541px)')

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

  return (
    <>
      {!isMobile && (
        <Link to={'/'}>
          <ButtonHome />
        </Link>
      )}

      <WrapTitleAndEye>
        <H2>
          <WordLashMaker>{t('lashMakerPage.title')}</WordLashMaker>
          {t('lashMakerPage.titleCompl')}
        </H2>
        <SiApachecassandra size={60} color="purple" />
      </WrapTitleAndEye>

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
            <BsChevronLeft />
          </ButtonTurn>
          <ButtonTurn onClick={onLeft}>
            <BsChevronRight />
          </ButtonTurn>
        </WrapBottonTurn>
        <Row>
          {photoArr.map((photo, index) => (
            <motion.div
              style={isMobile ? styleMobile : styles}
              key={index}
              initial={{ scale: 0, rotation: -180 }}
              animate={{
                rotate: 0,
                left: `${(index - position) * 60 - 26}vw`,
                scale: index === position ? 1 : 0.8,
              }}
              transition={{
                duration: 1,
                type: 'tween',
              }}
            >
              <Img src={photo} alt="" />
            </motion.div>
          ))}
        </Row>
      </ContainerForSlider>
      <div>
        <H3>{t('lashMakerPage.needKnow.text')}</H3>
        <WrapAdvice>
          {/* <SvgEye>
            <SiSvg size={60} color="pink" />
          </SvgEye>
          <SvgEye2>
            <SiSvg size={60} color="pink" />
          </SvgEye2>
          <SvgEye3>
            <SiSvg size={60} color="pink" />
          </SvgEye3>
          <SvgEye4>
            <SiSvg size={60} color="pink" />
          </SvgEye4> */}

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
