import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import img from '../../images/author/IMG_0043.jpg'

export const Motto = styled.span`
  display: block;
  font-family: ${p => p.theme.fonts.body};
  /* font-style: italic; */
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.middle};
  margin-bottom: ${p => p.theme.space[4]}px;
  margin-top: ${p => p.theme.space[4]}px;
  line-height: ${p => p.theme.lineHeights.normal};
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
`;

export const NameAndPhoto = styled.div`
  display: flex;
  /* gap: 20px; */
  justify-content: space-around;
  /* align-items: center; */
  margin-bottom: ${p => p.theme.space[4]}px;
  position: relative;
`;
export const PhotoWrap = styled.div`
  width: 500px;
  height: 700px;
  /* padding: ${p => p.theme.space[4]}px; */

  /* border: 0px solid; */
  border-color: ${p => p.theme.colors.secondary};
  /* background-color: ${p => p.theme.colors.secondary}; */
  background-image: url('${img}');

  /* background-size: fit-content; */
  /* background-size: contain; */
  background-size: cover;
  background-repeat: no-repeat;
`;

export const WrapName = styled.div`
  margin-top: ${p => p.theme.space[5]}px;
  /* max-width: 40%; */
  position: sticky;
  /* position: sticky; */
  /* top: 0;
  height: 100vh; */
  /* display: flex; */
  /* align-items: center;  */
`;

export const Article = styled.article`
  height: 250px;
  padding: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.modes.light.background};
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.middle};
  line-height: ${p => p.theme.lineHeights.normal};
  font-family: ${p => p.theme.fonts.body};
  overflow: hidden;
  box-shadow: 0 0 0px rgba(0, 0, 0, 0.1), 0 3px 7px rgba(0, 0, 0, 0.3),
    inset 0 1px rgba(255, 255, 255, 1), inset 0 -3px 2px rgba(0, 0, 0, 0);
  margin-bottom: ${p => p.theme.space[3]}px;
  position: relative;
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
  font-size: 120px;
  line-height: 1.09;
  transform: rotateX(35deg) rotateZ(1deg);

  font-family: ${p => p.theme.fonts.forBlog};
  font-style: italic;
  color: ${p => p.theme.colors.modes.dark.primary};
  position: sticky;
  top: 0;
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
  font-size: ${p => p.theme.fontSizes[2]}px;
  font-family: ${p => p.theme.fonts.monospace};
  font-weight: ${p => p.theme.fontWeights.body};
  line-height: ${p => p.theme.lineHeights.normal};
  :hover,
  :focus {
    color: ${p => p.theme.colors.secondary};

  }

  transition: 0.3s linear;
`;
