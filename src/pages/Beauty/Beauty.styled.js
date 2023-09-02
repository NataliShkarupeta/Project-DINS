import styled from 'styled-components';

export const H3 = styled.h3`
  margin-top: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.heading};
  font-family: ${p => p.theme.fonts.monospace};
   /* border-bottom: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.primary};  */
`;

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights.body};
  line-height: ${p => p.theme.lineHeights.heading};
  font-family: ${p => p.theme.fonts.monospace};
  text-align: center;

  border-top: ${p => p.theme.borders.normal};
  padding-top: ${p => p.theme.space[3]}px;
  border-color: ${p => p.theme.colors.fourth};
`;

export const WrapAdvice = styled.div`
position: relative;
  display: flex;
  flex-wrap: wrap;
  font-size: ${p => p.theme.fontSizes[3]}px;
  padding: ${p => p.theme.space[4]}px;
  
`;
export const Advice = styled.p`
  border-left: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.primary};
  padding-left:10px;
  width: 800px;

  &:nth-child(even) {
    margin-left: 50%;
    margin-top: ${p => p.theme.space[3]}px;
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;

export const SvgEye = styled.div`
  position: absolute;
  top: 40%;
`;
export const SvgEye2 = styled.div`
  position: absolute;
  left: 65%;
`;

export const SvgEye3 = styled.div`
  position: absolute;
  top: 75%;
  left: 80%;
`;
export const SvgEye4 = styled.div`
  position: absolute;
  top: 100%;
  left: 60%;
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

  background-size: 3.2em 100%;
  background: linear-gradient(
      270deg,
      ${p => p.theme.colors.accent},
    rgb(125 5 209 / 7%) 50%
    )
    0% 0% / 3.2em 100% rgb(34 34 34 / 0%);
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
  margin-bottom: ${p => p.theme.space[3]}px;
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
  background:
   /* linear-gradient(
    360deg,
    rgb(170, 167, 171, 1),
    rgb(201, 195, 217, 1)
  ); */ linear-gradient(
    to bottom right,
    #5d52f6 0%,
    #e32190 100%
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
