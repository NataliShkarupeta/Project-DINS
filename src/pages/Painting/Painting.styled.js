import styled from "styled-components";

export const Ul = styled.ul`
  font-size: ${p => p.theme.fontSizes[1]}px;
  list-style-type: circle;
  padding: ${p => p.theme.space[3]}px;
`;