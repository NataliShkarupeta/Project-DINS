import { ButtonHome } from 'components/ButtonHome/ButtonHome';
import { DefaultComponent } from 'components/common/default/defaultComponent';
import { TextFrontEndPage } from 'components/common/default/defaultComponent.styled';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
// import { TfiWrite } from 'react-icons/tfi';



const EducatorPage = () => {
  const [t]=useTranslation();
  return (
    <>
      <Link to={'/'}>
        <ButtonHome />
      </Link>
      <DefaultComponent>
        {/* <WrapIcon>
          <TfiWrite size={'100px'} color="purple" transform="rotate(-10)" />
        </WrapIcon> */}
        <TextFrontEndPage>
          {t('defaultComponent.frontEndPage')}
        </TextFrontEndPage>
      </DefaultComponent>
    </>
  );
};

export default EducatorPage;
