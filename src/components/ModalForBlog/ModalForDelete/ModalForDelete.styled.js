import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 1200;
`;


export const Button = styled.button`
  padding: 10px;
`;

export const Title = styled.h3`
  font-size: 30px;
  margin-bottom: 20px;

  text-align: center;
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.middle};
`;
export const Text = styled.p`
    text-align: center;
  font-family: ${p => p.theme.fonts.forName};
  font-style: italic;
  font-size: ${p => p.theme.fontSizes[2]}px;
  font-weight: ${p => p.theme.fontWeights.body};
`;
