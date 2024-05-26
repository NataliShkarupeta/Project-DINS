import { BASIC_URL } from 'service/basicUrl';
import { MainLoaderBlock, WrapIm5 } from './Loader.styled';
import { motion } from 'framer-motion';
import { useMedia } from 'react-use';
const { useEffect } = require('react');

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

// const item = {
//   hidden: {
//     scale: 0,
//     y: 200,
//   },
//   show: {
//     opacity: 1,
//     scale: 1,
//     y: 0,
//     transition: {
//       ease: [0.6, 0.01, -0.05, 0.95],
//       duration: 1.6,
//     },
//   },
//   exit: {
//     opacity: 0,
//     y: -200,
//     transition: {
//       ease: 'easeInOut',
//       duration: 0.8,
//     },
//   },
// };

const itemMain = {
  hidden: {
    scale: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
      duration: 1.3,
    },
  },
};

export const LoaderMobile = ({ setLoading }) => {

 const isMobile= useMedia('(max-width:541px')
  useEffect(() => {
    isMobile ? window.scrollTo(0, 125) : window.scrollTo(0, 250);
  }, [isMobile]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  });

  return (
    <MainLoaderBlock>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <WrapIm5>
          <motion.div variants={itemMain}>
            <motion.img
              style={{ borderRadius: '5px' }}
              src={`${BASIC_URL}/imagesLoader/s10327.jpeg`}
              alt="phoenix"
              layoutId="main-image"
            />
          </motion.div>
        </WrapIm5>
      </motion.div>
    </MainLoaderBlock>
  );
};
