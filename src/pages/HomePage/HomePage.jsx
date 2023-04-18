import {
  Name,
  NameAndPhoto,
  PhotoWrap,
  Article,
  ButtonUnderArticle,
  WrapName,
  Motto,
} from './HomePage.styled';
import { useTranslation } from 'react-i18next';

export const HomePage = ({ setMore }) => {
  const [t] = useTranslation();

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

        <PhotoWrap>
          <img
            src={require('../../images/author/IMG_0043.jpg')}
            width="340"
            height="340"
            alt="Фотографія автора"
          />
        </PhotoWrap>
      </NameAndPhoto>
      <div>
        <Article>
          {' '}
          {t('aboutMe')} <br /> {t('aboutMe1')}
        </Article>
        <ButtonUnderArticle onClick={() => setMore(true)}>
          {t('button.textBut')}
        </ButtonUnderArticle>
      </div>
    </>
  );
};
