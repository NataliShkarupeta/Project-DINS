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
  width: 100%;
  height: 100%;
`;

export const WrapInfo = styled.div`
  /* display: flex;
  justify-content: space-evenly;
  gap: 50px;  */
  @media screen and (${p => p.theme.media.s}) {
    flex-direction: column;
    justify-content: space-between;
    gap: 0px;
    margin-bottom: ${p => p.theme.space[1]}px;
  }
  @media screen and (${p => p.theme.media.m}) {
    display: flex;
    flex-direction: column;
    margin-bottom: ${p => p.theme.space[1]}px;
  }
  @media screen and (${p => p.theme.media.l}) {
    margin-bottom: ${p => p.theme.space[4]}px;
    flex-direction: row;
    justify-content: space-evenly;
  }
  @media screen and (${p => p.theme.media.xl}) {
    margin-bottom: ${p => p.theme.space[4]}px;
    gap: 50px;
  }
`;
export const H2 = styled.h2`
  font-family: ${p => p.theme.fonts.monospace};
  font-style: italic;
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.text};
  padding-left: 5px;
  @media screen and (${p => p.theme.media.s}) {
    margin-top: ${p => p.theme.space[2]}px;
    text-align: center;
  }
`;

export const Span = styled.span`
  display: block;
  margin-bottom: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-style: italic;
  font-weight: ${p => p.theme.fontWeights.body};
  /* height: 300px; */
  overflow-y: scroll;
   padding-left: 5px;
  @media screen and (${p => p.theme.media.s}) {
    margin-bottom: ${p => p.theme.space[0]}px;
    font-size: ${p => p.theme.fontSizes[2]}px;
    line-height: 1.12;
    font-style: italic;
  }
`;

export const WrapTitleAndText = styled.div`
  height: 80%;
  overflow: hidden;
`;

export const WrapInfoFromMe = styled.div`
  @media screen and (${p => p.theme.media.s}) {
    padding-right: ${p => p.theme.space[2]}px;
    font-size: ${p => p.theme.fontSizes[1]}px;
    line-height: 1.12;
    font-style: italic;
  }
  @media screen and (${p => p.theme.media.m}) {
    overflow: hidden;
    text-align: right;
    padding-right: ${p => p.theme.space[4]}px;
    font-family: ${p => p.theme.fonts.monospace};
    font-weight: ${p => p.theme.fontWeights.body};
    line-height: 1.33;
  }
  @media screen and (${p => p.theme.media.l}) {
    padding-right: 0px;
  }
  @media screen and (${p => p.theme.media.xl}) {
    padding-right: ${p => p.theme.space[5]}px;
  }
`;
///////////// imageBlock////////////////////

export const WrapImageAndDateCreate = styled.div`
  position: relative;
  width: 50%;
  margin-bottom: ${p => p.theme.space[4]}px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media screen and (${p => p.theme.media.s}) {
    gap: 10px;
    width: 100%;
    font-size: ${p => p.theme.fontSizes[0]}px;
    margin: 0;
  }
  @media screen and (${p => p.theme.media.m}) {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    font-size: ${p => p.theme.fontSizes[1]}px;
    margin: 0;
  }
  @media screen and (${p => p.theme.media.l}) {
    width: 50%;
    gap: 10px;
    font-size: ${p => p.theme.fontSizes[2]}px;
    margin: 0;
  }
  @media screen and (${p => p.theme.media.xl}) {
    width: 60%;
    margin-bottom: ${p => p.theme.space[4]}px;
  }
`;

export const WrapImage = styled.div`
  @media screen and (${p => p.theme.media.s}) {
    position: relative;
    margin-top: ${p => p.theme.space[3]}px;
    min-width: 300px;
    max-width: 60vw;
    height: 50vh;
  }
  @media screen and (${p => p.theme.media.m}) {
    position: relative;
    width: 450px;
    height: 500px;
  }
  @media screen and (${p => p.theme.media.l}) {
    margin-top: ${p => p.theme.space[3]}px;
    width: 350px;
    height: 450px;
  }
  @media screen and (${p => p.theme.media.xl}) {
    position: relative;
    width: 500px;
    height: 650px;
  }
`;

export const Img = styled.img`
  @media screen and (${p => p.theme.media.s}) {
    position: absolute;
    max-height: 45vh;
    max-width: 250px;
  }
  @media screen and (${p => p.theme.media.m}) {
    position: absolute;
    width: 350px;
  }
  @media screen and (${p => p.theme.media.l}) {
    width: 300px;
  }
  @media screen and (${p => p.theme.media.xl}) {
    width: 400px;
  }
`;

////////////// descriptionBlock//////////

export const WrapDescription = styled.div`
  @media screen and (${p => p.theme.media.s}) {
    padding: ${p => p.theme.space[3]}px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    overflow-y: scroll;
  }
  @media screen and (${p => p.theme.media.m}) {
    padding: ${p => p.theme.space[3]}px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    overflow-y: scroll;
  }
  @media screen and (${p => p.theme.media.l}) {
    width: 45%;
    margin-top: ${p => p.theme.space[3]}px;
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;

///////////////// orderBlock/////////////
export const Text = styled.p`
  width: 50%;
  @media screen and (${p => p.theme.media.s}) {
    width: 100%;
  }
`;

export const WrapOrderBlock = styled.div`
  color: ${p => p.theme.colors.modes.dark.background};

  padding: ${p => p.theme.space[3]}px;
  background-color: rgba(255, 255, 255, 0.7);
  background-color: ${p => p.theme.colors.modes.dark.text};
  @media screen and (${p => p.theme.media.s}) {
    padding: ${p => p.theme.space[2]}px;
    padding: 0;
  }
`;

export const H3 = styled.h3`
  text-align: center;
  font-family: ${p => p.theme.fonts.forName};
  font-size: ${p => p.theme.fontSizes[2]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  @media screen and (${p => p.theme.media.s}) {
    padding-top: ${p => p.theme.space[3]}px;
    font-size: ${p => p.theme.fontSizes[1]}px;
  }
`;
export const Desctiption = styled.div`
  margin-bottom: ${p => p.theme.space[3]}px;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes[2]}px;
  font-weight: ${p => p.theme.fontWeights.body};
  @media screen and (${p => p.theme.media.s}) {
    padding: ${p => p.theme.space[3]}px;
    margin-bottom: ${p => p.theme.space[2]}px;
    font-size: ${p => p.theme.fontSizes[1]}px;
    line-height: 1.12;
  }
  @media screen and (${p => p.theme.media.m}) {
    padding: ${p => p.theme.space[0]}px;
  }
  @media screen and (${p => p.theme.media.l}) {
    padding: ${p => p.theme.space[4]}px;
  }
  @media screen and (${p => p.theme.media.xl}) {
  }
`;

export const Prepayment = styled.span`
  margin-bottom: ${p => p.theme.space[2]}px;
  margin-top: ${p => p.theme.space[2]}px;
  margin-left: ${p => p.theme.space[2]}px;
  display: flex;
  flex-direction: column;

  text-decoration: underline;
  @media screen and (${p => p.theme.media.s}) {
    font-size: ${p => p.theme.fontSizes[1]}px;
    line-height: 1.12;
  }
`;

export const Price = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  @media screen and (${p => p.theme.media.s}) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
    font-size: ${p => p.theme.fontSizes[1]}px;
    line-height: 1.12;
  }
  @media screen and (${p => p.theme.media.m}) {
    font-size: ${p => p.theme.fontSizes[2]}px;
  }
  @media screen and (${p => p.theme.media.l}) {
    font-size: ${p => p.theme.fontSizes[2]}px;
  }
  @media screen and (${p => p.theme.media.xl}) {
  }
`;

export const PricePicture = styled.div`
  cursor: pointer;
  animation: pulsing 5s infinite;

  @keyframes pulsing {
    0% {
      transform: scale(0.8, 0.8);
    }
    50% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(0.8, 0.8);
    }
  }
  @media screen and (${p => p.theme.media.s}) {
    font-size: ${p => p.theme.fontSizes[1]}px;
    line-height: 1.12;
  }
`;

export const Form = styled.form`
  padding: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.modes.dark.background};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  @media screen and (${p => p.theme.media.s}) {
    font-size: ${p => p.theme.fontSizes[2]}px;
    line-height: 1.12;
    gap: 30px;
  }
`;

export const WrapInputFields = styled.div`
  @media screen and (${p => p.theme.media.s}) {
    font-size: ${p => p.theme.fontSizes[2]}px;
    line-height: 1.12;
    display: block;
  }
  @media screen and (${p => p.theme.media.l}) {
    display: flex;
    gap: 30px;
  }
  @media screen and (${p => p.theme.media.xl}) {
    gap: 120px;
  }
  @media screen and (${p => p.theme.media.xxl}) {
  }
`;

export const WrapIfOrder = styled.div`
  @media screen and (${p => p.theme.media.s}) {
    width: 100%;
    margin-bottom: ${p => p.theme.space[4]}px;
  }
  @media screen and (${p => p.theme.media.m}) {
    width: 100%;
  }
  @media screen and (${p => p.theme.media.xl}) {
    width: 50%;
  }
`;

export const Label = styled.label`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes[2]}px;
  font-weight: ${p => p.theme.fontWeights.body};

  @media screen and (${p => p.theme.media.s}) {
    font-size: ${p => p.theme.fontSizes[1]}px;
    line-height: 1.12;
    padding: 0;
  }
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
  @media screen and (${p => p.theme.media.s}) {
    font-size: 12px;
    width: 90vw;
    height: 50px;
  }
  @media screen and (${p => p.theme.media.l}) {
    width: 40vw;
  }
  @media screen and (${p => p.theme.media.xl}) {
  }
`;

export const WrapTextArea = styled.div`
  @media screen and (${p => p.theme.media.m}) {
    margin-top: 30px;
    display: flex;
    justify-content: center;
  }
  @media screen and (${p => p.theme.media.l}) {
    margin: 0;
    display: block;
  }

  display: flex;
  justify-content: center;
`;
export const WrapIfBuy = styled.div`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes[2]}px;
  font-weight: ${p => p.theme.fontWeights.body};
  @media screen and (${p => p.theme.media.s}) {
    padding: ${p => p.theme.space[2]}px;
    font-size: ${p => p.theme.fontSizes[1]}px;
    width: 100%;
    margin-bottom: ${p => p.theme.space[4]}px;
    line-height: 1.12;
  }
  @media screen and (${p => p.theme.media.m}) {
    width: 100%;
  }
  @media screen and (${p => p.theme.media.xl}) {
    width: 50%;
  }
`;

export const H4 = styled.h4`
  font-family: ${p => p.theme.fonts.forName};
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.middleOne};
  @media screen and (${p => p.theme.media.s}) {
    font-size: ${p => p.theme.fontSizes[2]}px;
  }
`;

export const Size = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-left: ${p => p.theme.space[2]}px;
  margin-right: ${p => p.theme.space[2]}px;
`;

export const WrapSizes = styled.div`
  display: flex;
  gap: 5px;

  @media screen and (${p => p.theme.media.m}) {
    font-size: 12px;
  }
  @media screen and (${p => p.theme.media.l}) {
    font-size: 14px;
  }
`;
export const TextExplanation = styled.span`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes[1]}px;
  font-weight: ${p => p.theme.fontWeights.body};
`;

export const SetAdress = styled.div`
  @media screen and (${p => p.theme.media.m}) {
    margin-top: ${p => p.theme.space[4]}px;
  }
  @media screen and (${p => p.theme.media.l}) {
    margin-top: 0px;
    width: 50%;
  }
  @media screen and (${p => p.theme.media.xl}) {
  }
  @media screen and (${p => p.theme.media.xxl}) {
  }
`;
