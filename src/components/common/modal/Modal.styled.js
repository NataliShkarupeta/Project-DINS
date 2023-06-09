import styled from 'styled-components';

export const WrapButtonsModal = styled.div`
 display: flex;
 justify-content: center;
 gap: 10px;
 
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
  z-index: 20;
`;
export const Button = styled.button`
  padding: 5px;
  width: 60px;
`;

export const Title = styled.h3`
font-size: 25px;
text-align: center;
`
export const Text = styled.p`
  font-size: 20px;
 
`;
