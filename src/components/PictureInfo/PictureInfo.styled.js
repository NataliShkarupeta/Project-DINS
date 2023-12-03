import styled from 'styled-components';

export const Wrap = styled.div`
  padding: ${p => p.theme.space[5]}px;
  /* background-color: ${p => p.theme.colors.modes.light.background}; */
  width: 100%;
  height: 100%;
`;

export const WrapInfo=styled.div`
display: flex;
gap: 50px;
`
export const H2 = styled.h2`
  font-family: ${p => p.theme.fonts.monospace};
  font-style: italic;
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.therd};
  /* margin-bottom: ${p => p.theme.space[6]}px; */
`;

export const Span = styled.span`
display: block;
  margin-bottom: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.therd};

  font-family: ${p => p.theme.fonts.forBlog};
  font-style: italic;
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.middle};
  /* line-height: 1.33; */
`;

export const WrapInfoFromMe = styled.div`
  width: 45%;
  height:350px ;
  overflow: hidden;
  text-align: right;
  color: ${p => p.theme.colors.therd};

  font-family: ${p => p.theme.fonts.monospace};
  
  font-weight: ${p => p.theme.fontWeights.body};
  line-height: 1.33;
`;
///////////// imageBlock////////////////////

export const WrapImageAndDateCreate = styled.div`
  margin-bottom: ${p => p.theme.space[4]}px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const WrapImage = styled.div`
  width: 45%;
 
`;

////////////// descriptionBlock//////////

export const WrapDescription= styled.div`
width: 45%;
overflow-y: scroll;
`


///////////////// orderBlock/////////////

export const WrapOrderBlock= styled.div`

`