import { useEffect, useState } from 'react';
import { Overlay, Title, Text } from './ModalForDelete.styled';
import {
  Button,
  ModalContainer,
  WrapButtonsModal,
} from 'components/ModalForBlog/modalChangePost/Modal.styled';
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

  useEffect(() => {
    const closeEsc = e => {
     
      if (e.keyCode === 27) {
        close(false);
      }
    };
    window.addEventListener('keydown', closeEsc);
    return () => window.removeEventListener('keydown', closeEsc);
  }, [close]);

  const onClose = e => {
    if ( e.currentTarget === e.target) {
      close(false);
    }
  };

  const handelSubmit = e => {

    e.preventDefault();

    const form = document.querySelector('#formElement');
    const formData = new FormData(form);
    const secret = formData.get('text');

    if (secret.toUpperCase() === 'MOYAVERA25') {
      return setchangePost(true);
    } else {
      alert('secret key is not correct');
    }
    form.reset();
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
            <form id="formElement" onSubmit={handelSubmit}>
              <Text>{descriptions}</Text>
              <input type="password" name="text" required />
              <WrapButtonsModal>
                <Button type="submit" onClick={handelSubmit}>
                  {textButton}
                </Button>
                <Button type="button" onClick={() => close(false)}>
                  {textButton1}
                </Button>
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
