import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// const fontStyles = css`
//   font-family: ${p => p.theme.fonts.monospace};
//   font-size: ${p => p.theme.fontSizes[7]}px;
//   font-weight: ${p => p.theme.fontWeights.heading};
// `;

export const Motto = styled.span`
  display: block;
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.body};
  /* width: ${p => p.theme.sizes[8]}px; */
  line-height: ${p => p.theme.lineHeights.heading};
  margin-bottom: ${p => p.theme.space[4]}px;
  margin-top: ${p => p.theme.space[4]}px;
`;

export const NameAndPhoto = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-around;
  align-items: center;
  margin-bottom: ${p => p.theme.space[4]}px;
`;
export const PhotoWrap = styled.div`
  padding: ${p => p.theme.space[5]}px;
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.muted};
  background-color: ${p => p.theme.colors.secondary};
`;

export const WrapName = styled.div`
  /* width: 60%; */
`;

export const Article = styled.article`
  height: 250px;
  padding: ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.modes.light.background};
  font-size: ${p => p.theme.fontSizes[3]}px;
  line-height: ${p => p.theme.lineHeights.heading};
  /* overflow-y: scroll; */
  overflow: hidden;
  box-shadow: 0 0 0px rgba(0, 0, 0, 0.1), 0 3px 7px rgba(0, 0, 0, 0.3),
    inset 0 1px rgba(255, 255, 255, 1), inset 0 -3px 2px rgba(0, 0, 0, 0);
  margin-bottom: ${p => p.theme.space[3]}px;
  position: relative;
`;

export const ButtonUnderArticle = styled.button`
  position: absolute;
  right: 3.1%;
`;

export const NavigationLink = styled(NavLink)`
  text-transform: uppercase;
  &.active {
    color: purple;
  }
`;

export const WrapHome = styled.div`
  display: flex;
  gap: 20px;
`;

export const Name = styled.span`
  font-weight: bold;
  /* font-size: 9em; */
  font-size: 120px;
  color: #f5f5f5;
  transform: rotateX(35deg) rotateZ(1deg);
  text-shadow: white 0.006em 0.006em 0.007em, #9c9c9c 1px 1px 1px,
    #9c9c9c 1px 2px 1px, #9c9c9c 1px 3px 1px, #9c9c9c 1px 4px 1px,
    #9c9c9c 1px 5px 1px, #9c9c9c 1px 6px 1px, #9c9c9c 1px 7px 1px,
    #9c9c9c 1px 8px 1px, #9c9c9c 1px 9px 1px, #9c9c9c 1px 10px 1px,
    #9c9c9c 1px 11px 1px, #9c9c9c 1px 12px 1px,
    rgba(16, 16, 16, 0.4) 1px 18px 6px, rgba(16, 16, 16, 0.2) 1px 22px 10px,
    rgba(16, 16, 16, 0.2) 1px 26px 35px, rgba(16, 16, 16, 0.4) 1px 30px 65px,
    white -0.15em -0.1em 100px;
  transition: 0.3s linear;

  :hover {
    margin-top: -20px;
    text-shadow: white 0.006em 0.006em 0.007em, #9c9c9c 1px 1px 1px,
      #9c9c9c 1px 2px 1px, #9c9c9c 1px 3px 1px, #9c9c9c 1px 4px 1px,
      #9c9c9c 1px 5px 1px, #9c9c9c 1px 6px 1px, #9c9c9c 1px 7px 1px,
      #9c9c9c 1px 8px 1px, #9c9c9c 1px 9px 1px, #9c9c9c 1px 10px 1px,
      #9c9c9c 1px 11px 1px, #9c9c9c 1px 12px 1px,
      rgba(16, 16, 16, 0.4) 1px 38px 26px, rgba(16, 16, 16, 0.2) 1px 42px 30px,
      rgba(16, 16, 16, 0.2) 1px 46px 65px, rgba(16, 16, 16, 0.4) 1px 50px 95px,
      white -0.15em -0.1em 100px;
  }
  font-family: ${p => p.theme.fonts.body};
  color: ${p => p.theme.colors.modes.dark.primary};
`;

export const WrapLinks = styled.div``;

export const Ul = styled.ul`
  font-family: ${p => p.theme.fonts.monospase};
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 35px;
`;
export const Li = styled.li`
  font-size: ${p => p.theme.fontSizes[1]}px;
  :hover,
  :focus {
    color: ${p => p.theme.colors.modes.dark.primary};
    text-shadow: -0.5px 1px 0.1px rgba(0, 0, 0, 0.72);
    /* background-color: ${p => p.theme.colors.secondary}; */

    transform: scale(1.3);
  }

  transition: 0.3s linear; ;
`;