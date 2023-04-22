import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import {
  SectionMain,
  SectionSecond,
  WrapSections,
  H2,
  Img2,
  WrapPhoto,
  Call,
} from './SocialProject.styled';
import { motion } from 'framer-motion';

const SocialProject = () => {
  const [t] = useTranslation();

  return (
    <WrapSections>
      <SectionMain>
        <H2>{t('paintin_page.paintinTitle1')} </H2>
        <WrapPhoto>
          {/* <img
              src={require('../../images/bgSocialProject/bg1 (1).jpg')}
              alt=""
               width="240"
            /> */}
          {/* <Img2
            src={require('../../images/bgSocialProject/bg2 (1).jpg')}
            alt=""
            width="240"
          /> */}
          {/* <img
            src={require('../../images/bgSocialProject/bg3 (1).jpg')}
            alt=""
            width="240"
          /> */}
          {/* <img
            src={require('../../images/bgSocialProject/bg4 (1).jpg')}
            alt=""
            width="240"
          /> */}
          <Img2
            src={require('../../images/bgSocialProject/bg5 (1).jpg')}
            alt=""
            width="240"
          />
          <div>{t('socialProject_page.text1')}</div>
          {/* <div>{t('socialProject_page.text2')}</div> */}
          <img
            src={require('../../images/bgSocialProject/bg6 (1).jpg')}
            alt=""
            width="240"
          />

          {/* <img
            src={require('../../images/bgSocialProject/bg8 (1).jpg')}
            alt=""
            width="240"
          /> */}
        </WrapPhoto>
        <motion.div
          animate={{
            scale: [1, 1.1, 1.1, 1, 1],
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          <Call>{t('socialProject_page.call')}</Call>
        </motion.div>
      </SectionMain>
      <SectionSecond>
        <NavLink to={'/painting/my-gallary'}>
          <p>{t('paintin_page.paintinTitle2')}</p>
        </NavLink>
      </SectionSecond>
    </WrapSections>
  );
};

export default SocialProject;
