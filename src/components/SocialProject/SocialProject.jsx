import { useTranslation } from "react-i18next";
import {
  SectionMain,
  SectionSecond,
  WrapSections,
  H2,
} from './SocialProject.styled';

const SocialProject =()=>{
    const [t]=useTranslation();
    return (
      <WrapSections>
        <SectionMain>
          <H2>{t('paintin_page.paintinTitle1')} </H2>
        </SectionMain>
        <SectionSecond>
          <p>{t('paintin_page.paintinTitle2')}</p>
        </SectionSecond>
      </WrapSections>
    );
}

export default SocialProject;