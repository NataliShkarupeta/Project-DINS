import styled from "styled-components";

export const Li = styled.li`
  padding: ${p => p.theme.space[5]}px;
`;

export const Title = styled.span`
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.body};
`;