import { normalizedDate } from 'pages/Blog/normalizeDate';
import { S3_URL } from 'service/basicUrl';
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
  WrapTitleAndText,
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
import { RxCheck, RxCross2, RxPencil1, RxTrash } from 'react-icons/rx';
import { ModalChangePicture } from '../ModalForPicture/ModalForPicture';
import { BlockButton, WrapForTooltip } from 'pages/Blog/Blog.styled';
import { Tooltip } from 'react-tooltip';
import { ModalForDeletePicture } from '../ModalForPicture/ModalForDeletePicture';
import { useMedia } from 'react-use';

export const PictureInfo = () => {
  const [picture, setPicure] = useState(null);
  const [loading, setLoading] = useState(false);
  const leng = useFeatureStore(state => state.leng);
  const setRefKey = useFeatureStore(state => state.setRefKey);
  const [t] = useTranslation();
  const location = useLocation();
  const { paintingId } = useParams();
  const filter = location.state?.filter || 'Всі';
  const placeFilter = location.state?.placeFilter || null;

  useEffect(() => {
    setLoading(true);
    getPictureById(paintingId)
      .then(res => setPicure(res))
      .finally(() => setLoading(false));
  }, [paintingId]);

  useEffect(() => {
    picture && window.scrollTo(0, 120);
  }, [picture]);

  useEffect(() => {
    setRefKey(paintingId);
  }, [paintingId, setRefKey]);

  if (!picture) {
    return (
      <>
        {/* <NavLinkButton to={'/list_pictures'}>  було до правок
          <CommonButton text={t('button.back')} />
        </NavLinkButton> */}
        <NavLinkButton
          to={location.state?.from ?? '/list_pictures'}
          state={{
            filter,
            placeFilter,
            refKey: paintingId,
          }}
        >
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
            picture={picture}
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
    </WrapInfoFromMe>
  );
};

const ImageBlock = ({ img, title, date }) => {
  const [t] = useTranslation();
  let imG = `${S3_URL}/${img}`;

  const showPhoto = ({ target }) => {
    if (!document.fullscreenElement) {
      target.requestFullscreen().catch(error => console.log(error));
    } else {
      document.exitFullscreen();
    }
  };
  return (
    <WrapImageAndDateCreate>
      <WrapImage
        style={{
          backgroundImage: `url(${imG})`,
          backgroundPosition: 'center',
          filter: 'blur(6px)',
        }}
      ></WrapImage>
      <Img onClick={showPhoto} src={imG} alt={title} />
      <p>
        {t('gallaryPage.pictureInfo.dateOfAdd')}: {normalizedDate(date)}
      </p>
    </WrapImageAndDateCreate>
  );
};

const DescriptionsBlock = ({ title, text, inStock, size, picture }) => {
  const [showModal, setShowModal] = useState(false);
  const [canDelet, setCanDelete] = useState(false);
  const [t] = useTranslation();

  const isTabletM = useMedia('(max-width: 720px)');

  useEffect(() => {
    if (canDelet || showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [canDelet, showModal]);
  const styles = {
    backgroundColor: 'transparent',
    padding: '4px 4px',
    border: 'none',
    display: 'flex',
    jastifyContext: 'center',
  };

  return (
    <>
      {showModal && (
        <ModalChangePicture
          text={t('pageBlog.modal.attention')}
          descriptions={t('pageBlog.modal.key')}
          textButton={<RxCheck size={'20px'} color="grey" />}
          textButton1={<RxCross2 size={'20px'} color="grey" />}
          close={setShowModal}
          pictureForChange={picture}
        />
      )}
      {canDelet && (
        <ModalForDeletePicture
          text={t('pageBlog.modal.attentionDelete')}
          textButton={<RxCheck size={'20px'} color="grey" />}
          descriptions={t('pageBlog.modal.key')}
          textButton1={<RxCross2 size={'20px'} color="grey" />}
          close={setCanDelete}
          pictureForDelete={picture}
          closeAskModal={setCanDelete}
        />
      )}
      <WrapDescription>
        <WrapTitleAndText>
          <H2>{title}</H2>
          <Span>{text}</Span>
        </WrapTitleAndText>
        <InfoBlock isit={inStock} size={size} />
        {!isTabletM && (
          <BlockButton style={{ marginRight: '0%' }}>
            <WrapForTooltip>
              <p
                data-tooltip-id="my-tooltip"
                data-tooltip-content={t('button.commonButton.edit')}
              >
                <CommonButton
                  styled={styles}
                  text={
                    // isMobile ? (
                    // <RxPencil1 size={'16px'} color="white" />
                    // ) : (
                    <RxPencil1 size={'16px'} color="black" />
                    // )
                  }
                  clickHandler={() => {
                    setShowModal(true);
                  }}
                ></CommonButton>
              </p>
              <Tooltip id="my-tooltip" />
            </WrapForTooltip>

            <WrapForTooltip>
              <p
                data-tooltip-id="my-tooltip"
                data-tooltip-content={t('button.commonButton.delete')}
              >
                <CommonButton
                  styled={styles}
                  text={
                    // isMobile ? (
                    // <RxTrash size={'16px'} color="white" />
                    // ) : (
                    <RxTrash size={'16px'} color="black" />
                    // )
                  }
                  clickHandler={() => {
                    setCanDelete(true);
                  }}
                ></CommonButton>
              </p>
              <Tooltip id="my-tooltip" />
            </WrapForTooltip>
          </BlockButton>
        )}
      </WrapDescription>
    </>
  );
};
