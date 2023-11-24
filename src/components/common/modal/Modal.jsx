
import { Overlay} from './modal.styled';

export const ModalCommon = ({
  children,
  childrentext,
  descriptions,
  textButton,
  clickHandler,
}) => {
  return (
    <>
      <Overlay>
        {children}
        {/* <ModalContainer> */}
        {/* <Title>{text}</Title> */}
        {/* <Text> */}
        {/* {descriptions} */}
        {/* <input /> */}
        {/* </Text> */}
        {/* <button onClick={clickHandler}>{textButton}</button> */}
        {/* </ModalContainer> */}
      </Overlay>
    </>
  );
};
