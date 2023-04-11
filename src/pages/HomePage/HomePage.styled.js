import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const fontStyles = css`
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes[7]}px;
  font-weight: ${p => p.theme.fontWeights.heading};
`;

export const NameAndPhoto = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: ${p => p.theme.space[4]}px;
`;
export const PhotoWrap = styled.div`
  padding: ${p => p.theme.space[5]}px;
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.muted};
  background-color: #8c3b19;
`;

export const Article = styled.article`
  height: 250px;
  padding: ${p => p.theme.space[3]}px;
  /* background-color: ${p => p.theme.colors.secondary}; */
  /* overflow-y: scroll; */
  box-shadow: 0 0 0px rgba(0, 0, 0, 0.1), 0 3px 7px rgba(0, 0, 0, 0.3),
    inset 0 1px rgba(255, 255, 255, 1), inset 0 -3px 2px rgba(0, 0, 0, 0);
  margin-bottom: ${p => p.theme.space[3]}px;
  position: relative;
  
`;

export const ButtonUnderArticle=styled.button`
position:absolute;
right: 3.1%;
`

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: ${p => p.theme.colors.text};

  :hover,
  :focus {
    color: ${p => p.theme.colors.accent};
    background-color: ${p => p.theme.colors.secondary};
  }
  transition: ${p => p.theme.transitions};
`;

export const WrapHome = styled.div`
  display: flex;
  gap: 20px;
`;

export const H1 = styled.h1`
  color: ${p => p.theme.colors.text};

  ${fontStyles}
`;

export const WrapLinks = styled.div`
  /* width: 40%;
 
  /* text-align: left; */
`;

export const Ul = styled.ul`
  /* list-style: none; */

  /* font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes[5]}px;
  font-weight: ${p => p.theme.fontWeights.bold}; */ */
`;
export const Li = styled.li`
  /* display: block;
  height: 45px; */
  /* margin: ${p => p.theme.space[1]}px;
  padding: ${p => p.theme.space[2]}px; */
  /* background-color: ${p => p.theme.colors.accent};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal}; */

  :hover,
  :focus {
    color: ${p => p.theme.colors.accent};
    background-color: ${p => p.theme.colors.secondary};
  }

  transition: ${p => p.theme.transitions};
`;
