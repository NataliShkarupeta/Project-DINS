import styled from "styled-components";

export const Head = styled.header`
  height: 50px;
  margin-bottom: ${p => p.theme.space[4]}px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  border-bottom: ${p => p.theme.borders.normal};
`;