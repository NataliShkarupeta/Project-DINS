import { Link } from 'react-router-dom';
import {
  BlockUnderLine,
  HeaderMobile,
  TextMobile,
  WrapButton,
  WrapLogo,
  WrapMain,
  WrapMoonAndSun,
  WrapNameNobile,
  WrapNameText,
} from './Layout.styled';
import { motion } from 'framer-motion';

import img from '../../images/free-icon-space-8657325 (1).png';
import { PhotoWrap } from 'pages/HomePage/HomePage.styled';
import { Button } from 'components/common/commonButton/button.styled';
import { useFeatureStore } from 'components/Features/Features/store';
import { useTranslation } from 'react-i18next';
import { BsBrightnessHigh, BsMoonFill } from 'react-icons/bs';

const styles = {
  padding: '3px 6px',
};

export const LayoutMobile = ({ setMainThema }) => {
  const changeLanguage = language => {
    i18n.changeLanguage(language);
    localStorage.setItem('leng', language);
  };

  const setLeng = useFeatureStore(store => store.setLeng);
  const [, i18n] = useTranslation();

  return (
    <WrapMain>
      <HeaderMobile>
        <WrapLogo>
          <Link to={`/`}>
            <motion.div
              animate={{
                scale: [1, 1.1, 1.1, 1, 1],
                rotate: [0, 0, 10, 10, 0],
                borderRadius: ['0%', '0%', '20%', '20%', '0%'],
              }}
              transition={{
                duration: 2,
                ease: 'easeInOut',
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              <img src={img} alt="Logo" width="70" />
            </motion.div>
          </Link>
        </WrapLogo>

        <div>Menu</div>
      </HeaderMobile>
      <BlockUnderLine>
        <WrapButton>
          <Button
            style={styles}
            onClick={() => {
              changeLanguage('en');
              setLeng('en');
            }}
          >
            En
          </Button>
          <Button
            style={styles}
            onClick={() => {
              changeLanguage('ua');
              setLeng('ua');
            }}
          >
            Ua
          </Button>
        </WrapButton>

        <WrapMoonAndSun>
          <BsBrightnessHigh
            onClick={() => {
              setMainThema(true);
            }}
            cursor="pointer"
          />
          |
          <BsMoonFill
            onClick={() => {
              setMainThema(false);
            }}
            cursor="pointer"
          />
        </WrapMoonAndSun>
      </BlockUnderLine>
      <WrapNameText>
        <WrapNameNobile>
          <p>Natali</p>
          <p>Shkarupeta</p>
        </WrapNameNobile>
        <TextMobile>вітаю на своєму сайті</TextMobile>
      </WrapNameText>

      <PhotoWrap></PhotoWrap>
    </WrapMain>
  );
};
