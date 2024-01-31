import { Button } from 'components/common/commonButton/button.styled';
import {
  Name,
  NameAndPhoto,
  PhotoWrap,
  Article,
  WrapName,
  Motto,
} from './HomePage.styled';
import { useTranslation } from 'react-i18next';
import { useFeatureStore } from 'components/Features/Features/store';
import { useEffect } from 'react';
import { useMedia } from 'react-use';

export const HomePage = ({ setMore }) => {
  const [t] = useTranslation();
  const setName = useFeatureStore(store => store.setName);
 
  const isTabletM = useMedia('(max-width: 721px)');

  useEffect(() => {
    setName(true);

    return ()=>{setName(null)}
  }, [setName]);

  const styles = {
    position: 'absolute',
    right: '2.5%',
    bottom:'-20%',
   
    padding: '3px 8px',
  };

  return (
    <>
     {!isTabletM && <Motto>{t('info')}</Motto>}
      <NameAndPhoto>
        <WrapName>
          <Name>
            {t('firstName')}
            <br />
            {t('secondName')}
          </Name>
        </WrapName>

        <PhotoWrap></PhotoWrap>
      </NameAndPhoto>
      <div style={{position:'relative'}}>
        <Article>
          {t('aboutMe')} <br /> {t('aboutMe1')}
        </Article>
        <Button style={styles} onClick={() => setMore(true)}>
          {t('button.textBut')}
        </Button>
      </div>
    </>
  );
};
