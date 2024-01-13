import styled from 'styled-components';

export const WrapButtonsModal = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 1200;
`;

export const ModalContainer = styled.div`
  max-width: 320px;
  width: 320px;
  height: 280px;
  background-color: #ffffff;
  padding: 20px;
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 15px;
  align-items: center;
  z-index: 1;
`;

export const Input = styled.textarea`
  display: block;
  padding: 10px;
  height: 350px;
  width: 900px;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  border-top: 5px solid gray;
  border-bottom: 5px solid gray;
  font-size: ${p => p.theme.fontSizes[2]}px;
`;

export const ContainerPost = styled.div`
  max-width: 80%;
  width: 80%;
  height: 500px;
  background-color: #ffffff;
  padding: 10px;
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 15px;
  align-items: center;
  z-index: 1;
`;

export const Button = styled.button`
text-align: center;
  background-color: ${p => p.theme.colors.muted};
  padding: 5px 10px;
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.buttons.primary.bordCol};
  border-radius: ${p => p.theme.radii.normal};
  &:hover,&:focus{
      border-color: black;
      cursor: pointer;
  }
`;

export const Title = styled.h3`
  font-size: 25px;
  text-align: center;
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.middle};
`;
export const Text = styled.p`
  text-align: center;
  font-family: ${p => p.theme.fonts.forName};
  font-style: italic;
  font-size: ${p => p.theme.fontSizes[2]}px;
  font-weight: ${p => p.theme.fontWeights.body};
`;
