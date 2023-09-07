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

        <PhotoWrap></PhotoWrap>
      </NameAndPhoto>
      <div>
        <Article>
          {t('aboutMe')} <br /> {t('aboutMe1')}
        </Article>
        <ButtonUnderArticle onClick={() => setMore(true)}>
          {t('button.textBut')}
        </ButtonUnderArticle>
      </div>
    </>
  );
};
