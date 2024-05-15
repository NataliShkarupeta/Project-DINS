import { useTranslation } from 'react-i18next';
import {
  Banner,
  BorderTop,
  ButtonScroll,
  FirstV,
  LinkBlock,
  MiddleLine,
  NameBlock,
  OilPaintingWord,
  RedBallBefore,
  SecondV,
  ThirdV,
  WhoAmI,
} from './Gallery.styled';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { CommonButton } from 'components/common/commonButton/button';
import { Link, useLocation } from 'react-router-dom';
import { useMedia } from 'react-use';


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

const BannerComp = ({ refToPict }) => {
  const [t] = useTranslation();
  const isMobile = useMedia('(max-width:541px');
  const isTabletM = useMedia('(max-width: 720px)');
  const isTabletXL = useMedia('(max-width: 961px)');
  const location = useLocation();
  useEffect(() => {
    isMobile
      ? window.scrollTo(0, 120)
      : isTabletM
      ? window.scrollTo(0, 225)
      : window.scrollTo(0, 250);
  }, [isMobile, isTabletM]);


  const styles = {
    width: '120px',
    padding: '2px 15px',
    marginTop: '15px',
    fontSize: '18px',
  };

  const stylesMobile = {
    width: '60px',
    fontSize: '14px',
    lineHeight: '0.9',
    marginTop: '10px',
  };
  const stylesTablet = {
    width: '75px',
    fontSize: '14px',
    lineHeight: '0.9',
    marginTop: '20px',
  };
  const stylesTabletXL = {
    width: '100px',
    padding: '5px 10px',
    fontSize: '16px',
    lineHeight: '0.9',
    marginTop: '20px',
  };

  return (
    <motion.div variants={banner} >
      <BorderTop>
        <div></div>
        <MiddleLine></MiddleLine>
        <div></div>
      </BorderTop>
      <div>
        <Link to={'/painting/list_pictures'} state={{ from: location }}>
          <RedBallBefore>
            <CommonButton
              styled={
                isMobile
                  ? stylesMobile
                  : isTabletM
                  ? stylesTablet
                  : isTabletXL
                  ? stylesTabletXL
                  : styles
              }
              text={t('gallaryPage.buttonListPicture')}
            />
          </RedBallBefore>
        </Link>
      </div>
      <Banner>
        <NameBlock>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ease: 'easeInOut',
              duration: 1,
              dalay: 0.4,
            }}
          >
            <WhoAmI> {t('gallaryPage.banner.WhoAmI')} </WhoAmI>
          </motion.div>

          <RowTop title={t('gallaryPage.banner.name')} />
          <RowBottom title={t('gallaryPage.banner.lastName')} />
        </NameBlock>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: 'easeInOut',
            duration: 1,
            delay: 1.5,
          }}
        >
          <ButtonScroll
            onClick={() =>
              refToPict.current.scrollIntoView({ behavior: 'smooth' })
            }
          >
            {t('gallaryPage.banner.scroll')}
          </ButtonScroll>
        </motion.div>
        <OilPaintingWord>
          <RowCenter title={t('gallaryPage.oilPanting')} />
        </OilPaintingWord>
      </Banner>
    </motion.div>
  );
};

const AnimatedLetters = ({ title, disabled }) => (
  <motion.span variants={banner} initial="hidden" animate="show">
    {[...title].map((letter, index) => (
      <motion.span key={index} variants={letterAnimation}>
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

const RowTop = ({ title }) => {
  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, dalay: 1 }}
      >
        <FirstV>
          <AnimatedLetters title={title} />
        </FirstV>

        <LinkBlock>
        </LinkBlock>
      </motion.div>
    </>
  );
};

const RowCenter = ({ title }) => {
  return (
    <SecondV>
      <AnimatedLetters title={title} />
    </SecondV>
  );
};

const RowBottom = ({ title }) => {
  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, dalay: 1 }}
        
      >
        <ThirdV>
          <AnimatedLetters title={title} />
        </ThirdV>
      </motion.div>
    </>
  );
};

export default BannerComp;
