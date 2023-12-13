// import { ModalCommon } from 'components/common/modal/modal';
import { normalizedDate } from 'pages/Blog/normalizeDate';
import { BASIC_URL } from 'service/basicUrl';
import {
  H2,
  Img,
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
  const {
    title1,
    descriptions,
    image,
    createdAt,
    TitleEn,
    descriptionsEn,
    inStock,
    inStockEn,
    size,
  } = picture;
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
            inStock={leng === 'ua' ? inStock : inStockEn}
            size={size}
          />
        </WrapInfo>
        <OrderBlock
          tit={leng === 'ua' ? title1 : TitleEn}
          size={size ? size : '50*70'}
          inStock={inStock}
        />
      </Wrap>
    </>
  );
};

const InfoBlock = ({ isit, size }) => {
  const [t] = useTranslation();
  return (
    <WrapInfoFromMe>
      <p>В наявності: {isit}</p>
      <p>Розмір: {size}</p>
      <p> {t('gallaryPage.pictureInfo.info')}</p>
    </WrapInfoFromMe>
  );
};

const ImageBlock = ({ img, title, date }) => {
  let imG = `${BASIC_URL}/${img}`;
  console.log(imG);
  return (
    <WrapImageAndDateCreate>
      <WrapImage
        style={{
          // position: 'relative',
          backgroundImage: `url(${imG})`,
          backgroundPosition: 'center',
          filter: 'blur(6px)',

          // width: '450px',
          // height: '600px',
        }}
      ></WrapImage>
      <Img src={imG} alt={title} />
      <p>Дата додавання зображення {normalizedDate(date)}</p>
    </WrapImageAndDateCreate>
  );
};

const DescriptionsBlock = ({ title, text, inStock, size }) => {
  return (
    <WrapDescription>
      <H2>{title}</H2>
      <Span>{text}</Span>
      <InfoBlock isit={inStock} size={size} />
    </WrapDescription>
  );
};
