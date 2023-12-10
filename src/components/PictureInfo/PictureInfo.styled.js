import styled from 'styled-components';

export const Wrap = styled.div`
  /* background-color: ${p => p.theme.colors.modes.light.background}; */
  width: 100%;
  height: 100%;
`;

export const WrapInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 50px;
`;
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
  height: 350px;
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

  margin-top: ${p => p.theme.space[4]}px;
  /* width: 600px; */

`;

////////////// descriptionBlock//////////

export const WrapDescription = styled.div`
  width: 45%;
  margin-top: ${p => p.theme.space[3]}px;
  overflow-y: scroll;
`;

///////////////// orderBlock/////////////

export const WrapOrderBlock = styled.div`
  color: ${p => p.theme.colors.modes.dark.background};
  padding: ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.modes.dark.text};
`;

export const H3 = styled.h3`
  /* margin-bottom: ${p => p.theme.space[3]}px; */
  text-align: center;
  font-family: ${p => p.theme.fonts.forName};
  /* font-style: italic; */
  font-size: ${p => p.theme.fontSizes[2]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
`;
export const Desctiption = styled.div`
  padding: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes[2]}px;
  font-weight: ${p => p.theme.fontWeights.body};
`;

export const Prepayment = styled.span`
  margin-bottom: ${p => p.theme.space[2]}px;
  margin-top: ${p => p.theme.space[2]}px;
  margin-left: ${p => p.theme.space[2]}px;
  display: flex;
  flex-direction: column;

  text-decoration: underline;
`;

export const Price = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;

export const PricePicture = styled.p`
  cursor: pointer;
  :hover,
  :focus {
    scale: 1.1;
  }
  transition: ${p => p.theme.transitions};
`;

export const Form = styled.form`
  color: ${p => p.theme.colors.modes.dark.background};
  margin-top: ${p => p.theme.space[4]}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

export const WrapInputFields = styled.div`
  padding: 0px;
  display: flex;

  gap: 120px;
  /* justify-content: space-between; */
`;

export const Label = styled.label`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes[2]}px;
  font-weight: ${p => p.theme.fontWeights.body};
`;

export const LableText = styled.span`
  margin-right: ${p => p.theme.space[3]}px;

`;

export const Select = styled.select`
  outline: none;
  cursor: pointer;
  width: 100px;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes[2]}px;
  font-weight: ${p => p.theme.fontWeights.body};
  :hover {
    border-color: ${p => p.theme.colors.primary};
    border-radius: ${p => p.theme.radii.normal};
    
  }
`;

export const TextArea = styled.textarea`
  outline: none;
  resize: none;
  cursor: pointer;
  width: 500px;
  height: 60px;
  padding: ${p => p.theme.space[1]}px;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes[2]}px;
  font-weight: ${p => p.theme.fontWeights.body};
  :hover,
  :active {
    border-color: ${p => p.theme.colors.primary};
    border-radius:${p => p.theme.radii.normal};
  }
`;