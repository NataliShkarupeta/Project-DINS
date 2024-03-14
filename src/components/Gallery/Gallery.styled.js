import styled, { css } from 'styled-components';

export const WrapButton = styled.div`
  display: flex;
  justify-content: center;
  /* margin-bottom: ${p => p.theme.space[4]}px; */
`;

export const SectionBeforPictures = styled.section`
  margin-top: -8%;
  @media screen and (${p => p.theme.media.m}) {
    /* margin-top: -20%; */
  }
  @media screen and (${p => p.theme.media.l}) {
    /* margin-top: -25%; */
  }
  @media screen and (${p => p.theme.media.xl}) {
  }
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
  font-weight: ${p => p.theme.fontWeights.body};
  position: relative;

  @media screen and (${p => p.theme.media.m}) {
    margin-top: ${p => p.theme.space[4]}px;
  }
  @media screen and (${p => p.theme.media.l}) {
    margin-top: ${p => p.theme.space[5]}px;
  }
  @media screen and (${p => p.theme.media.xl}) {
    margin-top:50px;
  }
`;

export const BgFirst = styled.div`
  width: 100%;
  color: ${p => p.theme.colors.therd};
  background-color: rgba(255, 255, 255, 0.8);
`;

export const BgSecond = styled.div``;
export const BgThirt = styled.div`
  width: 100%;
  color: ${p => p.theme.colors.therd};
  background-color: rgba(255, 255, 255, 0.8);
`;

export const BgFourth = styled.div``;
export const P = styled.p`
  text-align: center;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (${p => p.theme.media.s}) {
    width: 90vw;
  }
  @media screen and (${p => p.theme.media.m}) {
    font-size: ${p => p.theme.fontSizes[2]}px;
    width: 90vw;
  }
  @media screen and (${p => p.theme.media.l}) {
    width: 80vw;
  }
  @media screen and (${p => p.theme.media.xl}) {
    font-size: ${p => p.theme.fontSizes[3]}px;
    width: 900px;
  }
`;

export const AboutArt = styled.p`
  text-align: center;
  font-family: ${p => p.theme.fonts.forName};

  font-weight: ${p => p.theme.fontWeights.body};
  font-style: italic;

  color: #fff4e4cc;
  @media screen and (${p => p.theme.media.m}) {
    padding: ${p => p.theme.space[2]}px;
    font-size: ${p => p.theme.fontSizes[2]}px;
    margin-bottom: ${p => p.theme.space[4]}px;
    line-height: ${p => p.theme.lineHeights.heading};
    position: absolute;
    top: 185vh;
  }
  @media screen and (${p => p.theme.media.l}) {
    padding: ${p => p.theme.space[2]}px;
    font-size: 17px;
    top: 215vh;
  }
  @media screen and (${p => p.theme.media.xl}) {
    position: static;
    padding: ${p => p.theme.space[4]}px;
    font-size: ${p => p.theme.fontSizes[3]}px;
  }
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
  @media screen and (${p => p.theme.media.m}) {
    height: 650px;
  }
  @media screen and (${p => p.theme.media.l}) {
    height: 750px;
  }
`;

export const NameBlock = styled.div`

  display: flex;
  gap: 10px;

  @media screen and (${p => p.theme.media.s}) {
    padding-top: ${p => p.theme.space[3]}px;
    height: 50vh;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (${p => p.theme.media.m}) {
    padding-top: ${p => p.theme.space[3]}px;

    flex-direction: column;
    align-items: center;
  }
  @media screen and (${p => p.theme.media.l}) {
    padding-top: ${p => p.theme.space[3]}px;

    flex-direction: row;
    align-items: baseline;
    justify-content: center;
  }
`;

export const Banner = styled.div`
  position: relative;
  display: flex;
  /* gap: 10px; */
  /* align-items: baseline;
  justify-content: center; */
  flex-direction: column;
  @media screen and (${p => p.theme.media.s}) {
    padding-top: ${p => p.theme.space[3]}px;
    height: 50vh;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (${p => p.theme.media.m}) {
    padding-top: ${p => p.theme.space[6]}px;
    height: 80vh;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (${p => p.theme.media.l}) {
    padding-top: ${p => p.theme.space[7]}px;
    height: 100vh;
  }
`;

export const ButtonScroll = styled.button`
  color: ${p => p.theme.colors.text};

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
    background-color: red;
    color: black;
  }
  @media screen and (${p => p.theme.media.m}) {
    position: static;
    width: 80px;
    height: 80px;
    background-color: ${p => p.theme.colors.forBSM};
    margin-bottom: 20px;
  }
  @media screen and (${p => p.theme.media.l}) {
    text-align: center;
    width: 90px;
    height: 90px;
    margin-bottom: 40px;
  }
  @media screen and (${p => p.theme.media.xl}) {
    /* position: absolute; */
    width: 110px;
    height: 110px;
    left: calc(100vw / 2 - 55px);
    bottom: 10%;
    :hover,
    :focus {
      scale: 1.1;
    }
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

  line-height: ${p => p.theme.lineHeights.heading};
  font-weight: ${p => p.theme.fontWeights.middleOne};
  @media screen and (${p => p.theme.media.s}) {
    font-size: ${p => p.theme.fontSizes[4]}px;
  }
  @media screen and (${p => p.theme.media.m}) {
    font-size: ${p => p.theme.fontSizes[5]}px;
  }
  @media screen and (${p => p.theme.media.l}) {
    font-size: 38px;
  }
  @media screen and (${p => p.theme.media.xl}) {
    font-size: ${p => p.theme.fontSizes[6]}px;
  }
`;
export const WhoAmI = styled.p`
  @media screen and (${p => p.theme.media.s}) {
    font-size: ${p => p.theme.fontSizes[2]}px;
  }
  @media screen and (${p => p.theme.media.m}) {
    font-size: ${p => p.theme.fontSizes[2]}px;
  }
  @media screen and (${p => p.theme.media.l}) {
    font-size: ${p => p.theme.fontSizes[3]}px;
  }
`;

export const FirstV = styled.p`
  ${fontStyles}
`;

export const SecondV = styled.p`
  font-size: ${p => p.theme.fontSizes[2]}px;
`;

export const ThirdV = styled.p`
  ${fontStyles}
`;

export const OilPaintingWord = styled.div`
  text-align: center;
  @media screen and (${p => p.theme.media.s}) {
    margin-bottom: 80px;
  }
`;

export const RedBallBefore = styled.div`
  position: relative;
  text-align: right;

  &:before {
    position: absolute;

    /* content: '🦄'; */
    content: '';

    background-color: red;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-color: ${p => p.theme.colors.muted};
    border-radius: ${p => p.theme.radii.round};

    @media screen and (${p => p.theme.media.s}) {
      width: 12px;
      height: 12px;
      right: -1%;
      top: 6px;
    }
    @media screen and (${p => p.theme.media.m}) {
      right: -1%;
      top: 15px;
      width: 15px;
      height: 15px;
    }
    @media screen and (${p => p.theme.media.l}) {
      left: calc(100vw - 136px);
    }
    @media screen and (${p => p.theme.media.xl}) {
      left: calc(100vw - 156px);
      top: 10px;
    }
  }
  @media screen and (${p => p.theme.media.s}) {
    margin-right: 16px;
  }
  @media screen and (${p => p.theme.media.m}) {
    margin-right: 16px;
  }
  @media screen and (${p => p.theme.media.l}) {
    margin-right: 32px;
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
