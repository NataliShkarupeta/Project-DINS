import styled from 'styled-components';

export const MainLoaderBlock = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  @media screen and (${p => p.theme.media.s}) {
    flex-direction: column;
  }
  @media screen and (${p => p.theme.media.m}) {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
`;
export const WrapIm1 = styled.div`
  position: absolute;
  width: 350px;
  top: 45%;
  left: 70%;
  @media screen and (${p => p.theme.media.s}) {
    position: absolute;
    width: 150px;
    /* top: 5%; */
    left: 0;
  }

`;
export const WrapIm2 = styled.div`
  position: absolute;
  width: 400px;
  top: 2%;
  left: 1%;
  @media screen and (${p => p.theme.media.s}) {
    position: absolute;
    width: 200px;
    top: 2%;
    left: 1%;
  }
`;
export const WrapIm3 = styled.div`
  position: absolute;
  width: 200px;
  top: 0;
  left: 75%;
  @media screen and (${p => p.theme.media.s}) {
    position: absolute;
    width: 100px;
    top: 0;
    left: 0;
    /* left: 75%; */
  }
`;
export const WrapIm4 = styled.div`
  position: absolute;
  width: 380px;
  top: 52%;
  left: 2%;
  @media screen and (${p => p.theme.media.s}) {
    position: absolute;
    width: 180px;
    top: 52%;
    /* left: 2%; */
  }
`;
export const WrapIm5 = styled.div`
  @media screen and (${p => p.theme.media.s}) {
    position: absolute;
    width: 80vw;
    top: 5%;
    left: 10%;
  }
  @media screen and (${p => p.theme.media.m}) {
    position: absolute;
    width: 80vw;
    top: 5%;
    left: 10%;
  }
  @media screen and (${p => p.theme.media.l}) {
    position: absolute;
    width: 500px;
    top: 20%;
    left: 32%;
  }
`;
