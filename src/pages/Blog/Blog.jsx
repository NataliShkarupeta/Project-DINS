import { ButtonHome } from 'components/ButtonHome/ButtonHome';
import { memo, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getAllPosts } from 'service/blogService';
import { CommonButton } from 'components/common/commonButton/button';
import {
  Li,
  Title,
  Date,
  Text,
  WrapTitleAndDate,
  BlockButton,
  WrapForTooltip,
  Section,
} from './Blog.styled';
import { RxPencil1, RxTrash, RxShare1, RxFileText } from 'react-icons/rx';
import { Modal } from 'components/ModalForBlog/modalChangePost/Modal';
import { useTranslation } from 'react-i18next';
import { RxCheck, RxCross2 } from 'react-icons/rx';
import { normalizedDate } from './normalizeDate';
import { Tooltip } from 'react-tooltip';
import { ModalForDeletePost } from 'components/ModalForBlog/ModalForDelete/ModalForDelete';
import { useFeatureStore } from 'components/Features/Features/store';
import { DefaultComponent } from 'components/common/default/defaultComponent';
import { NavLinkButton } from 'pages/ListPictures/ListPictures.styled';

const styleDefoult = {
  height: '400px',
};
const styleShowMore = {
  paddingBottom: '64px',
};

const BlogPage = memo(() => {
  //  don't forgot create a button for delete && update && show one for repost post through additional the ask-password window //
  const [posts, setPosts] = useState({});
  const [canDelet, setCanDelete] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [postId, setTodoId] = useState('');
  const [show, setShow] = useState(false);
  const [t] = useTranslation();
  const location = useLocation();
  const leng = useFeatureStore(state => state.leng);
  // console.log('lang', leng);

  useEffect(() => {
    getAllPosts().then(res => setPosts(res));
  }, []);

  const saveIdPost = id => {
    const post = Object.values(posts).find(post => post._id === id);
    setTodoId(post);
  };

  const styles = {
    backgroundColor: 'transparent',
    padding: '4px 4px',
    border: 'none',
    display: 'flex',
    jastifyContext: 'center',
  };

  if (!posts) {
    return (
      <>
        <NavLinkButton to={location.state?.from ?? '/'}>
          <CommonButton text={t('button.back')} />
        </NavLinkButton>
        <DefaultComponent></DefaultComponent>
      </>
    );
  }

  return (
    <>
      <Link to={'/'}>
        <ButtonHome />
      </Link>

      {canDelet && (
        <ModalForDeletePost
          text={t('pageBlog.modal.attention')}
          textButton={<RxCheck />}
          descriptions={t('pageBlog.modal.key')}
          textButton1={<RxCross2 />}
          close={setCanDelete}
          postForDelete={postId}
          closeAskModal={setCanDelete}
        />
      )}
      {showModal && (
        <Modal
          text={t('pageBlog.modal.attention')}
          descriptions={t('pageBlog.modal.key')}
          textButton={<RxCheck />}
          textButton1={<RxCross2 />}
          close={setShowModal}
          postForChange={postId}
        />
      )}
      <Section>
        <ul>
          {posts &&
            Object.values(posts).map(
              ({
                title,
                descriptions,
                _id,
                createdAt,
                titleEn,
                descriptionsEn,
              }) => (
                <div style={{ width: '100%' }}>
                  <Li key={_id}>
                    <WrapTitleAndDate>
                      <Title>{leng === 'ua' ? title : titleEn} </Title>
                      <Date>{normalizedDate(createdAt)}</Date>
                    </WrapTitleAndDate>
                    <Text style={show ? styleShowMore : styleDefoult}>
                      {leng === 'ua' ? descriptions : descriptionsEn}
                    </Text>
                    <BlockButton>
                      <WrapForTooltip>
                        <p
                          data-tooltip-id="my-tooltip"
                          data-tooltip-content={t(
                            'button.commonButton.showMore'
                          )}
                        >
                          <CommonButton
                            styled={styles}
                            text={<RxFileText size={'16px'} />}
                            clickHandler={() => setShow(!show)}
                          ></CommonButton>
                        </p>
                        <Tooltip id="my-tooltip" />
                      </WrapForTooltip>

                      <WrapForTooltip>
                        <p
                          data-tooltip-id="my-tooltip"
                          data-tooltip-content={t('button.commonButton.share')}
                        >
                          <CommonButton
                            styled={styles}
                            text={<RxShare1 size={'16px'} />}
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
                            text={<RxPencil1 size={'16px'} />}
                            clickHandler={() => {
                              setShowModal(true);
                              saveIdPost(_id);
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
                            text={<RxTrash size={'16px'} />}
                            clickHandler={() => {
                              setCanDelete(true);
                              saveIdPost(_id);
                            }}
                          ></CommonButton>
                        </p>
                        <Tooltip id="my-tooltip" />
                      </WrapForTooltip>
                    </BlockButton>
                  </Li>
                </div>
              )
            )}
        </ul>
      </Section>
    </>
  );
});

export default BlogPage;
