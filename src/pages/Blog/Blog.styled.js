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
  /* bottom: -10px; */
  display: flex;
  justify-content: center;
  gap: 2px;
  margin-left: 90%;
  margin-right: 16px;
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.buttons.primary.bordCol};
  :hover,
  :focus {
    border-color: ${p => p.theme.colors.muted};
    background-color: ${p => p.theme.buttons.primary.bordCol};
  }
  @media screen and (${p => p.theme.media.s}) {
    background-color: #8a8a8a;
      background-image: radial-gradient(
    circle farthest-corner at 10% 20% ,
    rgba(12, 116, 117, 1) 10%,
    rgba(14, 174, 87, 1) 90%
    
  );
    color: #fff;
    margin-left: 0;
    margin-right: 0;
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

  @media screen and (${p => p.theme.media.s}) {
    margin-bottom: ${p => p.theme.space[3]}px;
    padding-left: ${p => p.theme.space[0]}px;
    padding-right: ${p => p.theme.space[0]}px;
  }
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

  @media screen and (${p => p.theme.media.s}) {
    padding: ${p => p.theme.space[1]}px;
    margin: ${p => p.theme.space[1]}px;
    margin-bottom: ${p => p.theme.space[4]}px;
  }
`;

export const Title = styled.h2`
  font-family: ${p => p.theme.fonts.monospace};
  font-style: italic;
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.therd};

  @media screen and (${p => p.theme.media.s}) {
    font-size: ${p => p.theme.fontSizes[2]}px;
  }
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
  @media screen and (${p => p.theme.media.s}) {
    font-size: ${p => p.theme.fontSizes[1]}px;
    font-weight: ${p => p.theme.fontWeights.body};
    width: 308px;
    line-height: 1.22;
    
  }
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

  background-color: ${p => p.theme.colors.modes.light.background};
  @media screen and (${p => p.theme.media.s}) {
    width: 320px;
    padding: ${p => p.theme.space[0]}px;
    margin-bottom: ${p => p.theme.space[3]}px;
  }
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
  @media screen and (${p => p.theme.media.s}) {
    font-size: ${p => p.theme.fontSizes[2]}px;
    width: 308px;
  }
`;

export const TitlePost = styled.h2`
  /* font-family: ${p => p.theme.fonts.forBlog}; */
  font-style: italic;
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights.heading};
  color: grey;
  color: #585454;
  @media screen and (${p => p.theme.media.s}) {
    font-size: ${p => p.theme.fontSizes[2]}px;
    padding-top: ${p => p.theme.fontSizes[3]}px;
  }
`;


///////////postMobile////////

export const BtbackMobile = styled.button`
  background-color: ${p => p.theme.colors.muted};
  font-weight: ${p => p.theme.fontWeights.body};
  border: 0.05px solid;
  border-radius: 5px;
  border-color: ${p => p.theme.colors.text};
  color: ${p => p.theme.colors.text};
  padding: 3px;
  /* margin-left: 16px; */
  :hover,
  :focus {
    cursor: pointer;

    color: ${p => p.theme.colors.primary};
    border: ${p => p.theme.borders.normal};
    border-color: ${p => p.theme.colors.primary};
  }
  transition: ${p => p.theme.transitions};
`;