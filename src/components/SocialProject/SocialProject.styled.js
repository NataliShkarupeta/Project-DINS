import styled from 'styled-components';
// import img from '../../images/bgSocialProject/bg1 (1).jpg';

export const WrapSections = styled.div`
  display: flex;
  gap: 10px;
`;

export const SectionMain = styled.section`
  width: 75%;
  border-right: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.primary};
  box-shadow: 0 -10px 25px #8c928f, 0 30px 30px #8c928f;
  text-align: center;
  padding: ${p => p.theme.space[2]}px;
`;
export const WrapPhoto = styled.div`

  display: flex;
  gap:5px;
`;
export const Img2 = styled.img`
  /* flex: 1 1 160px; */
`;


export const SectionSecond = styled.section`
  width: 25%;
  text-align: center;
  padding: ${p => p.theme.space[2]}px;
  background-color: ${p => p.theme.colors.modes.dark.text};
`;

export const H2 = styled.h2`
  font-size: ${p => p.theme.fontSizes[6]}px;
  line-height: ${p => p.theme.lineHeights.heading};
  font-family: ${p => p.theme.fonts.monospace};
  font-weight: ${p => p.theme.fontWeights.body};
  /* text-shadow: 0 20px 25px #8c928f, 0 40px 60px #8c928f; */
  margin-bottom: ${p => p.theme.space[4]}px;
  border-bottom: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.primary};
`;

export const P = styled.p``;