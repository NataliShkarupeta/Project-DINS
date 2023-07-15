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
  H3,
  WrapAboutProject,
  BoxForReport,
} from './SocialProject.styled';
import { motion } from 'framer-motion';
import { BsHeart } from 'react-icons/bs';

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
        <WrapAboutProject>
          <p> {t('socialProject_page.text2')}</p>
          <p>{t('socialProject_page.text3')}</p>
          <p>{t('socialProject_page.text4')}</p>
          <p>{t('socialProject_page.appreciation')}</p>
          <p>{t('socialProject_page.appreciationDetales')}</p>

          <Call>{t('socialProject_page.ukraineIsCool')}</Call>
          <div>
            <BsHeart size={30} fill="blue"  />
            <BsHeart fill="orange" size={30}/>
          </div>
        </WrapAboutProject>
        <div>
          <H3>{t('socialProject_page.report')}</H3>
          <BoxForReport></BoxForReport>
        </div>
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
