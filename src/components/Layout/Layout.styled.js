import styled from "styled-components";

export const WrapBody = styled.div`
  margin:${p=>p.theme.space[0]}px;
 
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const WrapMain = styled.main`
  padding: ${p => p.theme.space[3]}px;
  flex-grow: 1;
`;