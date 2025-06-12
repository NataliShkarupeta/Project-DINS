import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import img from '../../images/author/IMG_0043.jpg';

export const Motto = styled.span`
  display: block;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.middle};
  margin-bottom: ${p => p.theme.space[4]}px;
  margin-top: ${p => p.theme.space[4]}px;
  line-height: ${p => p.theme.lineHeights.normal};
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
  @media screen and (${p => p.theme.media.m}) {
    font-size: ${p => p.theme.fontSizes[2]}px;
  }
  @media screen and (${p => p.theme.media.xl}) {
    font-size: ${p => p.theme.fontSizes[3]}px;
  }
`;

export const NameAndPhoto = styled.div`
  margin-bottom: ${p => p.theme.space[4]}px;
  position: relative;
  @media screen and (${p => p.theme.media.m}) {
    flex-direction: column;
    justify-content: flex-start;
  }
  @media screen and (${p => p.theme.media.l}) {
    display: flex;
    flex-direction: row;
    gap: 15px;
    justify-content: space-around;
  }
  @media screen and (${p => p.theme.media.xl}) {
    /* display: flex;
    justify-content: space-around; */
  }
`;
export const PhotoWrap = styled.div`
  border-color: ${p => p.theme.colors.secondary};
  background-image: url('${img}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media screen and (${p => p.theme.media.s}) {
    width: 100%;
    height: 500px;
  }
  @media screen and (${p => p.theme.media.m}) {
    width: 80vw;
    height: 600px;
    margin-left: 20%;
  }
  @media screen and (${p => p.theme.media.l}) {
    margin: 0;
    width: 450px;
  }
  @media screen and (${p => p.theme.media.xl}) {
    width: 500px;
    height: 700px;
  }
`;

export const WrapName = styled.div`
  /* margin-top: ${p => p.theme.space[5]}px; */
  position: sticky;
  @media screen and (${p => p.theme.media.m}) {
    margin-top: ${p => p.theme.space[3]}px;
    padding: 0 0 0 16px;
  }
  @media screen and (${p => p.theme.media.l}) {
    /* padding: 0; */
    margin-top: ${p => p.theme.space[5]}px;
  }
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
  @media screen and (${p => p.theme.media.s}) {
    font-size: ${p => p.theme.fontSizes[3]}px;
  }
  @media screen and (${p => p.theme.media.m}) {
    font-size: 60px;
    position: static;
    font-weight: ${p => p.theme.fontWeights.middleOne};
  }
  @media screen and (${p => p.theme.media.l}) {
    position: sticky;
    color: ${p => p.theme.colors.modes.dark.primary};
    font-size: 70px;
  }
  @media screen and (${p => p.theme.media.xl}) {
    font-size: 80px;
    font-weight: ${p => p.theme.fontWeights.bold};
  }
  @media screen and (${p => p.theme.media.xxl}) {
    position: sticky;
    font-size: 120px;
  }
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
  box-shadow: 0 0 0px rgba(0, 0, 0, 0.1), 0 3px 7px rgba(0, 0, 0, 0.3),
    inset 0 1px rgba(255, 255, 255, 1), inset 0 -3px 2px rgba(0, 0, 0, 0);
  margin-bottom: ${p => p.theme.space[5]}px;
  position: relative;
  @media screen and (${p => p.theme.media.m}) {
    padding: ${p => p.theme.space[2]}px;
    font-size: ${p => p.theme.fontSizes[1]}px;
  }
  @media screen and (${p => p.theme.media.l}) {
    font-size: ${p => p.theme.fontSizes[2]}px;
  }
  @media screen and (${p => p.theme.media.xl}) {
    padding: ${p => p.theme.space[3]}px;
    font-size: ${p => p.theme.fontSizes[2]}px;
  }
  @media screen and (${p => p.theme.media.xxl}) {
    line-height: 1.18;
    font-size: ${p => p.theme.fontSizes[3]}px;
  }
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

export const WrapLinks = styled.div``;

export const Ul = styled.ul`
  font-family: ${p => p.theme.fonts.monospase};
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* gap: 35px; */
  @media screen and (${p => p.theme.media.m}) {
    padding: 3px;
    justify-content: flex-end;
    gap: 20px;
  }
  @media screen and (${p => p.theme.media.l}) {
    gap: 25px;
    justify-content: center;
  }
  @media screen and (${p => p.theme.media.xl}) {
    padding: 0;
    gap: 35px;
  }
`;
export const Li = styled.li`
  /* font-size: ${p => p.theme.fontSizes[2]}px; */
  font-family: ${p => p.theme.fonts.monospace};
  font-weight: ${p => p.theme.fontWeights.body};
  line-height: ${p => p.theme.lineHeights.normal};
  :hover,
  :focus {
    color: ${p => p.theme.colors.secondary};
  }

  transition: 0.3s linear;
  @media screen and (${p => p.theme.media.m}) {
    font-size: ${p => p.theme.fontSizes[1]}px;
  }

  @media screen and (${p => p.theme.media.l}) {
  }
  @media screen and (${p => p.theme.media.xl}) {
    font-size: ${p => p.theme.fontSizes[2]}px;
  }
`;
