import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Ul = styled.ul`
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-family: ${p => p.theme.fonts.body};
  list-style-type: circle;
  padding-left: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const NavigationLink = styled(NavLink)`
  &.active {
    color: green;
  }
`;