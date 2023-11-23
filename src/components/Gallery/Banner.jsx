import { useTranslation } from 'react-i18next';
import {
  Banner,
  BorderTop,
  ButtonScroll,
  FirstV,
  LinkBlock,
  MiddleLine,
  ThirdV,
  WhoAmI,
} from './Gallery.styled';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
// import { NavigationLink } from 'pages/Painting/Painting.styled';

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
  const [t] = useTranslation();
  // const [play, setPlay] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 250);
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setPlay(true);
  //   }, 2000);
  // }, []);

  return (
    <motion.div variants={banner}>
      <BorderTop>
        <div></div>
        <MiddleLine></MiddleLine>
        <div></div>
      </BorderTop>

      <Banner>
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
        <ButtonScroll>{t('gallaryPage.banner.scroll')}</ButtonScroll>

        {/* <RowCenter title={'gallery'}  /> */}
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
  // const [t] = useTranslation();
  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, dalay: 1 }}
        style={{ zIndex: 100 }}
        // initial={{ opacity: 0, y: 80 }}
        // animate={{ opacity: 1, y: 0 }}
        // transition={{
        //   ease: 'easeInOut',
        //   duration: 1,
        //   dalay: 0.4,
        // }}
      >
        <FirstV>
          <AnimatedLetters title={title} />
        </FirstV>
        <LinkBlock>
          {/* <NavigationLink to={'/painting/social-project'}> */}
          {/* <h3>{t('paintin_page.paintinTitle2')}</h3> */}
          {/* <h3>{t('paintin_page.paintinTitle1')}</h3> */}
          {/* </NavigationLink> */}
        </LinkBlock>
      </motion.div>
    </>
  );
};

// const RowCenter = ({ title }) => {
//   return (
//     <SecondV>
//       <AnimatedLetters title={title} />
//     </SecondV>
//   );
// };

const RowBottom = ({ title }) => {
  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, dalay: 1 }}
        style={{ zIndex: 100 }}
      >
        <ThirdV>
          <AnimatedLetters title={title} />
        </ThirdV>
      </motion.div>
    </>
  );
};

export default BannerComp;
