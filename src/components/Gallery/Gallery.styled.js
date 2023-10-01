import styled, { css } from 'styled-components';

export const AnimateBlock = styled.div`
  
    /* transform: translate(-90%);
    transition-property: transform;
    transition-duration: 9s;
    transition-timing-function: linear; */

`;

export const BoxForThredRow = styled.div`
  padding-left: ${p => p.theme.space[5]}px;
  display: flex;
  align-items: center;
  justify-content: center;
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
`;
export const SecondV = styled.p`
  padding-left: ${p => p.theme.space[8]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  font-style: italic;
  ${fontStyles}
  line-height: ${p => p.theme.lineHeights.body};
  /* transform: translate(-90%); */
  transition-property: transform;
  transition-duration: 9s;
  transition-timing-function: linear;
  animation-iteration-count: infinite;
 
`;
export const ThirdV = styled.p`
  padding-left: ${p => p.theme.space[6]}px;
  ${fontStyles}
`;

export const MainSection = styled.div`
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
`;

export const Banner = styled.div`
  /* position: relative; */
`;
export const Presentation = styled.div`
  /* width: 100vw; */
  height: 110px;
  /* background-color:${p => p.theme.colors.modes.light.background} ; */
`;
