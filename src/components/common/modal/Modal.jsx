import { useState } from 'react';
import {
  Overlay,
  ModalContainer,
  Title,
  Text,
  Button,
  WrapButtonsModal,
  ContainerPost,
  Input,
} from './Modal.styled';
import { changePost } from 'service/blogService';

export const Modal = ({
  text,
  descriptions,
  textButton,
  close,
  textButton1,
  postForChange,
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
  
  const submitChange = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const descriptions = formData.get('descriptions');
    changePost(postForChange, descriptions);
    close(false);
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
          <ContainerPost>
            <h2>{postForChange.title}</h2>
            <form onSubmit={submitChange}>
              <Input
                defaultValue={postForChange.descriptions}
                type="text"
                name="descriptions"
              />
              <WrapButtonsModal>
                <Button type="submit">Змінити</Button>
                <Button onClick={onClose}>{textButton1}</Button>
              </WrapButtonsModal>
            </form>
          </ContainerPost>
        </Overlay>
      )}
    </>
  );
};
