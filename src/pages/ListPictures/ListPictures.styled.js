import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const WrapCheckboxes = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const AllAndStockWords = styled.span`
  font-family: ${p => p.theme.fonts.forName};
  font-style: italic;
  font-weight: ${p => p.theme.fontWeights.body};
  font-size: ${p => p.theme.fontSizes[2]}px;
`;

export const WrapPlaces = styled.div`
  position: relative;
  
`;

export const LiPlaces = styled.li`
  display: inline-block;
  vertical-align: top;
  width: 90px;
  text-align: center;
  color: #6c7784;

  line-height: 50px;
  perspective: 1000px;
  transition: color 0.3s;
  cursor: pointer;
  font-family: ${p => p.theme.fonts.forName};
  font-style: italic;
  font-weight: ${p => p.theme.fontWeights.body};
  font-size: ${p => p.theme.fontSizes[2]}px;

  &:hover {
    color: black;
  }
`;

export const UlPlaces = styled.ul`
  position: relative;
  width: 500px;
  height: 100%;
  padding-left: 20px;
  padding-right: 30px;
  list-style-type: none;
  font-size: 0;
  
`;

export const NavPlaces = styled.nav`
  overflow: hidden;
  left: 1.5%;
  top: 10px;
  width: auto;
  height: 50px;
  border-radius: 5px;
  box-shadow: 23px 0px 37px 0px rgba(0, 0, 0, 0.23);
`;

export const PlacesInput = styled.input`
  z-index: -1000;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  pointer-events: none;
`;

export const PlacesContent = styled.div`
  position: relative;
  width: 100px;
  height: 100%;
  border-radius: ${p => p.theme.radii.normal};
  transition: width 1s cubic-bezier(0.49, -0.3, 0.68, 1.23);
  background-color: ${p => p.theme.colors.modes.dark.text};

  ${PlacesInput}:checked ~ & {
    transition: width 1.5 cubic-bezier(0.48, 0.43, 0.29, 1.3);
    width: 500px;
    background-color: white;
  }
`;

export const TextPlace = styled.span`
  display: block;
  height: 100%;
  transform: rotateY(-70deg);
  opacity: 0;
  transition: transform 1s cubic-bezier(0.48, 0.43, 0.7, 2.5), opacity 250ms;

  ${PlacesInput}:checked ~ ${PlacesContent}  & {
    transform: rotateY(0);
    opacity: 1;
    transition: transform 2s cubic-bezier(0.48, 0.43, 0.7, 2.5), opacity 3s;
  }
`;
export const LabPlaces = styled.label`
  z-index: 1;
  position: absolute;
  top: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transform: translateX(0) scale(1);

  color: ${p => p.theme.colors.modes.dark.muted};
  font-family: ${p => p.theme.fonts.forName};
  font-style: italic;
  font-size: ${p => p.theme.fontSizes[2]}px;
  font-weight: ${p => p.theme.fontWeights.body};

  ${PlacesInput}:checked ~ & {
    transform: translateX(500px) scale(0.85);
    transition: transform 1s ${p => p.theme.transitions};
  }

  &:hover,
  &:focus {
    color: purple;
   
  }
  transition: transform 1s ${p => p.theme.transitions};
`;

//////////////////////////////////////////

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