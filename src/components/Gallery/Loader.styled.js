import styled from 'styled-components';

export const MainLoaderBlock = styled.div`
  height: 100vh;
  /* position: relative; */
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
  @media screen and (${p => p.theme.media.s}) {
    position: absolute;
    width: 150px;
    left: 0;
  }
  @media screen and (${p => p.theme.media.l}) {
    width: 280px;
    bottom: -35%;
    right: 2%;
  }
  @media screen and (${p => p.theme.media.xxl}) {
    width: 27%;
    right: 3%;
    bottom: -27%;
  }
`;
export const WrapIm2 = styled.div`
  position: absolute;

  @media screen and (${p => p.theme.media.s}) {
    position: absolute;
    width: 200px;
    top: 2%;
    left: 1%;
  }
  @media screen and (${p => p.theme.media.l}) {
    width: 300px;
    left: 2%;
  }
  @media screen and (${p => p.theme.media.xxl}) {
    width:28%;
    left: 3%;
  }
`;
export const WrapIm3 = styled.div`
  position: absolute;

  @media screen and (${p => p.theme.media.s}) {
    position: absolute;
    width: 100px;
    top: 0;
    left: 0;
  
  }
  @media screen and (${p => p.theme.media.l}) {
    width: 220px;
    right: 6%;
  }
   @media screen and (${p => p.theme.media.xl}) {
    
    right: 4.5%;
  }
  @media screen and (${p => p.theme.media.xxl}) {
    width: 18%;
    right: 8%;
  }
`;
export const WrapIm4 = styled.div`
  position: absolute;

  @media screen and (${p => p.theme.media.s}) {
    position: absolute;
    width: 180px;
    top: 52%;
  }
  @media screen and (${p => p.theme.media.l}) {
    width: 300px;
    bottom: -35%;
    left: 2%;
  }
  @media screen and (${p => p.theme.media.xxl}) {
    width: 25%;
    left: 4.5%;
    bottom: -27%;
  }
`;
export const WrapIm5 = styled.div`
  @media screen and (${p => p.theme.media.s}) {
    position: absolute;
    width: 80vw;
    top: 30%;
    /* bottom: 10%; */
    left: 10%;
  }
  @media screen and (${p => p.theme.media.m}) {
    position: absolute;
    width: 80vw;
    bottom: -15%;
    left: 10%;
    /* top: 5%;
    left: 10%; */
  }

  @media screen and (${p => p.theme.media.l}) {
    position: absolute;
    width: 400px;
    top: calc(100vh / 2);

    left: calc(100vw / 2 - 200px);
    z-index: 1;
    top: calc(100vh / 2 + 50px);
  }
  @media screen and (${p => p.theme.media.xl}) {
    width: 450px;
    left: calc(100vw / 2 - 225px);
    top: calc(100vh / 2 + 25px);
  }
  @media screen and (${p => p.theme.media.xxl}) {
    width: 34%;
    left: calc(100vw / 2 - 17%);
  }
`;
