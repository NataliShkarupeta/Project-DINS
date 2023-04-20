import styled from 'styled-components';

export const WrapSections = styled.div`
  display: flex;
`;

export const SectionMain = styled.section`
  width: 75%;
  border-right: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.primary};
  text-align: center;
  padding: ${p => p.theme.space[2]}px;
`;

export const SectionSecond = styled.section`
  width: 25%;
  text-align: center;
  padding: ${p => p.theme.space[2]}px;
  background-color:${p=>p.theme.colors.modes.dark.text};
  
`;

export const H2 = styled.h2`
  font-size: ${p => p.theme.fontSizes[6]}px;
  line-height: ${p => p.theme.lineHeights.heading};
`;
