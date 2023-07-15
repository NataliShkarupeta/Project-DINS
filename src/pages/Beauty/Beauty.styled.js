import styled from 'styled-components';


export const ContainerForSlider = styled.div`
width: 95.5vw;
height: 80vh;
  /* width:95vw;
  height: 95vh; */
  overflow: hidden;
  padding: 0;
  margin: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.theme.colors.primary};
  background: linear-gradient(360deg, rgb(170, 167, 171, 1), rgb(201, 195, 217,1));
`;

export const Row = styled.div`
  position: relative;
`;



export const Img = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
`;
