import { ButtonHome } from 'components/ButtonHome/ButtonHome';
import { useFeatureStore } from 'components/Features/Features/store';
// import { DefaultComponent } from 'components/common/default/defaultComponent';
// import { TextFrontEndPage } from 'components/common/default/defaultComponent.styled';
import { H2, Text } from 'pages/Beauty/Beauty.styled';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useMedia } from 'react-use';
import {
  AboutWork,
  Background,
  Content,
  DescriptionAstr,
  DescriptionBlok,
  Explanation,
  H3,
  Instruction,
  RedBallBefore,
  Version,
  VersionExpl,
  WrapVersion,
} from './Astrology.styled';

const AstrologyPage = () => {
  const [t] = useTranslation();

  const isMobile = useMedia('(max-width:541px)');

  const setSelectedMenu = useFeatureStore(store => store.setSelectedMenu);
  useEffect(() => {
    setSelectedMenu(false);
  }, [setSelectedMenu]);

  return (
    <>
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
      <Text >
        {t('astrologyPage.mywork.aboutMain')}
      </Text>
    </>
  );
};

export default AstrologyPage;
