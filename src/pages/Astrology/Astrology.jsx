import { ButtonHome } from 'components/ButtonHome/ButtonHome';
import { useFeatureStore } from 'components/Features/Features/store';
import { DefaultComponent } from 'components/common/default/defaultComponent';
import { TextFrontEndPage } from 'components/common/default/defaultComponent.styled';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const AstrologyPage = () => {
  const [t] = useTranslation();

  const setSelectedMenu = useFeatureStore(store => store.setSelectedMenu);
  useEffect(() => {
    setSelectedMenu(false);
  }, [setSelectedMenu]);

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

export default AstrologyPage;
