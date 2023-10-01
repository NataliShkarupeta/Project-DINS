import { normalizedDate } from 'pages/Blog/normalizeDate';
import { useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next';
import { getAllPictures } from 'service/gallertService';
import {
  AnimateBlock,
  Banner,
  BoxForThredRow,
  ButtonScroll,
  FirstV,
  LinkBlock,
  MainSection,
  Presentation,
  SecondV,
  ThirdV,
} from './Gallery.styled';
import { NavigationLink } from 'pages/Painting/Painting.styled';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
// import { AnimatePresence ,AnimateSharedLayout} from 'framer-motion';

const URLPIC = 'http://localhost:3001';

const banner = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
  // animate: {
  //   transition: {
  //     delayChildren: 0.4,
  //     staggerChildren: 0.1,
  //   },
  // },
};

const letterAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    duration: 1,
    transition: {},
  },
  // initial: {
  //   y: 400,
  // },
  // animate: {
  //   y: 0,
  //   transition: {
  //     ease: [0.6, 0.01, -0.05, 0.95],
  //     duration: 1,
  //   },
  // },
};

const Gallary = () => {
  const [play, setPlay] = useState(false);
  const [pictures, setPicures] = useState({});
  // const [t] = useTranslation();

  useEffect(() => {
    getAllPictures().then(res => setPicures(res));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setPlay(true);
    }, 2000);
  }, []);

  return (
    <MainSection>
      <motion.div variants={banner}>
        <Banner>
          <RowTop title={'НАТАЛІ'} />
          <RowCenter title={'gallery'} play={play} />
          <RowBottom title={'ШКАРУПЕТА'} />
        </Banner>
      </motion.div>
      <Presentation></Presentation>
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
                    src={`${URLPIC}/${image}`}
                    alt={title1}
                    width={'300px'}
                  />
                </li>
              )
            )}
        </ul>
      </section>
    </MainSection>
    // <WrapSections>
    //   <SectionMain>
    //     <H2>{t('paintin_page.paintinTitle2')} </H2>
    //   </SectionMain>
    //   <SectionSecond>
    //     <NavLink to={'/painting/social-project'}>
    //       <p>{t('paintin_page.paintinTitle1')}</p>
    //     </NavLink>
    //   </SectionSecond>
    // </WrapSections>
  );
};

const AnimatedLetters = ({ title, disabled }) => (
  <motion.span
    variants={
      // disabled ? null :
      banner
    }
    initial="hidden"
    animate="show"
    // initial="initial"
    // animate="animate"
  >
    {[...title].map((letter, index) => (
      <motion.span key={index} variants={letterAnimation}>
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

const RowTop = ({ title }) => {
  const [t] = useTranslation();
  return (
    <div style={{ display: 'flex', gap: '150px' }}>
      <FirstV>
        <AnimatedLetters title={title} />
      </FirstV>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: 'easeIn',
          duration: 1,
          dalay: 0.4,
        }}
      >
        <LinkBlock>
          <NavigationLink to={'/painting/social-project'}>
            {/* <h3>{t('paintin_page.paintinTitle2')}</h3> */}
            <h3>{t('paintin_page.paintinTitle1')}</h3>
          </NavigationLink>
        </LinkBlock>
      </motion.div>
    </div>
  );
};

const RowCenter = ({ title, play }) => {
  return (
    <AnimateBlock>
      <SecondV>
        <AnimatedLetters title={title} disabled /> <br />
        <AnimatedLetters title={title} />
        {/* <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} disabled /> */}
      </SecondV>
    </AnimateBlock>
  );
};

const RowBottom = ({ title }) => {
  return (
    <BoxForThredRow>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, dalay: 1 }}
      >
        <ButtonScroll>Скрол до картин </ButtonScroll>
      </motion.div>
      <ThirdV>
        <AnimatedLetters title={title} />
      </ThirdV>
    </BoxForThredRow>
  );
};

export default Gallary;
