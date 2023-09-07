import styled from 'styled-components';

export const Button = styled.button`
  margin-bottom: ${p => p.theme.space[4]}px;
  margin-left: ${p => p.theme.space[3]}px;
  :hover,
  :focus {
    cursor: pointer;
    color: ${p => p.theme.colors.primary};
    background-color: ${p => p.theme.colors.muted};
    border-color: ${p => p.theme.colors.primary};
    border-radius: ${p => p.theme.radii.normal};
  }
  transition: ${p => p.theme.transitions};
`;
