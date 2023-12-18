import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export const NavLinkButton = styled(NavLink)`
  padding-left: ${p => p.theme.space[3]}px;
`;
export const WrapCheckBlok = styled.div`
  margin-bottom: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;

  display: flex;
  justify-content: flex-end;
  gap: 30px;
`;

export const Input = styled.input`
  margin-left: ${p => p.theme.space[2]}px;
  appearance: none;
  width: 1.6em;
  height: 1.6em;
  border-radius: 0.15em;
  margin-right: 0.5em;
  border: 1px solid;
  color: ${p => p.theme.colors.text};
  outline: none;
  cursor: pointer;
  &:checked {
    background-color: #007a7e;
    position: relative;
    border: none;
    &:before {
      content: '✓';
      /* ✓ ✔  */
      font-size: 1.5em;
      color: #fff;
      position: absolute;
      right: 1px;
      top: -3px;
    }
  }
  /* & :checked,
  :before {
    content: 'v';

    font-size: 1.5em;
    color: #fff;
    position: absolute;
    right: 1px;
    top: -5px;
  } */
`;

export const BGPriceBlock = styled.div`
  background-color: ${p => p.theme.colors.background};
  color: ${p => p.theme.colors.text};
`;
