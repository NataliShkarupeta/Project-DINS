import styled from 'styled-components';
import img from '../../images/astrology/image.png';

export const DescriptionBlok = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: ${p => p.theme.space[3]}px;
`;
export const DescriptionAstr = styled.span`
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.middle};

  @media screen and (${p => p.theme.media.s}) {
    font-size: ${p => p.theme.fontSizes[2]}px;
  }
  @media screen and (${p => p.theme.media.m}) {
    font-size: ${p => p.theme.fontSizes[2]}px;
    line-height: ${p => p.theme.lineHeights.heading};
  }
  @media screen and (${p => p.theme.media.l}) {
    line-height: ${p => p.theme.lineHeights.normal};
    font-size: 18px;
  }
  @media screen and (${p => p.theme.media.xl}) {
    font-size: ${p => p.theme.fontSizes[3]}px;
  }
`;

export const WrapVersion = styled.p`
  padding: ${p => p.theme.space[3]}px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: 300px;
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.middle};
  line-height: ${p => p.theme.lineHeights.normal};
  font-family: ${p => p.theme.fonts.body};
`;

export const Version = styled.div`
  :hover,
  :focus {
    cursor: pointer;
  }
  @media screen and (${p => p.theme.media.m}) {
    padding: 10px;
    font-size: ${p => p.theme.fontSizes[1]}px;
  }
  @media screen and (${p => p.theme.media.l}) {
    padding: ${p => p.theme.space[3]}px;
    font-size: ${p => p.theme.fontSizes[2]}px;
  }
  @media screen and (${p => p.theme.media.xl}) {
    padding: ${p => p.theme.space[3]}px;
    font-size: ${p => p.theme.fontSizes[2]}px;
  }
  @media screen and (${p => p.theme.media.xxl}) {
    line-height: 1.18;
    font-size: ${p => p.theme.fontSizes[3]}px;
  }
`;

export const VersionExpl = styled.p`
  @media screen and (${p => p.theme.media.m}) {
    font-size: ${p => p.theme.fontSizes[0]}px;
  }
  @media screen and (${p => p.theme.media.l}) {
    font-size: ${p => p.theme.fontSizes[1]}px;
  }
  @media screen and (${p => p.theme.media.xl}) {
    font-size: ${p => p.theme.fontSizes[1]}px;
  }
  @media screen and (${p => p.theme.media.xxl}) {
    line-height: 1.18;
    font-size: ${p => p.theme.fontSizes[2]}px;
  }
`;

export const Background = styled.p`
  position: absolute;
  z-index: -1;
  border-color: ${p => p.theme.colors.secondary};
  background-image: url('${img}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: blur(8px);
  width: 100%;
  height: 100%;
`;
export const Content = styled.p`
  position: relative;
  z-index: 10;
  color: ${p => p.theme.colors.therd};
  font-weight: ${p => p.theme.fontWeights.middle};
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const AboutWork = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: ${p => p.theme.space[4]}px;
  @media screen and (${p => p.theme.media.s}) {
    /* display: flex;
    align-items: center; */
    flex-direction: column;
    font-size: ${p => p.theme.fontSizes[2]}px;
    
  }
`;
export const Instruction = styled.ul`
  list-style: inside;
  padding-left: ${p => p.theme.space[4]}px;
  font-weight: ${p => p.theme.fontWeights.middle};
  line-height: ${p => p.theme.lineHeights.normal};
  font-family: ${p => p.theme.fonts.body};

  @media screen and (${p => p.theme.media.m}) {
    padding: ${p => p.theme.space[2]}px;
    font-size: ${p => p.theme.fontSizes[1]}px;
  }
  @media screen and (${p => p.theme.media.l}) {
    font-size: ${p => p.theme.fontSizes[2]}px;
  }
  @media screen and (${p => p.theme.media.xl}) {
    padding: ${p => p.theme.space[3]}px;
    font-size: ${p => p.theme.fontSizes[2]}px;
  }
  @media screen and (${p => p.theme.media.xxl}) {
    line-height: 1.18;
    font-size: ${p => p.theme.fontSizes[3]}px;
  }
`;
export const H3 = styled.h3`
  padding-left: ${p => p.theme.space[3]}px;
  @media screen and (${p => p.theme.media.s}) {
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: ${p => p.theme.fontSizes[2]}px;
    color: purple;
  }
  @media screen and (${p => p.theme.media.m}) {
    font-size: ${p => p.theme.fontSizes[1]}px;
  }
  @media screen and (${p => p.theme.media.l}) {
    font-size: ${p => p.theme.fontSizes[2]}px;
  }
  @media screen and (${p => p.theme.media.xl}) {
    font-size: ${p => p.theme.fontSizes[4]}px;
  }
`;

export const RedBallBefore = styled.div`
  position: relative;
  &:before {
    position: absolute;

    /* content: '🦄'; */
    content: '';

    background-color: red;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-color: ${p => p.theme.colors.muted};
    border-radius: ${p => p.theme.radii.round};

    @media screen and (${p => p.theme.media.s}) {
      width: 12px;
      height: 12px;
    }
    @media screen and (${p => p.theme.media.m}) {
      width: 12px;
      height: 12px;
    }
    @media screen and (${p => p.theme.media.l}) {
      width: 15px;
      height: 15px;
    }
  }
`;

export const Explanation = styled.p`
  padding-left: ${p => p.theme.space[3]}px;
`;

