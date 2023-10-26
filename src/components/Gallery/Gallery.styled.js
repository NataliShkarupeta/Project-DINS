import styled, { css, keyframes } from 'styled-components';

export const AboutArt = styled.p`
  padding: ${p => p.theme.space[4]}px;
  margin-top: -100px;
  text-align: center;
  font-family: ${p => p.theme.fonts.forBlog};
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights.middleOne};
  font-style: italic;
  color: ${p => p.theme.colors.background};
`;

export const WhoAmI = styled.p`
padding-left: 2%;
  font-size: ${p => p.theme.fontSizes[3]}px;
`;

export const MainImageDiv = styled.div`
  margin-top: -200px;
  width: 100%;
  height: 750px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoxForThredRow = styled.div`
  padding-left: 15%;
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
  padding-left: 7%;
  ${fontStyles}
  margin-bottom: ${p => p.theme.space[5]}px;
`;

export const AnimateBlock = styled.div`
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  /* animation-play-state: running; */
`;

const moveLeftToRight = keyframes`
0%{
    transform: translateX(100%);
    
  }  
100%{
    transform: translateX(-100%);
    }

/* 0%{
    transform: translate3d(calc(-25%),0,0);
    
  }  
100%{
    transform: translate(-100%);
    } */
`;

export const SecondV = styled.p`
  position: relative;
  padding-left: 35%;
  width: fit-content;
  display: flex;
  gap: 200px;
  margin-bottom: 65px;
  font-style: italic;
  ${fontStyles}
  line-height: ${p => p.theme.lineHeights.body};
  /* font-size:150px ; */

  /* animation: ${moveLeftToRight} 15s linear infinite; */
`;

export const ThirdV = styled.p`
  padding-left: ${p => p.theme.space[5]}px;
  ${fontStyles}
  z-index: 100;
  color: ${p => p.theme.colors.background};
`;

export const MainSection = styled.div`
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
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
export const Banner = styled.div`
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
  height: 100vh;
  
  /* border-top: ${p => p.theme.borders.normal}; */
`;
export const Presentation = styled.div`
  /* width: 100vw; */
  height: 110px;
  /* background-color:${p => p.theme.colors.modes.light.background} ; */
`;
