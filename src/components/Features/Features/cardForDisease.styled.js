import styled from "styled-components";

export const CardButtun = styled.button`
  position: absolute;
  bottom: 6px;
  right: 6px;
  /* box-shadow: -12px -10px 20px 1px rgba(186, 99, 243, 0.52) ; */
  /* :hover,
  :focus {
    cursor: pointer;
    color: ${p => p.theme.colors.modes.dark.text};
    background-color: ${p => p.theme.colors.muted};
    border-color: ${p => p.theme.colors.primary};
    border-radius: ${p => p.theme.radii.middle};
  } */
`;
;

export const El = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${p => p.theme.radii.middle};
  box-shadow: 1px 1px 33px -5px rgba(91, 98, 92, 0.5);
  background-color: ${p => p.theme.colors.modes.dark.text};
`;

export const Div = styled.div`
  height: 100%;
  position: absolute;
  inset: 0;
  border-radius: ${p => p.theme.radii.normal};
  transition: all 0.5s;

`;