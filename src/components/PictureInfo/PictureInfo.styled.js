import styled from 'styled-components';
export const WrapDots = styled.div`
  transition: transform 0.8 ease-in-out;
  padding: ${p => p.theme.space[5]}px;

  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

export const Wrap = styled.div`
  /* background-color: ${p => p.theme.colors.modes.light.background}; */
  width: 100%;
  height: 100%;
`;

export const WrapInfo = styled.div`
  margin-bottom: ${p => p.theme.space[4]}px;
  display: flex;
  justify-content: space-evenly;
  gap: 50px;
  /* box-shadow: 0 0 0px rgba(0, 0, 0, 0.1), 0 3px 7px rgba(0, 0, 0, 0.3),
    inset 0 1px rgba(255, 255, 255, 1), inset 0 -3px 2px rgba(0, 0, 0, 0); */
`;
export const H2 = styled.h2`
  font-family: ${p => p.theme.fonts.monospace};
  font-style: italic;
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.text};
`;

export const Span = styled.span`
  display: block;
  margin-bottom: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-style: italic;
  font-weight: ${p => p.theme.fontWeights.body}; 
`;

export const WrapInfoFromMe = styled.div`
  /* width: 45%; */
  /* height: 350px; */
  overflow: hidden;
  text-align: right;
  color: ${p => p.theme.colors.therd};
  padding-right: ${p => p.theme.space[5]}px;


  font-family: ${p => p.theme.fonts.monospace};

  font-weight: ${p => p.theme.fontWeights.body};
  line-height: 1.33;
`;
///////////// imageBlock////////////////////

export const WrapImageAndDateCreate = styled.div`
  width: 50%;
  margin-bottom: ${p => p.theme.space[4]}px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const WrapImage = styled.div`
  position: relative;
  margin-top: ${p => p.theme.space[4]}px;
  /* width: 450px; */
  width: 70%;
  height: 600px;
`;

export const Img = styled.img`
  position: absolute;
  width: 450px;
`;

////////////// descriptionBlock//////////

export const WrapDescription = styled.div`
  padding: ${p => p.theme.space[3]}px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 45%;
  margin-top: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
  overflow-y: scroll;
   
  
`;

///////////////// orderBlock/////////////
export const Text = styled.p`
  width: 50%;
`;

export const WrapOrderBlock = styled.div`
  color: ${p => p.theme.colors.modes.dark.background};

  padding: ${p => p.theme.space[3]}px;
  background-color: rgba(255, 255, 255, 0.7);
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
  padding: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.modes.dark.background};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

export const WrapInputFields = styled.div`
  /* padding: ${p => p.theme.space[4]}px; */
  /* margin-top: ${p => p.theme.space[4]}px; */
  /* padding: 0px; */
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

  /* display: flex;
  flex-direction: row; */
`;

export const Select = styled.select`
  background-color: rgba(255, 255, 255, 0.7);
  outline: none;
  cursor: pointer;
  width: 100px;
  /* margin-left: ${p => p.theme.space[4]}px; */
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes[2]}px;
  font-weight: ${p => p.theme.fontWeights.body};
  :hover {
    border-color: ${p => p.theme.colors.primary};
    border-radius: ${p => p.theme.radii.normal};
  }
`;

export const TextArea = styled.textarea`
  background-color: rgba(255, 255, 255, 0.7);
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
    border-radius: ${p => p.theme.radii.normal};
  }
`;
export const WrapIfBuy = styled.div`
  width: 50%;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes[2]}px;
  font-weight: ${p => p.theme.fontWeights.body};
`;

export const H4 = styled.h4`
  font-family: ${p => p.theme.fonts.forName};
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.middleOne};
`;

export const Size = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-left: ${p => p.theme.space[2]}px;
  margin-right: ${p => p.theme.space[2]}px;
`;

export const WrapSizes = styled.div`
  display: flex;
  gap: 5px;
`;
export const TextExplanation = styled.span`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes[1]}px;
  font-weight: ${p => p.theme.fontWeights.body};
`;
