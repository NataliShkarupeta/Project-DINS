import { useTranslation } from 'react-i18next';
import {
  P,
  Ul,
  Span,
  WrapSen,
  WrapForMargin,
  Section,
} from './LearnMore.styled';
import { Button } from 'components/ButtonHome/ButtonHome.styled';

export const LearnMore = ({ setMore }) => {
  const [t] = useTranslation();

  return (
    <>
      <Button onClick={() => setMore(false)}>{t('button.back')}</Button>
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
          <li>{t('dalay_lama._1')}</li>
          <li>{t('dalay_lama._2')}</li>
          <li>{t('dalay_lama._3')}</li>
          <li>{t('dalay_lama._4')}</li>
          <li>{t('dalay_lama._5')}</li>
          <li>{t('dalay_lama._7')}</li>
        </Ul>
        <Span>{t('dalay_lama.name')}</Span>
      </Section>
    </>
  );
};
