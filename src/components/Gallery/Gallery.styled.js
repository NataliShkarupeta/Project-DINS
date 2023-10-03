import styled, { css } from 'styled-components';

export const WhoAmI = styled.p`
  font-size: ${p => p.theme.fontSizes[3]}px;
`;

export const MainImageDiv = styled.div`
margin-top: -200px;
  /* margin-top: ${p => p.theme.space[-7]}px; */
`;

export const BoxForThredRow = styled.div`
  padding-left: ${p => p.theme.space[5]}px;
  display: flex;
  gap: 100px;
  align-items: center;
  /* justify-content: space-between; */
`;

export const ButtonScroll = styled.button`
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
  padding: ${p => p.theme.space[3]}px;
`;

const fontStyles = css`
  font-family: ${p => p.theme.fonts.forBlog};
  font-size: ${p => p.theme.fontSizes[11]}px;
  line-height: ${p => p.theme.lineHeights.heading};
  font-weight: ${p => p.theme.fontWeights.middleOne};
`;

export const FirstV = styled.p`
  padding-left: ${p => p.theme.space[5]}px;
  ${fontStyles}
  margin-bottom: ${p => p.theme.space[5]}px;
`;

export const AnimateBlock = styled.div`
  position: relative;
  overflow: hidden;
  /* animation-play-state: running; */

 
`;

export const SecondV = styled.p`
  position: relative;
  padding-left: ${p => p.theme.space[8]}px;
  margin-bottom: 80px;
  font-style: italic;
  ${fontStyles}
  line-height: ${p => p.theme.lineHeights.body};
  width: fit-content;
  display: flex;
  gap: 50px;
  transform: translate3d(calc(-25%), 0, 0);
  /* transform: translate(-90%); */
  
  /* animation: 5s linear infinite; */
  /* animation-play-state: paused; */
  /* animation: infinite; */
  transition-property: inherit;
  transition-duration:9s;
`;

export const ThirdV = styled.p`
  padding-left: ${p => p.theme.space[5]}px;
  ${fontStyles}
  z-index: 100;
`;

export const MainSection = styled.div`
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
`;

export const Banner = styled.div`
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
  height: 100vh;
`;
export const Presentation = styled.div`
  /* width: 100vw; */
  height: 110px;
  /* background-color:${p => p.theme.colors.modes.light.background} ; */
`;
