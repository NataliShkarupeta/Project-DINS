import styled from "styled-components";

export const Button = styled.button`
  background-color: ${p => p.theme.colors.colForBg};
  font-weight: ${p => p.theme.fontWeights.body};
  border: ${p => p.theme.borders.normal};
  border-radius: 5px;
  border-color: ${p => p.theme.colors.forBut};
  padding: 2px;
  :hover,
  :focus {
    cursor: pointer;

    color: ${p => p.theme.colors.primary};
    border: ${p => p.theme.borders.normal};
    border-color: ${p => p.theme.colors.primary};
  }
  transition: ${p => p.theme.transitions};
   @media screen and (${p => p.theme.media.s}) {
     
     font-size: ${p => p.theme.fontSizes[0]}px;
  }
`;