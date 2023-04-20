import { useTranslation } from 'react-i18next';
import {
  SectionMain,
  SectionSecond,
  H2,
  WrapSections,
} from '../SocialProject/SocialProject.styled';

const Gallary = () => {
  const [t] = useTranslation();
  return (
    <WrapSections>
      <SectionMain>
        <H2>{t('paintin_page.paintinTitle2')} </H2>
      </SectionMain>
      <SectionSecond>
        <p>{t('paintin_page.paintinTitle1')}</p>
      </SectionSecond>
    </WrapSections>
  );
};

export default Gallary;
