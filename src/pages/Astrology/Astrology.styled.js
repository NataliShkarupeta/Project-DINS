import img from '../../images/astrology/image.png';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

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
    font-size: 18px;
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
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
  }
`;
export const Content = styled.p`
  position: relative;
  z-index: 1;
  color: ${p => p.theme.colors.therd};
  font-weight: ${p => p.theme.fontWeights.middle};
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const AboutWork = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: ${p => p.theme.space[4]}px;
  @media screen and (${p => p.theme.media.s}) {
    flex-direction: column;
    font-size: ${p => p.theme.fontSizes[2]}px;
  }
  @media screen and (${p => p.theme.media.m}) {
    /* padding: ${p => p.theme.space[2]}px; */
    font-size: ${p => p.theme.fontSizes[1]}px;
  }
  @media screen and (${p => p.theme.media.l}) {
    font-size: ${p => p.theme.fontSizes[2]}px;
  }
  @media screen and (${p => p.theme.media.xl}) {
    /* padding: ${p => p.theme.space[3]}px; */
    font-size: ${p => p.theme.fontSizes[2]}px;
  }
  @media screen and (${p => p.theme.media.xxl}) {
    line-height: 1.18;
    font-size: ${p => p.theme.fontSizes[3]}px;
  }
`;
export const Instruction = styled.ul`
  list-style: inside;
  margin: 8px 16px;
  font-weight: ${p => p.theme.fontWeights.middle};
  line-height: ${p => p.theme.lineHeights.normal};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes[1]}px;

  @media screen and (${p => p.theme.media.m}) {
    padding: 8px 16px;
    font-size: ${p => p.theme.fontSizes[1]}px;
  }
  @media screen and (${p => p.theme.media.l}) {
    font-size: 18px;
    padding: 8px 16px;
  }
  @media screen and (${p => p.theme.media.xl}) {
    padding: ${p => p.theme.space[3]}px;
    font-size: 20px;
  }
  @media screen and (${p => p.theme.media.xxl}) {
    line-height: 1.18;
    font-size: ${p => p.theme.fontSizes[3]}px;
  }
`;

export const Explanation = styled.p`
  padding: 8px 16px;
  font-size: ${p => p.theme.fontSizes[1]}px;
  @media screen and (${p => p.theme.media.l}) {
    font-size: ${p => p.theme.fontSizes[2]}px;
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
    font-size: ${p => p.theme.fontSizes[2]}px;
  }
  @media screen and (${p => p.theme.media.l}) {
    font-size: ${p => p.theme.fontSizes[3]}px;
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

export const QuestionsBlock = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;

  font-family: ${p => p.theme.fonts.body};
  @media screen and (${p => p.theme.media.s}) {
    padding: 0px 0 20px 20px;
    gap: 10px;
  }
  @media screen and (${p => p.theme.media.m}) {
    padding: 0px 0 20px 20px;
    gap: 10px;
  }
  @media screen and (max-width: 720px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const When = styled.p`
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.middle};

  @media screen and (${p => p.theme.media.s}) {
    font-size: ${p => p.theme.fontSizes[1]}px;
    text-align: center;
  }
  @media screen and (${p => p.theme.media.m}) {
    margin: 0px auto;
    font-size: ${p => p.theme.fontSizes[2]}px;
    line-height: ${p => p.theme.lineHeights.heading};
  }
  @media screen and (${p => p.theme.media.l}) {
    padding-top: 20px;
    line-height: ${p => p.theme.lineHeights.normal};
    font-size: ${p => p.theme.fontSizes[2]}px;
    width: 40%;
    text-align: right;
  }
  @media screen and (${p => p.theme.media.xl}) {
    font-size: ${p => p.theme.fontSizes[3]}px;
    width: auto;
  }
`;

export const ListWrapper = styled.div`
  @media screen and (${p => p.theme.media.l}) {
    margin: 20px auto;
    max-width: 700px;
  }
`;

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
  50% {
    box-shadow: 0 0 10px ${p => p.theme.colors.primary};
  }
  100% {
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`;

export const TelegramButton = styled(motion.a)`
  font-family: ${p => p.theme.fonts.nameBtwBt};
  color: ${p => p.theme.colors.therd};
  font-style: italic;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background-color: ${p => p.theme.colors.colForBg};
  font-weight: ${p => p.theme.fontWeights.body};
  border: ${p => p.theme.borders.normal};
  border-radius: 8px;
  border-color: ${p => p.theme.colors.forBut};
  padding: 8px 14px;

  font-size: 18px;
  transition: all 0.3s ease;
  animation: ${pulse} 3s infinite;

  &:hover,
  &:focus {
    cursor: pointer;
    color: ${p => p.theme.colors.primary};
    border-color: ${p => p.theme.colors.primary};
    transform: scale(1.05);
  }

  @media screen and (${p => p.theme.media.s}) {
    font-size: ${p => p.theme.fontSizes[1]}px;
    padding: 4px 6px;
  }
  @media screen and (${p => p.theme.media.m}) {
    font-size: ${p => p.theme.fontSizes[2]}px;
    padding: 6px 8px;
  }
  @media screen and (${p => p.theme.media.l}) {
    font-size: ${p => p.theme.fontSizes[3]}px;
    padding: 8px 10px;
  }
`;
