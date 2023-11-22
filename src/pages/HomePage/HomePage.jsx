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

export const HomePage = ({ setMore }) => {
  const [t] = useTranslation();

  const styles = {
    position: 'absolute',
    right: '3.1%',
    padding:'3px 8px'
  };

  return (
    <>
      <Motto>{t('info')}</Motto>
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
      <div>
        <Article>
          {t('aboutMe')} <br /> {t('aboutMe1')}
        </Article>
        <Button style={styles} onClick={() => setMore(true)}>{t('button.textBut')}</Button>
      </div>
    </>
  );
};
