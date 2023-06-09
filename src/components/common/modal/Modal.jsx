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
  clickHandler1,
  textButton1,
}) => {
  return (
    <>
      <Overlay>
        <ModalContainer>
          <Title>{text}</Title>
          <form>
            <Text>{descriptions}</Text>
            <input />
          </form>

          <WrapButtonsModal>
            <Button onClick={clickHandler}>{textButton}</Button>
            <Button onClick={clickHandler1}>{textButton1}</Button>
          </WrapButtonsModal>
        </ModalContainer>
      </Overlay>
    </>
  );
};
