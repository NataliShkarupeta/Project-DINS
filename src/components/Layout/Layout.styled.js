import styled from 'styled-components';

export const WrapBody = styled.div`
  /* display: flex;
  flex-direction: column;
  min-height: 100vh; */
`;

export const WrapMain = styled.main`
  /* flex-grow: 1; */
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
`;
