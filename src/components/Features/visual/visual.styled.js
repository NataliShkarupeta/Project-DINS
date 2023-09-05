import styled from 'styled-components';

export const BackgroundForVisual = styled.div`
  position: relative;
  width: 90%;
  height: 599px;
  background-color: ${p => p.theme.colors.modes.dark.text};
  border-radius: ${p => p.theme.radii.middle};
  padding: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[6]}px;
  box-shadow: 1px 1px 22px 1px rgba(0, 0, 0, 0.5);
`;

export const H3 = styled.h3`
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.body};
  line-height: ${p => p.theme.lineHeights.heading};
  margin-bottom: ${p => p.theme.space[2]}px;
`;
