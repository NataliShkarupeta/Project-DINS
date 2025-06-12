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
import { useMedia } from 'react-use';

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
  const isMobile = useMedia('(max-width: 541px)');
 

  return (
    <FooterContainer>
      {!isMobile && (
        <WrapDate>
          {t('footer.date', { date: new Date(), context: getGreetingTime() })}
          {/* {t('footer.date', {
            date: DateTime.now()
              .setZone('America/New_York')
              .minus({ weeks: 1 })
              .endOf('day')
              .toISO(),
            context: getGreetingTime(),
          })} */}
        </WrapDate>
      )}
      <WrapConnect>
        <TextConnect>
          {t('footer.connect_me')}
        </TextConnect>
        <Ul>
          <motion.li>
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
          <motion.li>
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
          <motion.li>
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
