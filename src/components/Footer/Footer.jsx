import {
  FooterContainer,
  Ul,
  WrapConnect,
  WrapDate,
  TextConnect,
  ButtonInst,
  ButtonTel,
  ButtonLin,
} from './Footer.styled';
import { useTranslation } from 'react-i18next';
import { DateTime } from 'luxon';
import { ImLinkedin2, ImTelegram, ImInstagram } from 'react-icons/im';
import { motion } from 'framer-motion';

const getGreetingTime = (d = DateTime.now()) => {
  const split_afternoon = 12; // 24hr time to split the afternoon
  const split_evening = 17; // 24hr time to split the evening
  const currentHour = parseFloat(d.toFormat('H'));

  if (currentHour >= split_afternoon && currentHour <= split_evening) {
    return 'afternoon';
  } else if (currentHour >= split_evening) {
    return 'evening';
  }
  return 'morning';
};

export const Footer = () => {
  const [t] = useTranslation();



  return (
    <FooterContainer>
      <WrapDate>
        {t('footer.date', { date: new Date(), context: getGreetingTime() })}
      </WrapDate>
      <WrapConnect>
        <TextConnect>{t('footer.connect_me')}</TextConnect>
        <Ul>
          <motion.li
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
          >
            <ButtonLin>
              <a
                href="https://www.linkedin.com/in/natalia-shkarupeta-b1696023a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImLinkedin2 size="2rem" color="white" />
              </a>
            </ButtonLin>
          </motion.li>
          <motion.li
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
          >
            <ButtonInst>
              <a
                href="https://www.instagram.com/natali_nardi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImInstagram size="2rem" color="white" />
              </a>
            </ButtonInst>
          </motion.li>
          <motion.li
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
          >
            <ButtonTel initial={{}}>
              <a
                href="https://t.me/NataliShkarupeta"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImTelegram size="50" color="#53b1e2" />
              </a>
            </ButtonTel>
          </motion.li>
        </Ul>
      </WrapConnect>
    </FooterContainer>
  );
};
