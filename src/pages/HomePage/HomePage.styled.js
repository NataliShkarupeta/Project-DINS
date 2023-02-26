import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: ${p => p.theme.colors.text};

  :hover,
  :focus {
    color: ${p => p.theme.colors.accent};
    background-color: ${p => p.theme.colors.secondary};
  }
  transition: ${p => p.theme.transitions};
`;

export const WrapHome = styled.div`
  display: flex;
  gap: 20px;
`;

export const H1 = styled.h1`
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes[7]}px;
  font-weight: ${p => p.theme.fontWeights.heading};
  color: ${p => p.theme.colors.text};
  margin: ${p => p.theme.space[0]}px;
  padding: ${p => p.theme.space[0]}px;
`;

export const WrapLinks = styled.div`
  width: 40%;
  margin: ${p => p.theme.space[0]}px;
  padding: ${p => p.theme.space[0]}px;
  text-align: left;
`;

export const Ul = styled.ul`
  list-style: none;
  margin: ${p => p.theme.space[0]}px;
  padding: ${p => p.theme.space[0]}px;
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes[5]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
`;
export const Li = styled.li`
  display: block;
  height: 45px;
  margin: ${p => p.theme.space[1]}px;
  padding: ${p => p.theme.space[2]}px;
  background-color: ${p => p.theme.colors.accent};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};
  
  :hover,
  :focus {
    color: ${p => p.theme.colors.accent};
    background-color: ${p => p.theme.colors.secondary};
  }
  
  transition: ${p => p.theme.transitions};
`;

export const Circle = styled.div`
  margin: ${p => p.theme.space[1]}px;
  width: ${p => p.theme.sizes[5]}px;
  height: ${p => p.theme.sizes[5]}px;
  background-color: ${p => p.theme.colors.secondary};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.round};
  border-color: ${p => p.theme.colors.muted};
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.accent};
  }
`;
