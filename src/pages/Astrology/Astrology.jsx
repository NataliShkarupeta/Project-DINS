import { ButtonHome } from 'components/ButtonHome/ButtonHome';
import { useFeatureStore } from 'components/Features/Features/store';
import { H2, Text } from 'pages/Beauty/Beauty.styled';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useMedia } from 'react-use';
import { useInView } from 'react-intersection-observer';
import {
  AboutWork,
  Background,
  Content,
  DescriptionAstr,
  DescriptionBlok,
  Explanation,
  H3,
  Instruction,
  QuestionsBlock,
  RedBallBefore,
  Version,
  VersionExpl,
  When,
  WrapVersion,
  TelegramButton,
  Wrapper,
} from './Astrology.styled';
import AnimatedList from './AnimatedList';
import { Seo } from 'components/Seo/Seo';
import { FaTelegramPlane } from 'react-icons/fa';

const AstrologyPage = () => {
  const [t] = useTranslation();

  const isMobile = useMedia('(max-width:541px)');

  const setSelectedMenu = useFeatureStore(store => store.setSelectedMenu);
  useEffect(() => {
    setSelectedMenu(false);
  }, [setSelectedMenu]);

  return (
    <>
      <Seo
        title="Астролог Наталі Шкарупета"
        description="Індивідуальні гороскопи та консультації"
        url="https://shkarupeta.art/astrology"
        image="https://shkarupeta.art/meta/astrology-preview.jpg"
      />
      {!isMobile && (
        <Link to={'/'}>
          <ButtonHome />
        </Link>
      )}
      <H2 style={{ paddingLeft: '16px' }}> {t('astrologyPage.title')}</H2>
      <Content>
        <Background> </Background>
        <DescriptionBlok>
          <DescriptionAstr>{t('astrologyPage.description')}</DescriptionAstr>
          <DescriptionAstr>{t('astrologyPage.or')}</DescriptionAstr>
          <DescriptionAstr>{t('astrologyPage.description1')}</DescriptionAstr>
        </DescriptionBlok>

        {!isMobile ? (
          <Text>{t('astrologyPage.horoscope')}</Text>
        ) : (
          <Text style={{ color: 'black' }}>{t('astrologyPage.horoscope')}</Text>
        )}
      </Content>
      <QuestionsBlock>
        <When> Деякі з можливих "коли" :</When>
        <AnimatedList />
      </QuestionsBlock>
      <AboutWork>
        <div>
          <H3>{t('astrologyPage.mywork.general')}</H3>
          <Instruction>
            <li>{t('astrologyPage.mywork.first')}</li>
            <li>{t('astrologyPage.mywork.second')}</li>
            <li>{t('astrologyPage.mywork.third')}</li>
            <li>{t('astrologyPage.mywork.fourth')}</li>
          </Instruction>
          <Explanation>{t('astrologyPage.mywork.explanation')}</Explanation>
        </div>
        {!isMobile && (
          <WrapVersion>
            <RedBallBefore>
              <Version>
                <p style={{ fontWeight: '500' }}>
                  {t('astrologyPage.question')}
                </p>

                <VersionExpl>{t('astrologyPage.question0.0')}</VersionExpl>
              </Version>
            </RedBallBefore>
            <RedBallBefore>
              <Version>
                <p style={{ fontWeight: '500' }}>
                  {t('astrologyPage.question2')}
                </p>
                <VersionExpl>{t('astrologyPage.question02')}</VersionExpl>
              </Version>
            </RedBallBefore>
            <RedBallBefore>
              <Version>
                <p style={{ fontWeight: '500' }}>
                  {t('astrologyPage.question1')}
                </p>
                <VersionExpl>{t('astrologyPage.question01')}</VersionExpl>
              </Version>
            </RedBallBefore>
          </WrapVersion>
        )}
      </AboutWork>
      <TelegramLinkButton />
      <Text>{t('astrologyPage.mywork.aboutMain')}</Text>
    </>
  );
};

const TelegramLinkButton = () => {
  const [t] = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true, // тільки один раз при появі
    threshold: 0.2, // активується, коли 20% елемента видно
  });

  return (
    <Wrapper ref={ref}>
      <TelegramButton
        href="https://t.me/NataliShkarupeta"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <FaTelegramPlane size={20} />
        {t('astrologyPage.telegramButton')}
      </TelegramButton>
    </Wrapper>
  );
};

export default AstrologyPage;
