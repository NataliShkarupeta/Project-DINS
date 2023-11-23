import styled, { css } from 'styled-components';

export const AboutArt = styled.p`
  padding: ${p => p.theme.space[5]}px;
  margin-top: -10%;
  text-align: center;
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights.middleOne};
  font-style: italic;
  color: ${p => p.theme.colors.background};
`;

export const MainImageDiv = styled.div`
  margin-top: -200px;
  width: 100%;
  height: 750px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

export const Banner = styled.div`
  /* background-color: white; */

  position: relative;
  padding-top: ${p => p.theme.space[7]}px;
  height: 100vh;
  display: flex;
  gap: 10px;
  align-items: baseline;
  justify-content: center;
`;

export const ButtonScroll = styled.button`
  position: absolute;
  bottom: 50px;
  left: 45%;
  width: 110px;
  height: 110px;
  border-color: ${p => p.theme.colors.muted};
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => p.theme.colors.modes.light.background};
  cursor: pointer;
`;

export const LinkBlock = styled.div`
  top: 30px;
  right: 100px;
  color: #2c9241;
  font-size: ${p => p.theme.fontSizes[5]}px;
  /* padding: ${p => p.theme.space[3]}px; */
`;

export const AnimateBlock = styled.div`
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  /* animation-play-state: running; */
`;

const fontStyles = css`
  font-family: ${p => p.theme.fonts.forBlog};
  font-size: ${p => p.theme.fontSizes[6]}px;
  /* font-size: ${p => p.theme.fontSizes[11]}px; */
  line-height: ${p => p.theme.lineHeights.heading};
  font-weight: ${p => p.theme.fontWeights.middleOne};
`;
export const WhoAmI = styled.p`
  /* padding-left: 2%; */
  font-size: ${p => p.theme.fontSizes[3]}px;
`;

export const FirstV = styled.p`
  ${fontStyles}
`;

export const SecondV = styled.p`
  /* position: relative; */
  /* padding-left: 35%; */
  /* width: fit-content; */
  /* display: flex; */
  /* gap: 200px; */
  /* margin-bottom: 65px; */
  font-style: italic;
  ${fontStyles}/* line-height: ${p => p.theme.lineHeights.body}; */
`;

export const ThirdV = styled.p`
  /* padding-left: ${p => p.theme.space[5]}px; */
  ${fontStyles}/* z-index: 100; */
  /* color: ${p => p.theme.colors.background}; */
`;

export const MainSection = styled.div`
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
`;

export const RedBallBefore = styled.div`
  &:before {
    position: absolute;
    right: 6%;
    /* content: '🦄'; */
    content: '';
    width: 15px;
    height: 15px;
    background-color: red;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-color: ${p => p.theme.colors.muted};
    border-radius: ${p => p.theme.radii.round};

    z-index: 2;
   
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
`;

export const Presentation = styled.div`
  /* width: 100vw; */
  height: 110px;
  /* background-color:${p => p.theme.colors.modes.light.background} ; */
`;
