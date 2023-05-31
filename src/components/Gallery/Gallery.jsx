import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
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
        <NavLink to={'/painting'}>
          <p>{t('paintin_page.paintinTitle1')}</p>
        </NavLink>
      </SectionSecond>
    </WrapSections>
  );
};

export default Gallary;
