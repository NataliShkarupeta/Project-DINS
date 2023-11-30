import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavLinkButton = styled(NavLink)`
  padding-left: ${p => p.theme.space[3]}px;
`;