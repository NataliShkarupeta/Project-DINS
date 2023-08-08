import styled from 'styled-components';

export const H3 = styled.h3`
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.heading};
  font-family: ${p => p.theme.fonts.monospace};
`;

export const OverlayText = styled.p`
  padding: 13px 15px;
  margin: 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.4;
  letter-spacing: 0.03em;
  color: #fff;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  background-color: rgba(112, 38, 115, 0.9);
  transform: translatey(100%);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
   Li:hover & {
    transform: translatey(0);
  }
`;

export const InfoData = styled.div`
  /* width: 768px; */

  padding: 20px 24px;
  /* border: 1px solid #eee; */

  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.fourth};
  border-top: none;

`;

export const CardWrap = styled.div`
  width: fit-content;
  /* height: 300px; */
  overflow: hidden;
  position: relative;
`;

export const Li = styled.li`
  width: 370px;
  /* height: 350px; */
  cursor: pointer;
  overflow: hidden;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

`;


export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: space-around;
`;

export const WrapText = styled.div`
  margin-bottom: ${p => p.theme.space[5]}px;
`;

export const Propose = styled.p`
  margin-bottom: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights.body};
  line-height: ${p => p.theme.lineHeights.normal};
  text-shadow: 0 11px 9px #8c928f, 0 80px 60px #8c928f;
  text-decoration: overline;
  display: flex;
  align-items: center;
`;

export const WrapPhotos = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Title = styled.h2`
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.heading};
  font-family: ${p => p.theme.fonts.monospace};
  text-decoration: overline;
  text-align: center;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Text = styled.span`
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights.body};
  line-height: ${p => p.theme.lineHeights.heading};
  font-family: ${p => p.theme.fonts.monospace};
  margin-left: ${p => p.theme.space[3]}px;
`;
