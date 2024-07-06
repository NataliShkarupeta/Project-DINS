import { useTranslation } from 'react-i18next';
import {
  P,
  Ul,
  Span,
  WrapSen,
  WrapForMargin,
  Section,
} from './LearnMore.styled';
import { Button } from 'components/common/commonButton/button.styled';
import { useEffect, useState } from 'react';
import { TfiArrowUp } from 'react-icons/tfi';
import { useFeatureStore } from 'components/Features/Features/store';

export const LearnMore = ({ setMore }) => {
  const [t] = useTranslation();
  
  const [scroll, setScroll] = useState(0);

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
  };
  const refTop = useFeatureStore(state => state.refTop);

  return (
    <>
      {scroll > document.documentElement.clientHeight && (
        <Button
          style={topButton}
          onClick={() => refTop.current.scrollIntoView({ behavior: 'smooth' })}
        >
          <TfiArrowUp size={20} />
        </Button>
      )}
      <Button  style={styles} onClick={() => setMore(false)}>
        {t('button.back')}
      </Button>
      <Section>
        <WrapForMargin>
          <P>{t('learn_more2')}</P>
        </WrapForMargin>

        <>
          <blockquote>
            <WrapSen>{t('dalay_lama._6')}</WrapSen> -{t('dalay_lama.name')}
          </blockquote>
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
