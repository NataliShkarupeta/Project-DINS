import { Overlay } from './modal.styled';

export const ModalCommon = ({ children }) => {
  return (
    <>
      <Overlay>{children}</Overlay>
    </>
  );
};
