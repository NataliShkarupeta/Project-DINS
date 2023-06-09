import styled from 'styled-components';
import img from '../../images/Depositphotos_211953146_XL (1).jpg';

export const BlockButton = styled.div`
  position: absolute;
  top: 465px;
  right: 2%;
  display: flex;
  gap: 2px;
`;

export const OnceButton = styled.span`
  font-size: ${p => p.theme.fontSizes[0]}px;
`;

export const WrapTitleAndDate = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Li = styled.li`
  position: relative;
  padding: ${p => p.theme.space[3]}px;
  margin: ${p => p.theme.space[3]}px;

  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.muted};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: 0 0 0px rgba(0, 0, 0, 0.1), 0 3px 7px rgba(0, 0, 0, 0.3),
    inset 0 1px rgba(255, 255, 255, 1), inset 0 -3px 2px rgba(0, 0, 0, 0);
  height: ${p => p.theme.sizes[8]}px;
  overflow-y: scroll;
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 0, 0.67),
      rgba(83, 177, 226, 1)
    ),
    url('${img}');
  background-size: cover;
`;

export const Title = styled.h2`
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Date = styled.span`
  font-size: ${p => p.theme.fontSizes[0]}px;
`;

export const Text = styled.span`
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.body};
`;
