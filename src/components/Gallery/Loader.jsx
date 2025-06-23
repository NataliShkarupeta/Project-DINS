import { BASIC_URL } from 'service/basicUrl';
import {
  MainLoaderBlock,
  WrapIm1,
  WrapIm2,
  WrapIm3,
  WrapIm4,
  WrapIm5,
} from './Loader.styled';
import { motion } from 'framer-motion';
const { useEffect } = require('react');

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: {
    scale: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: 'easeInOut',
      duration: 0.8,
    },
  },
};

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
      duration: 1.6,
    },
  },
};

const Loader = ({ setLoading }) => {
  useEffect(() => {
    window.scrollTo(0, 250);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);
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
        <WrapIm2>
          <ImageBlock variants={item} id="s13075" />
        </WrapIm2>

        <WrapIm3>
          <ImageBlock variants={item} id="sIMG_6096" />
        </WrapIm3>
        <WrapIm4>
          <ImageBlock variants={item} id="14240" />
        </WrapIm4>
        <WrapIm1>
          <ImageBlock variants={item} id="sIMG_6195" />
        </WrapIm1>
        <WrapIm5>
          <motion.div variants={itemMain}>
            <motion.img
              style={{ borderRadius: '5px' }}
              src={`${BASIC_URL}/imagesLoader/S7832.jpeg`}
              alt="phoenix"
              layoutId="main-image"
            />
          </motion.div>
        </WrapIm5>
      </motion.div>
    </MainLoaderBlock>
  );
};

const ImageBlock = ({ id, variants }) => {
  return (
    <motion.div variants={variants}>
      <img
        src={`${BASIC_URL}/imagesLoader/${id}.jpeg`}
        alt={`${id}`}
        style={{ borderRadius: '5px' }}
      />
    </motion.div>
  );
};
export default Loader;
