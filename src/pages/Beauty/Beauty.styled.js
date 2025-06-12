import styled from 'styled-components';
import img from '../../images/beauty/lenaLash.jpg';

export const H3 = styled.h3`
  margin-top: ${p => p.theme.space[4]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.heading};
  font-family: ${p => p.theme.fonts.monospace};
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
  @media screen and (${p => p.theme.media.s}) {
    font-size: ${p => p.theme.fontSizes[2]}px;
    color: ${p => p.theme.colors.forBut};
  }
  @media screen and (${p => p.theme.media.m}) {
    font-size: ${p => p.theme.fontSizes[3]}px;
  }
  @media screen and (${p => p.theme.media.l}) {
  }
  @media screen and (${p => p.theme.media.xl}) {
    font-size: ${p => p.theme.fontSizes[4]}px;
  }
`;

export const Text = styled.p`
  font-weight: ${p => p.theme.fontWeights.body};
  font-style: italic;
  line-height: ${p => p.theme.lineHeights.heading};
  text-align: center;
  border-top: ${p => p.theme.borders.normal};
  padding-top: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
  border-color: ${p => p.theme.colors.fourth};
  @media screen and (${p => p.theme.media.s}) {
    font-size: 18px;
    color: ${p => p.theme.colors.forBut};
  }
  @media screen and (${p => p.theme.media.m}) {
    font-size: 18px;
  }
  @media screen and (${p => p.theme.media.l}) {
    font-size: ${p => p.theme.fontSizes[3]}px;
  }
  @media screen and (${p => p.theme.media.xl}) {
    font-size: ${p => p.theme.fontSizes[4]}px;
  }
`;

export const WrapAdvice = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  font-size: ${p => p.theme.fontSizes[3]}px;
  @media screen and (${p => p.theme.media.s}) {
    padding: ${p => p.theme.space[3]}px;
  }
  @media screen and (${p => p.theme.media.m}) {
    padding: ${p => p.theme.space[3]}px;
  }
  @media screen and (${p => p.theme.media.l}) {
    padding: ${p => p.theme.space[4]}px;
  }
`;
export const Advice = styled.p`
  border-left: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.primary};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.middle};
  line-height: ${p => p.theme.lineHeights.normal};
  padding-left: 10px;
  width: 800px;

  &:nth-child(even) {
    margin-left: 50%;
    margin-top: ${p => p.theme.space[3]}px;
    margin-bottom: ${p => p.theme.space[3]}px;
  }
  @media screen and (${p => p.theme.media.s}) {
    font-size: ${p => p.theme.fontSizes[1]}px;
    &:nth-child(even) {
      margin-left: 30%;
      line-height: ${p => p.theme.lineHeights.heading};
    }
  }
  @media screen and (${p => p.theme.media.m}) {
    font-size: ${p => p.theme.fontSizes[2]}px;
  }
  @media screen and (${p => p.theme.media.l}) {
    font-size: 18px;
  }
  @media screen and (${p => p.theme.media.xl}) {
    font-size: ${p => p.theme.fontSizes[3]}px;
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
  @media screen and (${p => p.theme.media.s}) {
    margin-bottom: ${p => p.theme.space[3]}px;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: ${p => p.theme.fontSizes[2]}px;
    color: purple;
  }
  @media screen and (${p => p.theme.media.m}) {
    font-size: ${p => p.theme.fontSizes[2]}px;
  }
  @media screen and (${p => p.theme.media.l}) {
    font-size: ${p => p.theme.fontSizes[3]}px;
  }
  @media screen and (${p => p.theme.media.xl}) {
    font-size: ${p => p.theme.fontSizes[5]}px;
  }
`;
export const WordLashMaker = styled.span`
  font-family: ${p => p.theme.fonts.monospace};

  @media screen and (${p => p.theme.media.s}) {
    font-size: ${p => p.theme.fontSizes[4]}px;
    /* padding: ${p => p.theme.space[2]}px; */
  }
  @media screen and (${p => p.theme.media.m}) {
    font-size: ${p => p.theme.fontSizes[3]}px;
  }
  @media screen and (${p => p.theme.media.l}) {
    font-size: ${p => p.theme.fontSizes[4]}px;
  }
  @media screen and (${p => p.theme.media.xl}) {
    font-size: 40px;
  }
`;

export const Ul = styled.ul`
  list-style: inside;
  padding: ${p => p.theme.space[4]}px;
  @media screen and (${p => p.theme.media.s}) {
    padding: ${p => p.theme.space[3]}px;

    /* flexDirection: 'colum' */
  }
`;

export const Li = styled.li`
  margin-bottom: ${p => p.theme.space[3]}px;

  padding: ${p => p.theme.space[2]}px;

  background-size: 3.2em 100%;
  background: linear-gradient(
      270deg,
      ${p => p.theme.colors.accent},
      rgb(125 5 209 / 7%) 50%
    )
    0% 0% / 3.2em 100% rgb(34 34 34 / 0%);
  @media screen and (${p => p.theme.media.s}) {
    font-size: ${p => p.theme.fontSizes[2]}px;
    line-height: ${p => p.theme.lineHeights.heading};
    font-weight: ${p => p.theme.fontWeights.middle};
    color: ${p => p.theme.colors.forBut};
  }
  @media screen and (${p => p.theme.media.m}) {
    font-size: ${p => p.theme.fontSizes[2]}px;
  }
  @media screen and (${p => p.theme.media.l}) {
    font-size: 18px;
  }
  @media screen and (${p => p.theme.media.xl}) {
    font-size: ${p => p.theme.fontSizes[3]}px;
  }
`;

export const Description = styled.p`
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
  font-family: ${p => p.theme.fonts.body};

  font-weight: ${p => p.theme.fontWeights.middle};
  margin-bottom: ${p => p.theme.space[2]}px;
  @media screen and (${p => p.theme.media.s}) {
    font-size: ${p => p.theme.fontSizes[2]}px;
  }
  @media screen and (${p => p.theme.media.m}) {
    font-size: ${p => p.theme.fontSizes[2]}px;
    line-height: ${p => p.theme.lineHeights.heading};
  }
  @media screen and (${p => p.theme.media.l}) {
    line-height: ${p => p.theme.lineHeights.normal};
    font-size: 18px;
  }
  @media screen and (${p => p.theme.media.xl}) {
    font-size: ${p => p.theme.fontSizes[3]}px;
  }
`;

export const WrapTitleAndEye = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media screen and (${p => p.theme.media.s}) {
    justify-content: space-evenly;
    background-image: url('${img}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    /* filter: blur(2px); */
  }
  @media screen and (${p => p.theme.media.m}) {
    margin-bottom: ${p => p.theme.space[0]}px;
  }
  @media screen and (${p => p.theme.media.l}) {
  }
  @media screen and (${p => p.theme.media.xl}) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;

export const ContainerForSlider = styled.div`
  position: relative;
  height: 80vh;
  overflow: hidden;
  padding: 0;
  margin: 0;

  display: flex;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(to bottom right, #5d52f6 0%, #e32190 100%);
`;

export const Row = styled.div`
  position: relative;

  @media screen and (${p => p.theme.media.s}) {
    margin-right: 67%;
    margin-bottom: 40px;
  }
  @media screen and (${p => p.theme.media.m}) {
    margin-right: 64%;
    margin-bottom: 85px;
  }
  @media screen and (${p => p.theme.media.l}) {
    margin-right: 6%;
    /* margin-bottom: 150px; */
  }
  @media screen and (${p => p.theme.media.xl}) {
    margin-right: 0;
    margin-bottom: 0px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
`;

export const WrapBottonTurn = styled.div`
  position: absolute;
  display: flex;
  gap: 5px;

  @media screen and (${p => p.theme.media.s}) {
    transform: rotate(90deg);
    top: 40px;
    left: 80%;
    z-index: 2;
  }
  @media screen and (${p => p.theme.media.m}) {
    transform: rotate(90deg);
    top: 40px;
    left: 88%;
    z-index: 2;
  }
  @media screen and (${p => p.theme.media.l}) {
    transform: rotate(0);
    top: 15px;
    left: 15px;
  }
`;

export const ButtonTurn = styled.button`
  width: 40px;
  height: 25px;
  cursor: pointer;
  border-color: transparent;
`;
