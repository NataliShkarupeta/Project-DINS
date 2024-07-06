import {
  TextMobile,
  WrapNameNobile,
  WrapNameText,
} from 'components/Layout/Layout.styled';
import { PhotoWrap } from './HomePage.styled';
import { useTranslation } from 'react-i18next';
import { useFeatureStore } from 'components/Features/Features/store';
import { useEffect} from 'react';

export const HomePageMobile = () => {
  const setName = useFeatureStore(store => store.setName);
  const setSelectedMenu = useFeatureStore(store => store.setSelectedMenu);


  useEffect(() => {
    setSelectedMenu(false);
  }, [setSelectedMenu]);

 

  useEffect(() => {
    setName(true);

    return () => {
      setName(null);
    };
  }, [setName]);

  const [t] = useTranslation();
  return (
    <>
      <WrapNameText >
        <WrapNameNobile>
          <p>Natali</p>
          <p>Shkarupeta</p>
        </WrapNameNobile>
        <TextMobile>{t('mobile.layout.text')}</TextMobile>
      </WrapNameText>

      <PhotoWrap></PhotoWrap>
    </>
  );
};
