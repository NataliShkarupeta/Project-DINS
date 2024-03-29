import styled from 'styled-components';

export const CardButtun = styled.button`
  position: absolute;
  bottom: 6px;
  right: 6px;
`;
export const Img = styled.img`
  position: absolute;
  top: 215px;
  left: 174px;
  width: 250px;
`;

export const El = styled.div`
  /* padding: ${p => p.theme.space[2]}px; */
  text-align: center;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${p => p.theme.radii.middle};
  box-shadow: 1px 1px 33px -5px rgba(91, 98, 92, 0.5);
  background-color: ${p => p.theme.colors.modes.dark.text};
  z-index: 1;
`;

export const Div = styled.div`
  height: 100%;
  position: absolute;
  inset: 0;
  border-radius: ${p => p.theme.radii.normal};
  transition: all 0.5s;
`;
