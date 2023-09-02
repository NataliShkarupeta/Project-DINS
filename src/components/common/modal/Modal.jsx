import { Overlay, ModalContainer, Title, Text } from './modal.styled';

export const ModalCommon = ({ text, descriptions, textButton, clickHandler }) => {
  return (
    <>
      <Overlay>
        <ModalContainer>
          <Title>{text}</Title>
          <Text>
            {descriptions}
            <input />
          </Text>
          <button onClick={clickHandler}>{textButton}</button>
        </ModalContainer>
      </Overlay>
    </>
  );
};
