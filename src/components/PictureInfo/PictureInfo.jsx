// import { ModalCommon } from 'components/common/modal/modal';
import { normalizedDate } from 'pages/Blog/normalizeDate';
import { BASIC_URL } from 'service/basicUrl';
import {
  H2,
  Span,
  Wrap,
  WrapDescription,
  WrapImage,
  WrapImageAndDateCreate,
  WrapInfo,
  WrapInfoFromMe,
} from './PictureInfo.styled';
import { useTranslation } from 'react-i18next';
import { useLocation, useParams } from 'react-router-dom';
import { CommonButton } from 'components/common/commonButton/button';
import { useEffect, useState } from 'react';
import { getPictureById } from 'service/gallertService';
import { useFeatureStore } from 'components/Features/Features/store';
import { NavLinkButton } from 'pages/ListPictures/ListPictures.styled';
import { OrderBlock } from './Order';
import { DefaultComponent } from 'components/common/default/defaultComponent';

export const PictureInfo = () => {
  const [picture, setPicure] = useState(null);
  const { paintingId } = useParams();
  const leng = useFeatureStore(state => state.leng);
  const location = useLocation();
  const [t] = useTranslation();

  useEffect(() => {
    getPictureById(paintingId).then(res => setPicure(res));
  }, [paintingId]);

  if (!picture) {
      return (
        <>
          <NavLinkButton to={location.state?.from ?? '/'}>
            <CommonButton text={t('button.back')} />
          </NavLinkButton>
          <DefaultComponent>
            <p> От халепа, щось пішло не так!</p>
          </DefaultComponent>
        </>
      );
  }
  const { title1, descriptions, image, createdAt, TitleEn, descriptionsEn } =
    picture;
  return (
    <>
      <NavLinkButton to={location.state?.from ?? '/'}>
        <CommonButton text={t('button.back')} />
      </NavLinkButton>
      <Wrap>
        <WrapInfo>
          <ImageBlock
            img={image}
            title={leng === 'ua' ? title1 : TitleEn}
            date={createdAt}
          />
          <DescriptionsBlock
            title={leng === 'ua' ? title1 : TitleEn}
            text={leng === 'ua' ? descriptions : descriptionsEn}
          />
        </WrapInfo>

        <OrderBlock tit={leng === 'ua' ? title1 : TitleEn} />
      </Wrap>
    </>
  );
};

const InfoBlock = () => {
  const [t] = useTranslation();
  return (
    <WrapInfoFromMe>
      <p>В наявності: </p>
      <p>Розмір : </p>
      <p> {t('gallaryPage.pictureInfo.info')}</p>
    </WrapInfoFromMe>
  );
};



const ImageBlock = ({ img, title, date }) => {
  return (
    <WrapImageAndDateCreate>
      <WrapImage>
        <img src={`${BASIC_URL}/${img}`} alt={title} />
      </WrapImage>
      <p>Дата додавання зображення {normalizedDate(date)}</p>
    </WrapImageAndDateCreate>
  );
};

const DescriptionsBlock = ({ title, text }) => {
  return (
    <WrapDescription>
      <H2>{title}</H2>
      <Span>{text}</Span>
      <InfoBlock />
    </WrapDescription>
  );
};
