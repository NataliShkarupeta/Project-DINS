import styled from 'styled-components';

export const WrapName = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-end;
  font-size: ${p => p.theme.fontSizes[5]}px;
  line-height: ${p => p.theme.lineHeights.heading};
  font-family: ${p => p.theme.fonts.forBlog};
  font-weight: ${p => p.theme.fontWeights.body};
  margin-top: ${p => p.theme.space[2]}px;
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
  margin-bottom: ${p => p.theme.space[5]}px;
`;
/////////////// LayoutMobile////////////
export const WrapLogo= styled.div`
cursor: pointer;
width: 50px;
height: 50px;
`
export const HeaderMobile = styled.header`
  padding: 10px 16px;
  display: flex;

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

export const WrapNameText= styled.div`
display: flex;
flex-direction: column;
gap: 10px;
align-items: center;
`