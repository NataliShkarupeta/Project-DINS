import { useFeatureStore } from 'components/Features/Features/store';
import { WrapDots } from 'components/PictureInfo/PictureInfo.styled';
import { CommonButton } from 'components/common/commonButton/button';
import { DefaultComponent } from 'components/common/default/defaultComponent';
import { NavLinkButton } from 'pages/ListPictures/ListPictures.styled';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ThreeDots } from 'react-loader-spinner';
import { useLocation, useParams } from 'react-router-dom';
import { getPostById } from 'service/blogService';
import {
  BlockButton,
  BtbackMobile,
  TextPost,
  TitlePost,
  Wrap,
  WrapForLine,
  WrapForTooltip,
} from '../Blog.styled';
import { Tooltip } from 'react-tooltip';
import { RxPencil1, RxTrash, RxShare1 } from 'react-icons/rx';
import { RxCheck, RxCross2 } from 'react-icons/rx';
import { ModalForDeletePost } from 'components/ModalForBlog/ModalForDelete/ModalForDelete';
import { Modal } from 'components/ModalForBlog/modalChangePost/Modal';
import { useMedia } from 'react-use';

export const PostInfo = () => {
  const [showModal, setShowModal] = useState(false);
  const [canDelet, setCanDelete] = useState(false);
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const { postId } = useParams();
  const [t] = useTranslation();
  const location = useLocation();
  const leng = useFeatureStore(state => state.leng);

  const isMobile = useMedia('(max-width:541px)');

 

  useEffect(() => {
    setLoading(true);
    getPostById(postId)
      .then(res => setPost(res))
      .finally(() => setLoading(false));
  }, [postId]);
  
   useEffect(() => {
     window.scrollTo(0, 120);
   }, []);

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

  if (!post) {
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
  const { title, descriptions, titleEn, descriptionsEn } = post;

  return (
    <>
      {isMobile ? (
        <NavLinkButton to={location.state?.from ?? '/'}>
          <BtbackMobile>{t('button.back')}</BtbackMobile>
        </NavLinkButton>
      ) : (
        <NavLinkButton to={location.state?.from ?? '/'}>
          <CommonButton text={t('button.back')} />
        </NavLinkButton>
      )}
      {loading && (
        <WrapDots>
          <ThreeDots />
        </WrapDots>
      )}
      {canDelet && (
        <ModalForDeletePost
          text={t('pageBlog.modal.attentionDelete')}
          textButton={<RxCheck size={'20px'} color="grey" />}
          descriptions={t('pageBlog.modal.key')}
          textButton1={<RxCross2 size={'20px'} color="grey" />}
          close={setCanDelete}
          postForDelete={post}
          closeAskModal={setCanDelete}
        />
      )}
      {showModal && (
        <Modal
          text={t('pageBlog.modal.attention')}
          descriptions={t('pageBlog.modal.key')}
          textButton={<RxCheck size={'20px'} color="grey" />}
          textButton1={<RxCross2 size={'20px'} color="grey" />}
          close={setShowModal}
          postForChange={post}
        />
      )}
      <WrapForLine>
        <Wrap>
          <TitlePost>{leng === 'ua' ? title : titleEn}</TitlePost>
          <TextPost> {leng === 'ua' ? descriptions : descriptionsEn}</TextPost>
        </Wrap>
      </WrapForLine>

      <BlockButton>
        <WrapForTooltip>
          <p
            data-tooltip-id="my-tooltip"
            data-tooltip-content={t('button.commonButton.share')}
          >
            <CommonButton
              styled={styles}
              text={
                isMobile ? (
                  <RxShare1 size={'16px'} color="white" />
                ) : (
                  <RxShare1 size={'16px'} color="black" />
                )
              }
            ></CommonButton>
          </p>
          <Tooltip id="my-tooltip" />
        </WrapForTooltip>
        <WrapForTooltip>
          <p
            data-tooltip-id="my-tooltip"
            data-tooltip-content={t('button.commonButton.edit')}
          >
            <CommonButton
              styled={styles}
              text={
                isMobile ? (
                  <RxPencil1 size={'16px'} color="white" />
                ) : (
                  <RxPencil1 size={'16px'} color="black" />
                )
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
                isMobile ? (
                  <RxTrash size={'16px'} color="white" />
                ) : (
                  <RxTrash size={'16px'} color="black" />
                )
              }
              clickHandler={() => {
                setCanDelete(true);
              }}
            ></CommonButton>
          </p>
          <Tooltip id="my-tooltip" />
        </WrapForTooltip>
      </BlockButton>
    </>
  );
};
