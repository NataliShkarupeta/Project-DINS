import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavLinkButton = styled(NavLink)`
  padding-left: ${p => p.theme.space[3]}px;
`
export const WrapCheckBlok = styled.div`
  margin-bottom: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;

  display: flex;
  justify-content: flex-end;
  gap: 30px;
`;

export const Input = styled.input`
  margin-left: ${p => p.theme.space[2]}px;
`;