import styled from 'styled-components';

export const SvgEye = styled.span`
  position: absolute;
  top: 200px;
`;
export const H2 = styled.h2`
  font-size: ${p => p.theme.fontSizes[5]}px;
`;
export const WordLashMaker = styled.span`
  font-family: ${p => p.theme.fonts.monospace};
  font-size: 40px;
`;

export const Ul = styled.ul`
  list-style: inside;
  padding: ${p => p.theme.space[4]}px;
`;

export const Li = styled.li`
  font-size: ${p => p.theme.fontSizes[3]}px;
  line-height: ${p => p.theme.lineHeights.normal};
  margin-bottom: ${p => p.theme.space[3]}px;

  padding: ${p => p.theme.space[2]}px;
`;

export const Description = styled.p`
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights.body};
  line-height: ${p => p.theme.lineHeights.heading};
  font-family: ${p => p.theme.fonts.monospace};
  margin-bottom: ${p => p.theme.space[2]}px;
`;

export const WrapTitleAndEye = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const ContainerForSlider = styled.div`
  position: relative;
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
  background: linear-gradient(
    360deg,
    rgb(170, 167, 171, 1),
    rgb(201, 195, 217, 1)
  );
`;

export const Row = styled.div`
  position: relative;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
`;

export const WrapBottonTurn = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
`;

export const ButtonTurn = styled.button`
  width: 40px;
  height: 25px;
  cursor: pointer;
`;
