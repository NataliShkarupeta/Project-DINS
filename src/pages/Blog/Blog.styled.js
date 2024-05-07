import styled from 'styled-components';

export const WrapForTooltip = styled.div`
  margin: 0;
  padding: 0;
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.muted};
  border-radius: ${p => p.theme.radii.normal};
`;

export const BlockButton = styled.div`
  
  display: flex;
  justify-content: center;
  gap: 2px;

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
      circle farthest-corner at 10% 20%,
      rgba(12, 116, 117, 1) 10%,
      rgba(14, 174, 87, 1) 90%
    );
    color: #fff;
    margin-left: 0;
    margin-right: 0;
  }
  @media screen and (${p => p.theme.media.m}) {
    margin-left: 80%;
  }
 
  @media screen and (${p => p.theme.media.xl}) {
    margin-left: 85%;
  }
  @media screen and (${p => p.theme.media.xxl}) {
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
  @media screen and (${p => p.theme.media.m}) {
  }
  @media screen and (${p => p.theme.media.l}) {
  }
  @media screen and (${p => p.theme.media.xl}) {
  }
  @media screen and (${p => p.theme.media.xxl}) {
  }
`;

export const Section = styled.section`
  text-align: center;

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
  @media screen and (${p => p.theme.media.m}) {
  }
  @media screen and (${p => p.theme.media.l}) {
  }
  @media screen and (${p => p.theme.media.xl}) {
  }
  @media screen and (${p => p.theme.media.xxl}) {
    
  }
`;

export const Title = styled.h2`
  font-family: ${p => p.theme.fonts.monospace};
  font-style: italic;

  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.therd};

  @media screen and (${p => p.theme.media.s}) {
    font-size: ${p => p.theme.fontSizes[2]}px;
  }
  @media screen and (${p => p.theme.media.m}) {
    font-size: ${p => p.theme.fontSizes[2]}px;
  }
  @media screen and (${p => p.theme.media.xl}) {
    font-size: ${p => p.theme.fontSizes[3]}px;
  }
`;

export const Date = styled.span`
  color: ${p => p.theme.colors.therd};
  font-size: ${p => p.theme.fontSizes[0]}px;
`;

export const Text = styled.p`
  margin-left: auto;
  margin-right: auto;
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
  @media screen and (${p => p.theme.media.m}) {
    font-size: ${p => p.theme.fontSizes[2]}px;
    width: 80vw;
  }

  @media screen and (${p => p.theme.media.xl}) {
    font-size: ${p => p.theme.fontSizes[3]}px;
    width: 800px;
  }
`;

////////////////////postInfo//////////////////////

export const WrapForLine = styled.div`
`;

export const Wrap = styled.div`
  width: 85vw;
  padding: ${p => p.theme.space[3]}px;
  margin: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  background-color: ${p => p.theme.colors.modes.light.background};
  @media screen and (${p => p.theme.media.s}) {
    width: 90vw;
    padding: ${p => p.theme.space[0]}px;
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;

export const TextPost = styled.p`
  margin-left: auto;
  margin-right: auto;
  width: 80vw;
  /* font-family: ${p => p.theme.fonts.forBlog}; */
  font-style: italic;
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.body};
  line-height: 1.33;
  color: grey;
  @media screen and (${p => p.theme.media.s}) {
    font-size: ${p => p.theme.fontSizes[2]}px;
  }
  @media screen and (${p => p.theme.media.m}) {
    font-size: ${p => p.theme.fontSizes[2]}px;
  }
  @media screen and (${p => p.theme.media.l}) {
    font-size: ${p => p.theme.fontSizes[3]}px;
  }
 
`;

export const TitlePost = styled.h2`
  /* font-family: ${p => p.theme.fonts.forBlog}; */
  font-style: italic;
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights.heading};
  color: grey;
  color: ${p => p.theme.colors.forBut};
  @media screen and (${p => p.theme.media.s}) {
    font-size: ${p => p.theme.fontSizes[2]}px;
    padding-top: ${p => p.theme.fontSizes[3]}px;
  }
  @media screen and (${p => p.theme.media.m}) {
    font-size: ${p => p.theme.fontSizes[2]}px;
    margin-bottom: ${p => p.theme.fontSizes[2]}px;
  }
  @media screen and (${p => p.theme.media.l}) {
    font-size: ${p => p.theme.fontSizes[3]}px;
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