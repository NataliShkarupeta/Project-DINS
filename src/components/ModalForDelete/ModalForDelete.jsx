
import { Overlay, ModalContainer, Title, Text } from './ModalForDelete.styled';

export const ModalForDeletePost = ({
  text,
  descriptions,
  textButton,
  clickHandler,
  
  close,
}) => {
  const onClose = evt => {
    if (evt.code === 'Escape' || evt.currentTarget === evt.target) {
      close(false);
    }
  };

  return (
    <>
      <Overlay onClick={onClose}>
        <ModalContainer>
          <Title>{text}</Title>
          <Text>{descriptions}</Text>
          <button onClick={clickHandler}>{textButton}</button>
        </ModalContainer>
      </Overlay>
    </>
  );
};
