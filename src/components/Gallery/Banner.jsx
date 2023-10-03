import { useTranslation } from 'react-i18next';
import {
  AnimateBlock,
  Banner,
  BoxForThredRow,
  ButtonScroll,
  FirstV,
  LinkBlock,
  SecondV,
  ThirdV,
  WhoAmI,
} from './Gallery.styled';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { NavigationLink } from 'pages/Painting/Painting.styled';

const banner = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAnimation = {
  hidden: { opacity: 0, y: 400 },
  show: {
    opacity: 1,
    duration: 1,
    y: 0,
  },
};

const BannerComp = () => {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 250);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setPlay(true);
    }, 2000);
  }, []);

  return (
    <motion.div variants={banner}>
      <Banner>
        <div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ease: 'easeInOut',
              duration: 1,
              dalay: 0.4,
            }}
          >
            <WhoAmI> {'Українська художниця'} </WhoAmI>
          </motion.div>

          <RowTop title={'НАТАЛІ'} />
        </div>
        {/* <RowTop title={'НАТАЛІ'} /> */}
        <RowCenter title={'gallery'} play={play} />
        <RowBottom title={'ШКАРУПЕТА'} />
      </Banner>
    </motion.div>
  );
};
const AnimatedLetters = ({ title, disabled }) => (
  <motion.span
    variants={
      //   disabled ? null :
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
    <div style={{ display: 'flex', gap: '250px' }}>
      <FirstV>
        <AnimatedLetters title={title} />
      </FirstV>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: 'easeInOut',
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

// const animate = {};

const RowCenter = ({ title }) => {
  return (
    <AnimateBlock>
      <SecondV>
        <AnimatedLetters title={title} disabled /> <br />
        <AnimatedLetters title={title} />
        <br />
        <AnimatedLetters title={title} disabled />
        <br />
        <AnimatedLetters title={title} disabled />
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
        style={{ zIndex: 100 }}
      >
        <ButtonScroll>Скрол до картин </ButtonScroll>
      </motion.div>

      <ThirdV>
        <AnimatedLetters title={title} />
      </ThirdV>
    </BoxForThredRow>
  );
};

export default BannerComp;
