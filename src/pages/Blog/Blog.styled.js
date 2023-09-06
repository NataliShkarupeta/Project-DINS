import styled from 'styled-components';
import img from '../../images/Depositphotos_211953146_XL (1).jpg';

export const WrapForTooltip = styled.div`
  margin: 0;
  padding: 0;
  /* background-color: ${p => p.theme.colors.muted}; */
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.muted};
  border-radius: ${p => p.theme.radii.normal};
`;

export const BlockButton = styled.div`
 margin-left: auto;
 margin-right: auto;
  position: sticky;
  bottom: -10px;
  display: flex;
  justify-content: center;
  gap: 2px;
  margin-left: 90%;
  border: ${p => p.theme.borders.normal};
  border-color: black;
  :hover,
  :focus {
    border-color: ${p => p.theme.colors.muted};
  }
`;

export const OnceButton = styled.span`
  font-size: ${p => p.theme.fontSizes[0]}px;
`;

export const WrapTitleAndDate = styled.div`
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  display: flex;
  justify-content: space-between;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Section = styled.section`
  text-align: center;
  /* padding: ${p => p.theme.space[4]}px; */

  /* background-image:  */
  /* linear-gradient(
      to bottom,
      rgba(255, 255, 0, 0.37),
      rgba(83, 177, 226, 1)
    ), */
  /* linear-gradient(to bottom, rgba(47, 48, 58,0.2), rgba(47, 48, 58,0.2)), */
  /* url('${img}'); */
  /* background-size: cover; */
`;

export const Li = styled.li`
  /* position: relative; */
  padding: ${p => p.theme.space[3]}px;
  margin: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
  margin-left: auto;
  margin-right: auto;
  height: 400px;
  /* width: 500px; */
  text-align: center;

  /* border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.muted};
  border-radius: ${p => p.theme.radii.normal}; */
  /* box-shadow: 0 0 0px rgba(0, 0, 0, 0.1), 0 3px 7px rgba(0, 0, 0, 0.3),
    inset 0 1px rgba(255, 255, 255, 1), inset 0 -3px 2px rgba(0, 0, 0, 0); */

  /* height: 30%; */
  overflow: hidden;
  /* overflow-y: scroll; */

  background-color: rgba(255, 255, 255, 0.7);
  background-size: 100%;
`;

export const Title = styled.h2`
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.therd};
`;

export const Date = styled.span`
  font-size: ${p => p.theme.fontSizes[0]}px;
`;

export const Text = styled.p`
  padding-bottom: ${p => p.theme.space[5]}px;
  width: 800px;
  margin-left: auto;
  margin-right: auto;
  font-family: ${p => p.theme.fonts.body};
  font-size: 17px;
  font-weight: ${p => p.theme.fontWeights.middle};
  line-height: 1.33;

  color: ${p => p.theme.colors.therd};
`;
