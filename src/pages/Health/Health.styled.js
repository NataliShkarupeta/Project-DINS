import styled from 'styled-components';
import img from '../../images/healthy/backgroundHerbs (1).jpg'

 /* padding-left: ${p => p.theme.space[4]}px; */
  /* padding-right: ${p => p.theme.space[4]}px; */
  /* margin-bottom: ${p => p.theme.space[5]}px; */

export const Span = styled.span`
  text-align: center;
  display: block;
  font-size: ${p => p.theme.fontSizes[5]}px;
  font-weight: ${p => p.theme.fontWeights.body};
  line-height: ${p => p.theme.lineHeights.heading};
  font-family: ${p => p.theme.fonts.monospace};
  margin-bottom: ${p => p.theme.space[3]}px;
`;
export const InRightBlock = styled.div`
  /* position: sticky; */
  position: relative;
  aspect-ratio: square;
  background-color: ${p => p.theme.colors.secondary};
  width: 450px;
  height: 450px;
  border-radius: ${p => p.theme.radii.normal};
`;
export const NameDisease = styled.p`
  padding: ${p => p.theme.space[5]}px;
  font-size: ${p => p.theme.fontSizes[5]}px;
  font-weight: ${p => p.theme.fontWeights.body};
  line-height: ${p => p.theme.lineHeights.heading};
  font-family: ${p => p.theme.fonts.monospace};
`;

export const TwoColumns = styled.div`
  width: 800px;
  margin-left: auto;
  margin-right: auto;
  background-image: linear-gradient(
    to bottom,
    rgba(47, 48, 58, 0.97),
    rgba(47, 48, 58, 0.2)

  )
  /* url(${img}) */
  ;

  display: flex;
  align-items: start;
  gap: 20px;
`;

export const LeftColumn = styled.div`
  width: 50%;
  padding: 30vh;
  /* border: ${p => p.theme.borders.normal};
  border-right: ${p => p.theme.colors.primary}; */
`;
export const RightColumn = styled.div`
  /* width: 50%; */
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const LinkForSite = styled.span`
  text-decoration: underline;
  font-size: ${p => p.theme.fontSizes[1]}px;
  font-weight: ${p => p.theme.fontWeights.body};
  line-height: ${p => p.theme.lineHeights.heading};
`;

export const H3 = styled.h3`
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.heading};
  font-family: ${p => p.theme.fonts.monospace};
  margin-bottom: ${p => p.theme.space[2]}px;
`;

export const OverlayText = styled.p`
  padding: 23px 15px;
  margin: 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.4;
  letter-spacing: 0.03em;
  color: #fff;
  overflow-y: scroll;
  height: 260px;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  background-color: rgba(112, 38, 115, 0.9);
  /* overflow-y: scroll; */
  transform: translatey(100%);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  Li:hover & {
    transform: translatey(0);
  }
`;

export const InfoData = styled.div`
  height: 130px;
  padding: 10px 24px;
  /* border: 1px solid #eee; */

  /* border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.fourth};
  border-top: none; */
`;

export const CardWrap = styled.div`
  width: fit-content;
  height: 260px;
  overflow: hidden;
  position: relative;
`;

export const Li = styled.li`
  width: 370px;
  height: 390px;
  cursor: pointer;
  overflow: hidden;
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.fourth};
  border-top: none;
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
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.body};
  line-height: ${p => p.theme.lineHeights.heading};
  font-family: ${p => p.theme.fonts.body};
  margin-left: ${p => p.theme.space[3]}px;
`;
