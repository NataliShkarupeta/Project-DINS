import styled from "styled-components";


export const TextFrontEndPage = styled.p`
  font-size: ${p => p.theme.fontSizes[5]}px;
  font-weight: ${p => p.theme.fontWeights.body};
  line-height: ${p => p.theme.lineHeights.heading};
  font-family: ${p => p.theme.fonts.forBlog};
  font-style: italic;
  text-shadow: 0 10px 9px #8c928f, 0 80px 60px #8c928f;
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
  transition: transform .8 ease-in-out;
  padding: ${p => p.theme.space[5]}px;

  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;