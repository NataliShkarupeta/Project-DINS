import { ButtonHome } from 'components/ButtonHome/ButtonHome';
import { DefaultComponent } from 'components/common/default/defaultComponent';
import { TextFrontEndPage } from 'components/common/default/defaultComponent.styled';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';



const EducatorPage = () => {
  const [t]=useTranslation();
  return (
    <>
      <Link to={'/'}>
        <ButtonHome />
      </Link>
      <DefaultComponent>
        <TextFrontEndPage>
          {t('defaultComponent.frontEndPage')}
        </TextFrontEndPage>
      </DefaultComponent>
    </>
  );
};

export default EducatorPage;
