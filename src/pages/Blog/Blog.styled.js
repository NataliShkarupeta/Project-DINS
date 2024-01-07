import styled from 'styled-components';
import img from '../../images/Depositphotos_211953146_XL (1).jpg';

export const WrapForTooltip = styled.div`
  margin: 0;
  padding: 0;
  /* background-color: ${p => p.theme.colors.muted}; */
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.muted};
  border-radius: ${p => p.theme.radii.normal};
`;

export const BlockButton = styled.div`
  /* margin-left: auto;
  margin-right: auto;
  position: sticky; */
  bottom: -10px;
  display: flex;
  justify-content: center;
  gap: 2px;
  margin-left: 90%;
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.buttons.primary.bordCol};
  :hover,
  :focus {
    border-color: ${p => p.theme.colors.muted};
    background-color: ${p => p.theme.buttons.primary.bordCol};
  }
`;

export const OnceButton = styled.span`
  font-size: ${p => p.theme.fontSizes[0]}px;
`;

export const WrapTitleAndDate = styled.div`
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  display: flex;
  justify-content: space-between;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Section = styled.section`
  text-align: center;
  /* padding: ${p => p.theme.space[4]}px; */

  /* background-image:  */
  /* linear-gradient(
      to bottom,
      rgba(255, 255, 0, 0.37),
      rgba(83, 177, 226, 1)
    ), */
  /* linear-gradient(to bottom, rgba(47, 48, 58,0.2), rgba(47, 48, 58,0.2)), */
  /* url('${img}'); */
  /* background-size: cover; */
`;

export const Li = styled.li`
  /* position: relative; */
  padding: ${p => p.theme.space[3]}px;
  margin: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.7);
  background-size: 100%;
`;

export const Title = styled.h2`
  font-family: ${p => p.theme.fonts.monospace};
  font-style: italic;
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.therd};
`;

export const Date = styled.span`
  color: ${p => p.theme.colors.therd};
  font-size: ${p => p.theme.fontSizes[0]}px;
`;

export const Text = styled.p`
  margin-left: auto;
  margin-right: auto;
  width: 800px;
  height: 400px;
  color: ${p => p.theme.colors.therd};

  font-family: ${p => p.theme.fonts.monospace};
  font-style: italic;
  font-size: 20px;
  font-weight: ${p => p.theme.fontWeights.middleOne};
  line-height: 1.33;
`;

////////////////////postInfo//////////////////////

export const WrapForLine = styled.div`
  /* margin-left: 50px;

  border-left: 3px solid purple; */
`;

export const Wrap = styled.div`
  width: 1000px;
  padding: ${p => p.theme.space[3]}px;
  margin: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  background-color: blue;

  background-color: ${p => p.theme.colors.modes.light.background};
`;

export const TextPost = styled.p`
  margin-left: auto;
  margin-right: auto;
  width: 800px;
  /* font-family: ${p => p.theme.fonts.forBlog}; */
  font-style: italic;
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.body};
  line-height: 1.33;
  color: grey;
`;

export const TitlePost = styled.h2`
  /* font-family: ${p => p.theme.fonts.forBlog}; */
  font-style: italic;
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights.heading};
  color: grey;
`;
