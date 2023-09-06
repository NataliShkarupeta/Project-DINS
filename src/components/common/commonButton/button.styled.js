import styled from "styled-components";

export const Button = styled.button`
  border-color: ${p => p.theme.colors.muted};
  background-color: ${p => p.theme.colors.muted};
  display: flex;
  padding: ${p => p.theme.space[1]}px;
  :hover,
  :focus {
    cursor: pointer;
    color: ${p => p.theme.colors.primary};
    background-color: ${p => p.theme.colors.muted};
    border-color: ${p => p.theme.colors.primary};
    border-radius: ${p => p.theme.radii.middle};
  }
  transition: ${p => p.theme.transitions};
`;