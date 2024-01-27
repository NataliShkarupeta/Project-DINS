import styled, { css } from 'styled-components';

export const WrapButton = styled.div`
  display: flex;
  justify-content: center;
  /* margin-bottom: ${p => p.theme.space[4]}px; */
`;

export const SectionBeforPictures = styled.section`
  margin-top: -10%;
`;
export const AboutOrder = styled.div`
  color: ${p => p.theme.colors.text};
  font-family: ${p => p.theme.fonts.forName};
  font-style: italic;
  font-weight: ${p => p.theme.fontWeights.body};
  font-size: ${p => p.theme.fontSizes[3]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  margin-top: ${p => p.theme.space[4]}px;
  width: 700px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  @media screen and (${p => p.theme.media.s}) {
    font-size: ${p => p.theme.fontSizes[1]}px;
    width: 80vw;
  }
`;

export const AboutMe = styled.div`
  color: ${p => p.theme.colors.text};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.body};
  position: relative;
  @media screen and (${p => p.theme.media.s}) {
    font-size: ${p => p.theme.fontSizes[2]}px;
  }
`;

export const BgFirst = styled.div`
  width: 100%;
  color: ${p => p.theme.colors.therd};
  background-color: rgba(255, 255, 255, 0.7);
 
`;

export const BgSecond = styled.div`

`;
export const BgThirt = styled.div`
  width: 100%;
  color: ${p => p.theme.colors.therd};
  background-color: rgba(255, 255, 255, 0.7);

`;

export const BgFourth = styled.div`
 
`;
export const P = styled.p`
  text-align: center;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  margin-left: auto;
  margin-right: auto;
  width: 700px;
  @media screen and (${p => p.theme.media.s}) {
    width: 90vw;
  }
`;

export const AboutArt = styled.p`
  padding: ${p => p.theme.space[5]}px;
  text-align: center;
  font-family: ${p => p.theme.fonts.forName};
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights.body};
  font-style: italic;
  margin-bottom: ${p => p.theme.space[3]}px;
  color: #fff4e4cc;
  /* color: ${p => p.theme.colors.text};
  text-shadow: -7px 2px 8px rgba(24, 21, 21, 0.76); */
`;

export const MainImageDiv = styled.div`
  margin-top: -18%;
  width: 100%;
  height: 750px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  @media screen and (${p => p.theme.media.s}) {
    width: 100%;
    height: 550px;
  }
`;

export const Banner = styled.div`
  position: relative;
  padding-top: ${p => p.theme.space[7]}px;
  height: 100vh;
  display: flex;
  gap: 10px;
  align-items: baseline;
  justify-content: center;
  @media screen and (${p => p.theme.media.s}) {
    padding-top: ${p => p.theme.space[3]}px;
    height: 50vh;
    flex-direction: column;
    align-items: center;
  }
`;

export const ButtonScroll = styled.button`
  color: ${p => p.theme.colors.text};
  position: absolute;
  bottom: 15%;
  left: 45%;
  width: 110px;
  height: 110px;
  border-color: ${p => p.theme.colors.muted};
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => p.theme.colors.modes.light.background};
  cursor: pointer;
  :hover,
  :focus {
    scale: 1.2;
  }
  transition: ${p => p.theme.transitions};
  @media screen and (${p => p.theme.media.s}) {
    position: static;
    width: 60px;
    height: 60px;
    background-color:red;
    color: black;
  }
`;

export const LinkBlock = styled.div`
  top: 30px;
  right: 100px;
  color: #2c9241;
  font-size: ${p => p.theme.fontSizes[5]}px;
`;

export const AnimateBlock = styled.div`
  white-space: nowrap;
  position: relative;
  overflow: hidden;
`;

const fontStyles = css`
  font-family: ${p => p.theme.fonts.forBlog};
  font-size: ${p => p.theme.fontSizes[6]}px;
  line-height: ${p => p.theme.lineHeights.heading};
  font-weight: ${p => p.theme.fontWeights.middleOne};
  @media screen and (${p => p.theme.media.s}) {
    font-size: ${p => p.theme.fontSizes[4]}px;
  }
`;
export const WhoAmI = styled.p`
  /* padding-left: 2%; */
  font-size: ${p => p.theme.fontSizes[3]}px;
  @media screen and (${p => p.theme.media.s}) {
    font-size: ${p => p.theme.fontSizes[2]}px;
  }
`;

export const FirstV = styled.p`
  ${fontStyles}
`;

export const SecondV = styled.p`
  font-style: italic;
  ${fontStyles}
`;

export const ThirdV = styled.p`
  ${fontStyles}/* z-index: 100; */
  /* color: ${p => p.theme.colors.background}; */
`;

export const MainSection = styled.div`
`;

export const RedBallBefore = styled.div`
  position: relative;
  text-align: right;
  margin-right: 32px;
  &:before {
    position: absolute;
    right: 8%;
    top: -3px;
    /* content: '🦄'; */
    content: '';
    width: 15px;
    height: 15px;
    background-color: red;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-color: ${p => p.theme.colors.muted};
    border-radius: ${p => p.theme.radii.round};

    /* z-index: ; */
    @media screen and (${p => p.theme.media.s}) {
      width: 12px;
      height: 12px;
      right: -1%;
      top: 6px;
    }
  }
  @media screen and (${p => p.theme.media.s}) {
    margin-right: 16px;
  }
`;

export const BorderTop = styled.div`
  display: flex;
  justify-content: space-between;

`;

export const MiddleLine = styled.div`
  height: 2px;
  width: 65%;
  background-color: ${p => p.theme.colors.fourth};
  @media screen and (${p => p.theme.media.s}) {
    width: 85%;
  }
`;

export const Presentation = styled.div`
  height: 110px;
`;

///////////////////// slyles the painting/////////////////////////////////

export const Ul = styled.ul`
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  @media screen and (${p => p.theme.media.s}) {
   gap: 20px;
  }
`;

export const Li = styled.li`
  width: 450px;
  /* width: calc(100% / 4); */
  text-align: center;
  align-items: center;
  margin-bottom: ${p => p.theme.space[6]}px;
  scale: 1;
  cursor: pointer;
  @media screen and (${p => p.theme.media.s}) {
    width: 140px;
    margin-bottom: ${p => p.theme.space[0]}px;
  }
`;

export const WrapPicture = styled.div`
  /* box-shadow: 0 0 10px 20px #fff; */
  /* box-shadow: 0 0 83px 10px #24aafd; */
  :hover,
  :focus {
    scale: 1.1;
  }
  transition: ${p => p.theme.transitions};
`;
