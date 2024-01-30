import styled from "styled-components";

export const Section = styled.section`
  @media screen and (${p => p.theme.media.m}) {
    padding-left: ${p => p.theme.space[3]}px;
    padding-right: ${p => p.theme.space[3]}px;
  }
  @media screen and (${p => p.theme.media.xl}) {
    padding-left: ${p => p.theme.space[4]}px;
    padding-right: ${p => p.theme.space[4]}px;
  }
`;

export const WrapForMargin = styled.div`
  /* margin-top: ${p => p.theme.space[4]}px; */
`; 

export const P = styled.p`
  text-indent: 2em;
  font-family: ${p => p.theme.fonts.body};

  font-weight: ${p => p.theme.fontWeights.body};
  line-height: ${p => p.theme.lineHeights.normal};
  @media screen and (${p => p.theme.media.m}) {
    font-size: ${p => p.theme.fontSizes[2]}px;
  }
  @media screen and (${p => p.theme.media.xl}) {
    font-size: ${p => p.theme.fontSizes[3]}px;
  }
`;

export const Ul = styled.ul`
  margin-top: ${p => p.theme.space[4]}px;
  margin-left: 30%;
  list-style-type: square;
`;

export const Span = styled.span`
  
  @media screen and (${p => p.theme.media.m}) {
    margin-left: 75%;
  }
  @media screen and (${p => p.theme.media.xl}) {
    margin-left: 85%;
  }
  @media screen and (${p => p.theme.media.xxl}) {
    margin-left: 90%;
  }
`;

export const WrapSen = styled.q`
  /* margin-left: 10%; */
`;