import styled from 'styled-components';

export const BlockUnderLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const WrapMoonAndSun = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 5px;
`;

export const WrapButton = styled.div`
  margin-top: 5px;
`;

export const ButtonTranslate = styled.button`
  :hover,
  :focus {
    cursor: pointer;
    color: ${p => p.theme.colors.primary};
    background-color: ${p => p.theme.colors.muted};
    border-color: ${p => p.theme.colors.primary};
    border-radius: ${p => p.theme.radii.normal};
  }
  transition: ${p => p.theme.transitions};
`;

export const Background = styled.div`
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.background};
`;

export const WrapMain = styled.main`
  /* flex-grow: 1; */
  padding: 20px 0 0;

  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
`;
