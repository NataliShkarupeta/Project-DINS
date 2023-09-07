import styled from "styled-components";

export const Section = styled.section`
   padding-left: ${p => p.theme.space[4]}px; 
   padding-right: ${p => p.theme.space[4]}px; 
`;

export const WrapForMargin = styled.div`
  /* margin-top: ${p => p.theme.space[4]}px; */
`; 

export const P = styled.p`
  text-indent: 2em;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.body};
  line-height: ${p => p.theme.lineHeights.normal};
`;

export const Ul = styled.ul`
  margin-top: ${p => p.theme.space[4]}px;
  margin-left: 30%;
  list-style-type: square;
`;

export const Span = styled.span`
  margin-left: 90%;
`;

export const WrapSen = styled.q`
  /* margin-left: 10%; */
`;