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
  /* background: linear-gradient(to bottom, #fff 28%, #fff4e4cc 100%); */
  /* background-color: #e32f21; */
`;

export const WrapSender = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const SmallWrap = styled.div`
  display: flex;

  align-items: center;
  gap: 5px;
`;


