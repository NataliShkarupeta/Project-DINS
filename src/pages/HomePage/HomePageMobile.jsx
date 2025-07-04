import {
  TextMobile,
  WrapNameNobile,
  WrapNameText,
} from 'components/Layout/Layout.styled';
import { PhotoWrap } from './HomePage.styled';
import { useTranslation } from 'react-i18next';
import { useFeatureStore } from 'components/Features/Features/store';
import { useEffect} from 'react';
import { Seo } from 'components/Seo/Seo';

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
     <Seo
            title="Наталі Шкарупета — художниця і астролог"
            description="Авторські картини, астрологічні гороскопи й творчий простір Наталі Шкарупети."
            url="https://shkarupeta.art"
          />
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
