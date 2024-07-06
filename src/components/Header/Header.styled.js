import styled from 'styled-components';

export const Head = styled.header`
  padding: ${p => p.theme.space[3]}px;
  height: 100px;
  align-items: center;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  border-bottom: ${p => p.theme.borders.normal};
  box-shadow: 0px 8px 21px rgba(61, 29, 29, 0.25);
  
`;

export const WrapSender = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  @media screen and (${p => p.theme.media.m}) {
    align-items: center;
  }
  @media screen and (${p => p.theme.media.l}) {
    /* align-items: normal; */
  }
`;

export const SmallWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  @media screen and (${p => p.theme.media.m}) {
    font-size: ${p => p.theme.fontSizes[0]}px;
  }
  @media screen and (${p => p.theme.media.l}) {
    font-size: ${p => p.theme.fontSizes[1]}px;
  }
  @media screen and (${p => p.theme.media.xl}) {
    font-size: ${p => p.theme.fontSizes[2]}px;
  }
`;
