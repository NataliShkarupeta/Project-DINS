// import { ModalCommon } from 'components/common/modal/modal';
import { normalizedDate } from 'pages/Blog/normalizeDate';
import { BASIC_URL } from 'service/basicUrl';
import {
  H2,
  Img,
  Span,
  Wrap,
  WrapDescription,
  WrapDots,
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
import { ThreeDots } from 'react-loader-spinner';

export const PictureInfo = () => {
  const [picture, setPicure] = useState(null);
  const [loading, setLoading] = useState(false);
  const { paintingId } = useParams();
  const leng = useFeatureStore(state => state.leng);
  const location = useLocation();
  const [t] = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 120);
  }, []);
  useEffect(() => {
    setLoading(true);
    getPictureById(paintingId)
      .then(res => setPicure(res))
      .finally(() => setLoading(false));
  }, [paintingId]);

  if (!picture) {
    return (
      <>
        <NavLinkButton to={location.state?.from ?? '/'}>
          <CommonButton text={t('button.back')} />
        </NavLinkButton>
        {loading && (
          <WrapDots>
            <ThreeDots />
          </WrapDots>
        )}
        <DefaultComponent>
          <ThreeDots />
          <p>{t('defoultText')} </p>
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
      {loading && (
        <WrapDots>
          <ThreeDots />
        </WrapDots>
      )}
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
      <p>
        {t('gallaryPage.listPictures.inStock')}: {isit}
      </p>
      <p>
        {t('gallaryPage.pictureInfo.size')}: {size}
      </p>
      {/* <p> {t('gallaryPage.pictureInfo.info')}</p> */}
    </WrapInfoFromMe>
  );
};

const ImageBlock = ({ img, title, date }) => {
  const [t] = useTranslation();
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
      <p>
        {t('gallaryPage.pictureInfo.dateOfAdd')}: {normalizedDate(date)}
      </p>
    </WrapImageAndDateCreate>
  );
};

const DescriptionsBlock = ({ title, text, inStock, size }) => {
  return (
    <WrapDescription>
      <div style={{ height: '80%', overflow: 'hidden' }}>
        <H2>{title}</H2>
        <Span>{text}</Span>
      </div>
      <InfoBlock isit={inStock} size={size} />
    </WrapDescription>
  );
};
