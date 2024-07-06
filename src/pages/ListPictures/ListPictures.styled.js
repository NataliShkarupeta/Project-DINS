import { NavLink } from 'react-router-dom';
import styled from 'styled-components';



export const WrapCheckboxes = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${p => p.theme.space[4]}px;
  align-items: center;
  @media screen and (${p => p.theme.media.s}) {
    height: 90px;
    flex-wrap: wrap;
  }
`;

export const AllAndStockWords = styled.span`
  font-family: ${p => p.theme.fonts.forName};
  font-style: italic;
  font-weight: ${p => p.theme.fontWeights.body};
  @media screen and (${p => p.theme.media.s}) {
    font-size: ${p => p.theme.fontSizes[0]}px;
    line-height: 1.12;
  }
  @media screen and (${p => p.theme.media.m}) {
    font-size: ${p => p.theme.fontSizes[1]}px;
  }
  @media screen and (${p => p.theme.media.l}) {
    font-size: ${p => p.theme.fontSizes[2]}px;
  }
`;

export const WrapPlaces = styled.div`
  position: relative;
`;

export const LiPlaces = styled.li`
  display: inline-block;
  vertical-align: top;
  text-align: center;
  color: #6c7784;
  perspective: 1000px;
  transition: color 0.3s;
  cursor: pointer;
  font-family: ${p => p.theme.fonts.forName};
  font-style: italic;
  font-weight: ${p => p.theme.fontWeights.body};

  &:hover,
  &:active {
    color: black;
  }
  @media screen and (${p => p.theme.media.s}) {
    width: 50px;
    line-height: 30px;
  }
  @media screen and (${p => p.theme.media.m}) {
    width: 60px;
    line-height: 38px;
  }
  @media screen and (${p => p.theme.media.l}) {
    width: 70px;
    font-size: ${p => p.theme.fontSizes[1]}px;
    line-height: 38px;
  }
  @media screen and (${p => p.theme.media.xl}) {
    width: 90px;
    font-size: ${p => p.theme.fontSizes[2]}px;
    line-height: 50px;
  }
`;

export const UlPlaces = styled.ul`
  position: relative;

  height: 100%;
  list-style-type: none;
  font-size: 0;
  @media screen and (${p => p.theme.media.s}) {
    width: 300px;
    padding-left: 5px;
    padding-right: 0px;
  }
  @media screen and (${p => p.theme.media.m}) {
    width: 500px;
    padding-left: 6px;
    padding-right: 0px;
  }
  @media screen and (${p => p.theme.media.l}) {
    padding-left: 25px;
  }
  @media screen and (${p => p.theme.media.xl}) {
    padding-left: 20px;
    padding-right: 30px;
  }
`;

export const NavPlaces = styled.nav`
  border-radius: 5px;
  box-shadow: 23px 0px 37px 0px rgba(0, 0, 0, 0.23);
  @media screen and (${p => p.theme.media.s}) {
    height: 30px;
  }
  @media screen and (${p => p.theme.media.m}) {
    height: 40px;
  }
  @media screen and (${p => p.theme.media.xl}) {
    height: 50px;
  }
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
    @media screen and (${p => p.theme.media.s}) {
      width: 250px;
    }
    @media screen and (${p => p.theme.media.m}) {
      width: 300px;
    }
    @media screen and (${p => p.theme.media.l}) {
      width: 400px;
    }
    @media screen and (${p => p.theme.media.xl}) {
      width: 500px;
    }
  }
  @media screen and (${p => p.theme.media.s}) {
    width: 70px;
  }
  @media screen and (${p => p.theme.media.m}) {
    width: 90px;
  }
  @media screen and (${p => p.theme.media.l}) {
    width: 100px;
  }
`;

export const TextPlace = styled.span`
  display: block;
  height: 100%;
  transform: rotateY(-70deg);
  opacity: 0;
  transition: transform 1s cubic-bezier(0.48, 0.43, 0.7, 2.5), opacity 250ms;

  ${PlacesInput}:checked ~ ${PlacesContent}  & {
    font-size: 8px;
    transform: rotateY(0);
    opacity: 1;
    transition: transform 2s cubic-bezier(0.48, 0.43, 0.7, 2.5), opacity 3s;
    @media screen and (${p => p.theme.media.m}) {
      font-size: 10px;
    }
    @media screen and (${p => p.theme.media.l}) {
      font-size: 12px;
    }
    @media screen and (${p => p.theme.media.xl}) {
      font-size: ${p => p.theme.fontSizes[2]}px;
    }
  }
`;
export const LabPlaces = styled.label`
  z-index: 1;
  position: absolute;
  padding: 10px 20px;
  cursor: pointer;
  color: ${p => p.theme.colors.modes.dark.muted};
  font-family: ${p => p.theme.fonts.forName};
  font-style: italic;
  font-weight: ${p => p.theme.fontWeights.body};

  ${PlacesInput}:checked ~ & {
    transition: transform 1s ${p => p.theme.transitions};
    @media screen and (${p => p.theme.media.s}) {
      transform: translateY(-25px) scale(0.85);
    }
    @media screen and (${p => p.theme.media.m}) {
      transform: translateX(320px) scale(0.85);
    }
    @media screen and (${p => p.theme.media.l}) {
      transform: translateX(420px) scale(0.85);
    }
    @media screen and (${p => p.theme.media.xl}) {
      transform: translateX(530px) scale(0.85);
    }
  }

  &:hover,
  &:focus {
    color: purple;
  }
  transition: transform 1s ${p => p.theme.transitions};
  @media screen and (${p => p.theme.media.s}) {
    transform: translateY(0) scale(1);
    font-size: ${p => p.theme.fontSizes[0]}px;
    top: -10%;
    left: -7%;
  }
  @media screen and (${p => p.theme.media.m}) {
    transform: translateY(0) scale(1);
    font-size: ${p => p.theme.fontSizes[1]}px;
    top: 0%;
    left: -7%;
  }
  @media screen and (${p => p.theme.media.l}) {
    transform: translateX(0) scale(1);
    font-size: ${p => p.theme.fontSizes[2]}px;
  }
  @media screen and (${p => p.theme.media.xl}) {
    top: 4px;
  }
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

  @media screen and (${p => p.theme.media.s}) {
    flex-direction: column;
    gap: 0;
    margin: 0;
    padding: 0;
    padding-right: ${p => p.theme.space[3]}px;
  }
  @media screen and (${p => p.theme.media.m}) {
    flex-direction: column;
    gap: 0;
    margin: 0;
    padding: 0;
    padding-right: ${p => p.theme.space[3]}px;
  }
  @media screen and (${p => p.theme.media.l}) {
    flex-direction: row;
    gap: 10px;
  }
  @media screen and (${p => p.theme.media.xl}) {
    gap: 30px;
  }
`;

export const Input = styled.input`
  margin-left: ${p => p.theme.space[2]}px;
  appearance: none;
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
      color: #fff;
      position: absolute;

      @media screen and (${p => p.theme.media.s}) {
        /* font-size: 1em;
        right: 1px;
        top: -1.8px; */
        font-size: 1em;
        right: 2px;
        top: -1px;
      }
      @media screen and (${p => p.theme.media.m}) {
        font-size: 1em;
        right: 2px;
        top: -1px;
      }
      @media screen and (${p => p.theme.media.l}) {
        font-size: 1em;
        right: 3px;
        top: -0px;
      }
      @media screen and (${p => p.theme.media.xl}) {
        font-size: 1.5em;
        right: 1px;
        top: -3px;
      }
    }
  }
  @media screen and (${p => p.theme.media.s}) {
    /* width: 1em;
    height: 1em; */
    width: 1.2em;
    height: 1.2em;
  }
  @media screen and (${p => p.theme.media.m}) {
    width: 1.2em;
    height: 1.2em;
  }
  @media screen and (${p => p.theme.media.l}) {
    width: 1.4em;
    height: 1.4em;
  }
  @media screen and (${p => p.theme.media.xl}) {
    width: 1.6em;
    height: 1.6em;
  }
`;

export const BGPriceBlock = styled.div`
  background-color: ${p => p.theme.colors.background};
  color: ${p => p.theme.colors.text};
`;
