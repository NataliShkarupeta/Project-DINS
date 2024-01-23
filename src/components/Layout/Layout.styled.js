import styled, { css } from 'styled-components';
import img from '../../images/author/IMG_0043.jpg';

export const WrapName = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-end;
  font-size: ${p => p.theme.fontSizes[5]}px;
  line-height: ${p => p.theme.lineHeights.heading};
  font-family: ${p => p.theme.fonts.forBlog};
  font-weight: ${p => p.theme.fontWeights.body};
  margin-top: ${p => p.theme.space[2]}px;
   @media screen and (${p => p.theme.media.s}) {
    font-size: ${p => p.theme.fontSizes[3]}px;
  }
`;

export const BlockUnderLine = styled.div`
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
  display: flex;
  justify-content: space-between;
  margin-bottom: ${p => p.theme.space[3]}px;
  /* position: sticky;
  top: 0; */
`;

export const Blog = styled.div`
  margin-bottom: ${p => p.theme.space[2]}px;
  text-align: center;
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(14, 174, 87, 1) 0%,
    rgba(12, 116, 117, 1) 90%
  );
  color: ${p => p.theme.colors.modes.dark.text};
  padding: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes[3]}px;
  line-height: ${p => p.theme.lineHeights.heading};
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.middle};
  @media screen and (${p => p.theme.media.s}) {
    font-size: ${p => p.theme.fontSizes[1]}px;
    padding: ${p => p.theme.space[1]}px;
  }
`;

export const WrapMoonAndSun = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 5px;
`;

export const WrapButton = styled.div`
  margin-top: 5px;
`;

export const Background = styled.div`
  color: ${p => p.theme.colors.text};

  background-color: ${p => p.theme.colors.background};
`;

export const WrapMain = styled.main`
  padding: 20px 0 0;
  margin-bottom: ${p => p.theme.space[4]}px;
`;
/////////////// LayoutMobile////////////
export const WrapLogo = styled.div`
  cursor: pointer;
  width: 50px;
  height: 50px;
`;
export const HeaderMobile = styled.header`
  padding: 10px 16px;
  display: flex;
  align-items: center;

  justify-content: space-between;

  border-bottom: ${p => p.theme.borders.normal};
  box-shadow: 0px 8px 21px rgba(61, 29, 29, 0.25);
 
`;

export const WrapNameNobile = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  font-size: ${p => p.theme.fontSizes[5]}px;
  line-height: ${p => p.theme.lineHeights.heading};
  font-family: ${p => p.theme.fonts.forBlog};
  font-weight: ${p => p.theme.fontWeights.body};
  margin-top: ${p => p.theme.space[2]}px;
`;
export const TextMobile = styled.p`
  font-size: ${p => p.theme.fontSizes[2]}px;
  font-family: ${p => p.theme.fonts.forBlog};
  font-style: italic;
  font-weight: ${p => p.theme.fontWeights.body};
`;

export const WrapNameText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export  const MenuBody = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;

  background-image: url('${img}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: 10;
  overflow: hidden;
  /* &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.35);
  } */
  /* z-index: 1; */

`;

 export const Nav = styled.nav`
   position: relative;
   height: 100%;

   background: rgba(0, 0, 0, 0.8);
   z-index: 4;
 `;

export const UlMobile = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-content: flex-start;
  padding: 60px 50px;
`;

export const LiMobile = styled.li`
  color: ${p => p.theme.colors.secondary};

  cursor: pointer;

  &:hover {
    color: rgba(255, 255, 255, 0.85);
  }
`;

export const MenuBtn = styled.button`
background: none;
border: none;
cursor: pointer;
  /* transition: ${p => p.theme.transitions}; */
`;

const lines = css`
  width: 30px;
  background: ${p => p.theme.colors.text};
  height: 2px;
  margin: 3px 0;
  /* transition: all 250ms cubic-bezier(0.9, 0, 0.33, 1); */
  margin-bottom: 5px;
`;

export const MenuL1 = styled.div`
  ${lines}
  width: 30px;
  /* transform-origin: left; */
`;
export const MenuL2 = styled.div`
  ${lines}
  width: 30px;
  /* transform-origin: center; */
`;
export const MenuL3 = styled.div`
  ${lines}
  width: 30px;
  /* transform-origin: right; */
`;

export const SubMenuBtn = styled.button`
  background: none;
  border: none;
  position: absolute;

  top: 3%;
  right: -30px;
  margin: 12px 10px;
  border-radius: 5px;
  transform: translateX(-100%);
  /* transition: all 250ms cubic-bezier(0.8, 0, 0.33, 1.25); */
  cursor: pointer;
  z-index: 8;
`;

const linesM = css`
  width: 30px;
  height: 2px;
  background: ${p => p.theme.buttons.primary.color};
  display: flex;
  flex-direction: column;
`;
export const SubL1 = styled.div`
  ${linesM}

  transform-origin: left;
  transform: rotate(-35deg) translate(-5px, 8px);
`;
export const SubL2 = styled.div`
  ${linesM}

  transform-origin: left;
  transform: rotate(35deg) translate(-5px, -8px);
`;


export const ButEmailMobile = styled.button`
  border: none;
  background-color: transparent;
  color: ${p => p.theme.colors.modes.dark.btEmail};
`;