import styled from 'styled-components';

export const TextFrontEndPage = styled.p`
  
  font-weight: ${p => p.theme.fontWeights.body};
  line-height: ${p => p.theme.lineHeights.heading};
  font-family: ${p => p.theme.fonts.forBlog};
  font-style: italic;
  text-shadow: 0 10px 9px #8c928f, 0 80px 60px #8c928f;
   @media screen and (${p => p.theme.media.s}) {
    font-size: ${p => p.theme.fontSizes[3]}px;
  }
    @media screen and (${p => p.theme.media.m}) {
    font-size: ${p => p.theme.fontSizes[3]}px;
    
  }
    @media screen and (${p => p.theme.media.l}) {
      font-size: ${p => p.theme.fontSizes[4]}px;
  }
  @media screen and (${p => p.theme.media.xl}) {
    font-size: ${p => p.theme.fontSizes[5]}px;
  }
`;

export const WrapIcon = styled.div`
  /* background-color: aqua; */
  /* transform: rotate3d((1, 1, 1, 45deg)); */
  /* :hover,
  :focus {
    transform: rotate3d(0);
  } */
`;

export const Wrap = styled.div`
  transition: transform 0.8 ease-in-out;
  padding: ${p => p.theme.space[5]}px;

  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  @media screen and (${p => p.theme.media.s}) {
    padding: ${p => p.theme.space[3]}px;
    flex-direction: column;

    justify-content: normal;
    text-align: center;
    font-size: ${p => p.theme.fontSizes[1]}px;
  }
  @media screen and (${p => p.theme.media.m}) {
    /* font-size: ${p => p.theme.fontSizes[2]}px; */
    /* padding: ${p => p.theme.space[3]}px; */
  }
  @media screen and (${p => p.theme.media.l}) {
  }
  @media screen and (${p => p.theme.media.xl}) {
  }
`;
