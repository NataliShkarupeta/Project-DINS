import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Ul = styled.ul`
  font-size: ${p => p.theme.fontSizes[2]}px;
  list-style-type: circle;
  padding: ${p => p.theme.space[3]}px;
`;

export const NavigationLink = styled(NavLink)`
  &.active {
    color: green;
  }
`;