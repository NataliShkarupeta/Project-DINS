import { ButtonHome } from 'components/ButtonHome/ButtonHome';
import { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
} from './Blog.styled';
import { RxPencil1, RxTrash, RxShare1, RxFileText } from 'react-icons/rx';
import { Modal } from 'components/common/modal/Modal';
import { useTranslation } from 'react-i18next';
import { RxCheck, RxCross2 } from 'react-icons/rx';
import { normalizedDate } from './normalizeDate';
import { Tooltip } from 'react-tooltip';
import { ModalForDeletePost } from 'components/ModalForDelete/ModalForDelete';

const BlogPage = memo(() => {
  //  don't forgot create a button for delete && update && show one for repost post through additional the ask-password window //
  const [posts, setPosts] = useState({});
  const [canDelet,setCanDelete]=useState(false);
  const [showModal, setShowModal] = useState(false);
  const [postId, setTodoId] = useState('');
  const [t] = useTranslation();
  

  useEffect(() => {
    getAllPosts().then(res => setPosts(res));
  }, []);

  const saveIdPost = id => {
    const post = Object.values(posts).find(post => post._id === id);
    setTodoId(post);
  };

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
          // text="Ти збираєшся видалити пост, впевнена?"
          // textButton="Видалити пост"
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
      <ul>
        {posts &&
          Object.values(posts).map(
            ({ title, descriptions, _id, createdAt }) => (
              <Li key={_id}>
                <WrapTitleAndDate>
                  <Title>{title} </Title>
                  <Date>{normalizedDate(createdAt)}</Date>
                </WrapTitleAndDate>
                <Text>{descriptions}</Text>
                <BlockButton>
                  <WrapForTooltip>
                    <p
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content={t('button.commonButton.showMore')}
                    >
                      <CommonButton text={<RxFileText />}></CommonButton>
                    </p>
                    <Tooltip id="my-tooltip" />
                  </WrapForTooltip>
                  <WrapForTooltip>
                    <p
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content={t('button.commonButton.share')}
                    >
                      <CommonButton text={<RxShare1 />}></CommonButton>
                    </p>
                    <Tooltip id="my-tooltip" />
                  </WrapForTooltip>
                  <WrapForTooltip>
                    <p
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content={t('button.commonButton.edit')}
                    >
                      <CommonButton
                        text={<RxPencil1 />}
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
                        text={<RxTrash />}
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
            )
          )}
      </ul>
    </>
  );
});

export default BlogPage;
