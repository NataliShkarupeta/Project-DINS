import { useTranslation } from 'react-i18next';
import {
  P,
  Ul,
  Span,
  WrapSen,
  WrapForMargin,
  Section,
  Blockquot,
} from './LearnMore.styled';
import { Button } from 'components/common/commonButton/button.styled';
import { useEffect, useState } from 'react';
import { TfiArrowUp } from 'react-icons/tfi';
import { useFeatureStore } from 'components/Features/Features/store';
import { useMedia } from 'react-use';

export const LearnMore = ({ setMore }) => {
  const [t] = useTranslation();

  const [scroll, setScroll] = useState(0);
  const isMobile = useMedia('(max-width: 541px)');
  const isTabletM = useMedia('(max-width: 721px)');

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const styles = {
    marginBottom: '32px',
    marginLeft: '16px',
    padding: '2px 5px',
  };
  const topButton = {
    position: 'fixed',
    bottom: '34px',
    right: '34px',
    zIndex: '5',
    backgroundColor: 'purple',
    borderColor: 'transparent',
  };
  const topButtonMob = {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    zIndex: '5',
    backgroundColor: 'purple',
    borderColor: 'transparent',
  };
  const refTop = useFeatureStore(state => state.refTop);
  const refTopMob = useFeatureStore(state => state.refTopMob);

  return (
    <>
      {scroll > document.documentElement.clientHeight &&
        (isMobile ? (
          <Button
            style={topButtonMob}
            onClick={() =>
              refTopMob.current.scrollIntoView({ behavior: 'smooth' })
            }
          >
            <TfiArrowUp size={15} color="white" />
          </Button>
        ) : (
          <Button
            style={isTabletM ? topButtonMob : topButton}
            onClick={() =>
              refTop.current.scrollIntoView({ behavior: 'smooth' })
            }
          >
            <TfiArrowUp size={isTabletM ? 15 : 20} color="white" />
          </Button>
        ))}
      <Button style={styles} onClick={() => setMore(false)}>
        {t('button.back')}
      </Button>
      <Section>
        <WrapForMargin>
          <P>{t('learn_more2')}</P>
        </WrapForMargin>

        <>
          <Blockquot>
            <WrapSen>{t('dalay_lama._6')}</WrapSen> -{t('dalay_lama.name')}
          </Blockquot>
        </>

        <P>{t('learn_more3')}</P>
        <P>{t('learn_more4')}</P>
        <P>{t('learn_more5.start')}</P>
        <P>{t('learn_more5.step1')}</P>
        <P>{t('learn_more5.step2')}</P>
        <P>{t('learn_more5.step3')}</P>
        <P>{t('learn_more5.step4')}</P>
        <P>{t('learn_more5.step5')}</P>
        <P>{t('learn_more5.step6')}</P>
        <P>{t('learn_more1')}</P>
        <P>{t('learn_more5.step7')}</P>
        <Ul>
          <li key={1}>{t('dalay_lama._1')}</li>
          <li key={2}>{t('dalay_lama._2')}</li>
          <li key={3}>{t('dalay_lama._3')}</li>
          <li key={4}>{t('dalay_lama._4')}</li>
          <li key={5}>{t('dalay_lama._5')}</li>
          <li key={6}>{t('dalay_lama._7')}</li>
        </Ul>
        <Span>{t('dalay_lama.name')}</Span>
      </Section>
    </>
  );
};
