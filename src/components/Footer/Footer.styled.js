import styled, { css } from 'styled-components';

export const FooterContainer = styled.footer`
  /* height: 100px; */
  padding: 8px 32px;
  background-color: ${props => props.theme.colors.modes.dark.secondary};
  /* flex-shrink: 0; */
`;

export const Ul = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: ${p => p.theme.space[2]}px;
`;

export const WrapConnect = styled.div`
  text-align: center;
`;

export const WrapDate = styled.div`
  margin-bottom: ${p => p.theme.space[5]}px;
`;

export const TextConnect = styled.p`
  text-decoration: underline;
`;
const stylesBut = css`
  border: ${p => p.theme.borders.none};
  border-color: ${p => p.theme.colors.muted};
  border-radius: ${p => p.theme.radii.round};
  width: 50px;
  height: 50px;
  padding: 0;
`;

export const ButtonInst = styled.button`
  background-color: #d52258;

  ${stylesBut}
`;
export const ButtonTel = styled.button`
  ${stylesBut}
  background-color: #fff;
`;
export const ButtonLin = styled.button`
  background-color: #53b1e2;
  ${stylesBut}
`;
