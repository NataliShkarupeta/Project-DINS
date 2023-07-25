import styled  from "styled-components";

export const WrapPhotos = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Title = styled.h2`
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.heading};
  font-family: ${p => p.theme.fonts.monospace};
  text-decoration: overline;
  text-align: center;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Text = styled.span`
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights.body};
  line-height: ${p => p.theme.lineHeights.heading};
  font-family: ${p => p.theme.fonts.monospace};
  margin-left: ${p => p.theme.space[3]}px;
`;