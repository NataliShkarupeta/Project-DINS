import styled from 'styled-components';

export const BlockUnderLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${p => p.theme.space[4]}px;
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
`;

export const WrapMoonAndSun = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 5px;
`;

export const WrapButton = styled.div`
  margin-top: 5px;
`;

export const ButtonTranslate = styled.button`
  :hover,
  :focus {
    cursor: pointer;
    color: ${p => p.theme.colors.primary};
    background-color: ${p => p.theme.colors.muted};
    border-color: ${p => p.theme.colors.primary};
    border-radius: ${p => p.theme.radii.normal};
  }
  transition: ${p => p.theme.transitions};
`;

export const Background = styled.div`
  color: ${p => p.theme.colors.text};
  /* background-image: linear-gradient(
    174.2deg,
    rgba(255, 244, 228, 1) 7.1%,
    rgba(240, 246, 238, 1) 67.4%
  ); */

  background-color: ${p => p.theme.colors.background};
`;

export const WrapMain = styled.main`
  padding: 20px 0 0;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
`;