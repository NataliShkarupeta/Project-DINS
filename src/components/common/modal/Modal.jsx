import {
  Overlay,
  ModalContainer,
  Title,
  Text,
  Button,
  WrapButtonsModal,
} from './Modal.styled';

export const Modal = ({
  text,
  descriptions,
  textButton,
  clickHandler,
  // clickHandler1,
  close,
  textButton1,
}) => {


  const onClose = evt => {
    if (evt.code === 'Escape' || evt.currentTarget === evt.target) {
    close(false)
    }
  };

  return (
    <>
      <Overlay onClick={onClose}>
        <ModalContainer>
          <Title>{text}</Title>
          <form>
            <Text>{descriptions}</Text>
            <input />
            <WrapButtonsModal>
              <Button onClick={(e)=>{e.preventDefault()}}>{textButton}</Button>
              <Button onClick={onClose}>{textButton1}</Button>
            </WrapButtonsModal>
          </form>
        </ModalContainer>
      </Overlay>
    </>
  );
};
