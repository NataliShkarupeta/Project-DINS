import { useState } from 'react';
import { Overlay, ModalContainer, Title, Text } from './ModalForDelete.styled';
import { Button, WrapButtonsModal } from 'components/common/modal/Modal.styled';
import { deletePost } from 'service/blogService';

export const ModalForDeletePost = ({
  text,
  descriptions,
  textButton,
  postForDelete,
  textButton1,
  close,
  closeAskModal,
}) => {
  const [changepost, setchangePost] = useState(false);

  const onClose = evt => {
    if (evt.code === 'Escape' || evt.currentTarget === evt.target) {
      close(false);
    }
  };

  const handelSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const secret = formData.get('text');

    if (secret.toUpperCase() === 'MOYAVERA25') {
      return setchangePost(true);
    } else {
      alert('secret key is not correct');
    }
    e.target.reset();
  };

  const deletePostById = e => {
    e.preventDefault();
    deletePost(postForDelete);
    setchangePost(false);
    closeAskModal(false);
  };

  return (
    <>
      {!changepost ? (
        <Overlay onClick={onClose}>
          <ModalContainer>
            <Title>{text}</Title>
            <form onSubmit={handelSubmit}>
              <Text>{descriptions}</Text>
              <input type="password" name="text" required />
              <WrapButtonsModal>
                <Button type="submit">{textButton}</Button>
                <Button onClick={onClose}>{textButton1}</Button>
              </WrapButtonsModal>
            </form>
          </ModalContainer>
        </Overlay>
      ) : (
        <Overlay onClick={onClose}>
          <ModalContainer>
            <Title>{'Ти збираєшся видалити пост, впевнена?'}</Title>
            <button onClick={deletePostById}>{'Видалити пост'}</button>
          </ModalContainer>
        </Overlay>
      )}
    </>
  );
};
