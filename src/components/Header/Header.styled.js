import styled from 'styled-components';

export const Head = styled.header`
  padding: ${p => p.theme.space[2]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  border-bottom: ${p => p.theme.borders.normal};
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

export const ButtonEmail = styled.button`
  background-color: ${p => p.theme.colors.secondary};
  border-color: ${p => p.theme.colors.muted};
  border-radius: ${p => p.theme.radii.normal};
  :hover,
  :focus {
    color: ${p => p.theme.colors.primary};
    background-color: ${p => p.theme.colors.muted};
    border-color: ${p => p.theme.colors.primary};
  }
  transition: ${p => p.theme.transitions};
`;
