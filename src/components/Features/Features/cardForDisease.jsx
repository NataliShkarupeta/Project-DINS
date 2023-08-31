import { Div, El, CardButtun } from './cardForDisease.styled';
import { useFeatureStore } from './store';

const CardForDisease = ({ gradient, children, id }) => {
  const inViewFeature = useFeatureStore(state => state.inViewFeature);
  const setFullScreenFeature = useFeatureStore(
    state => state.setFullScreenFeature
  );
  const setInViewTitle = useFeatureStore(state => state.setInViewTitle);

  const styles = {
    backgroundImage: `linear-gradient(to bottom right,${gradient})`,
    opacity: `${inViewFeature === id ? '100' : '0'}`,

    pointerEvents: `${inViewFeature === id ? 'auto' : 'none'}`,
  };

  const viewTitleAndSetFullScreenFeature = id => {
    setFullScreenFeature(id);
    setInViewTitle('qwe');
  };

  return (
    <Div style={styles}>
      {children}
      <CardButtun
        onClick={
          // ()=>setFullScreenFeature(id)
          () => viewTitleAndSetFullScreenFeature(id)
        }
      >
        Розгорнути
        {/* <CommonButton text={'Розгорнути'} /> */}
      </CardButtun>
    </Div>
  );
};

export const CommonСold = ({ id }) => {
const fullScreenFeature = useFeatureStore(state => state.fullScreenFeature);
const isFullScreen = fullScreenFeature === id;

  return (
    <CardForDisease id={id} gradient="#f5fbff,#addeff">
      <ul>
        <li>
          <El
            style={{
              top: '10%',
              left: '5%',
              width: '40%',
              height: '24%',
              transform: `${isFullScreen ? 'scale(0)' : 'scale(1)'}`,
              transition: 'all 2s ease',
            }}
          >
            липа
          </El>
        </li>
        <li>
          <El
            style={{
              top: '20%',
              right: '5%',
              width: '30%',
              height: '24%',
              transform: `${isFullScreen ? 'scale(0)' : 'scale(1)'}`,
              transition: 'all 2s ease',
            }}
          >
            чабрець
          </El>
        </li>
        <li>
          <El
            style={{
              top: '60%',
              left: '10%',
              width: '25%',
              height: '24%',
              transform: `${isFullScreen ? 'scale(0)' : 'scale(1)'}`,
              transition: 'all 2s ease',
            }}
          >
            шавлія
          </El>
        </li>
      </ul>
    </CardForDisease>
  );
};

export const HighPressure = ({ id }) => {
  const fullScreenFeature = useFeatureStore(state => state.fullScreenFeature);
  const isFullScreen = fullScreenFeature === id;
  return (
    <CardForDisease id={id} gradient="#f5fff7,#adf8ff">
      <ul>
        <li>
          <El style={{ top: '10%', left: '5%', width: '40%', height: '24%', transform: `${isFullScreen ? 'scale(0)' : 'scale(1)'}`,
              transition: 'all 2s ease', }}>
            липа
          </El>
        </li>
        <li>
          <El style={{ top: '70%', left: '5%', width: '40%', height: '24%', transform: `${isFullScreen ? 'scale(0)' : 'scale(1)'}`,
              transition: 'all 2s ease', }}>
            чабрець
          </El>
        </li>
        <li>
          <El style={{ top: '40%', left: '5%', width: '40%', height: '24%', transform: `${isFullScreen ? 'scale(0)' : 'scale(1)'}`,
              transition: 'all 2s ease', }}>
            {' '}
            шавлія
          </El>
        </li>
        <li>
          <El style={{ top: '10%', right: '5%', width: '40%', height: '24%', transform: `${isFullScreen ? 'scale(0)' : 'scale(1)'}`,
              transition: 'all 2s ease', }}>
           
           qwe
          </El>
        </li>
      </ul>
    </CardForDisease>
  );
};
export const LowPressure = ({ id }) => {
  const fullScreenFeature = useFeatureStore(state => state.fullScreenFeature);
  const isFullScreen = fullScreenFeature === id;
  return (
    <CardForDisease id={id} gradient="#f7f0ff,#a78afe">
      <ul>
        <li>
          <El style={{ top: '7%', left: '5%', width: '36%', height: '23%', transform: `${isFullScreen ? 'scale(0)' : 'scale(1)'}`,
              transition: 'all 2s ease', }}>
           
          </El>
        </li>
        <li>
          <El style={{ top: '37%', left: '35%', width: '36%', height: '23%', transform: `${isFullScreen ? 'scale(0)' : 'scale(1)'}`,
              transition: 'all 2s ease', }}>
          
          </El>
        </li>
        <li>
          <El style={{ top: '67%', left: '60%', width: '36%', height: '23%', transform: `${isFullScreen ? 'scale(0)' : 'scale(1)'}`,
              transition: 'all 2s ease', }}>
           
          </El>
        </li>
      </ul>
    </CardForDisease>
  );
};

export const Insomnia = ({ id }) => {
  const fullScreenFeature = useFeatureStore(state => state.fullScreenFeature);
  const isFullScreen = fullScreenFeature === id;
  return (
    <CardForDisease id={id} gradient="#f7fff5,#adffd8">
      <ul>
        <li>
          <El style={{ top: '10%', left: '25%', width: '45%', height: '15%', transform: `${isFullScreen ? 'scale(0)' : 'scale(1)'}`,
              transition: 'all 2s ease', }}>
            липа
          </El>
        </li>
        <li>
          <El style={{ top: '30%', left: '25%', width: '45%', height: '15%', transform: `${isFullScreen ? 'scale(0)' : 'scale(1)'}`,
              transition: 'all 2s ease', }}>
            чабрець
          </El>
        </li>
        <li>
          <El style={{ top: '50%', left: '25%', width: '45%', height: '15%', transform: `${isFullScreen ? 'scale(0)' : 'scale(1)'}`,
              transition: 'all 2s ease', }}>
            {' '}
            шавлія
          </El>
        </li>
        <li>
          <El style={{ top: '70%', left: '25%', width: '45%', height: '15%', transform: `${isFullScreen ? 'scale(0)' : 'scale(1)'}`,
              transition: 'all 2s ease', }}>
            {' '}
            шавлія
          </El>
        </li>
      </ul>
    </CardForDisease>
  );
};
export const Depression = ({ id }) => {
  const fullScreenFeature = useFeatureStore(state => state.fullScreenFeature);
  const isFullScreen = fullScreenFeature === id;
  return (
    <CardForDisease id={id} gradient="#fff7f5,#ffd8ad">
      <ul>
        <li>
          <El style={{ top: '10%', left: '5%', width: '40%', height: '24%', transform: `${isFullScreen ? 'scale(0)' : 'scale(1)'}`,
              transition: 'all 2s ease', }}>
            липа
          </El>
        </li>
        <li>
          <El style={{ top: '10%', right: '7%', width: '40%', height: '24%', transform: `${isFullScreen ? 'scale(0)' : 'scale(1)'}`,
              transition: 'all 2s ease', }}>
            чабрець
          </El>
        </li>
        <li>
          <El style={{ top: '40%', left: '5%', width: '40%', height: '24%', transform: `${isFullScreen ? 'scale(0)' : 'scale(1)'}`,
              transition: 'all 2s ease', }}>
            {' '}
            шавлія
          </El>
        </li>
      </ul>
    </CardForDisease>
  );
};

export const Allergy = ({ id }) => {
  const fullScreenFeature = useFeatureStore(state => state.fullScreenFeature);
  const isFullScreen = fullScreenFeature === id;
  return (
    <CardForDisease id={id} gradient="#fef5ff,#ffade1">
      <ul>
        <li>
          <El style={{ top: '10%', left: '5%', width: '40%', height: '24%', transform: `${isFullScreen ? 'scale(0)' : 'scale(1)'}`,
              transition: 'all 2s ease', }}>
            липа
          </El>
        </li>
        <li>
          <El style={{ top: '20%', right: '5%', width: '30%', height: '24%', transform: `${isFullScreen ? 'scale(0)' : 'scale(1)'}`,
              transition: 'all 2s ease', }}>
            чабрець
          </El>
        </li>
        <li>
          <El style={{ top: '60%', left: '10%', width: '25%', height: '24%', transform: `${isFullScreen ? 'scale(0)' : 'scale(1)'}`,
              transition: 'all 2s ease', }}>
            {' '}
            шавлія
          </El>
        </li>
      </ul>
    </CardForDisease>
  );
};
export const SkinRashes = ({ id }) => {
  const fullScreenFeature = useFeatureStore(state => state.fullScreenFeature);
  const isFullScreen = fullScreenFeature === id;
  return (
    <CardForDisease id={id} gradient="#dcedd5,#4ddaf0">
      <ul>
        <li>
          <El style={{ top: '5%', left: '15%', width: '45%', height: '14%', transform: `${isFullScreen ? 'scale(0)' : 'scale(1)'}`,
              transition: 'all 2s ease', }}>
            липа
          </El>
        </li>
        <li>
          <El style={{ top: '20%', left: '45%', width: '45%', height: '14%', transform: `${isFullScreen ? 'scale(0)' : 'scale(1)'}`,
              transition: 'all 2s ease', }}>
            чабрець
          </El>
        </li>
        <li>
          <El style={{ top: '35%', left: '15%', width: '45%', height: '14%', transform: `${isFullScreen ? 'scale(0)' : 'scale(1)'}`,
              transition: 'all 2s ease', }}>
            {' '}
            шавлія
          </El>
        </li>
        <li>
          <El style={{ top: '50%', left: '45%', width: '45%', height: '14%', transform: `${isFullScreen ? 'scale(0)' : 'scale(1)'}`,
              transition: 'all 2s ease', }}>
            липа
          </El>
        </li>
        <li>
          <El style={{ top: '65%', left: '15%', width: '45%', height: '14%', transform: `${isFullScreen ? 'scale(0)' : 'scale(1)'}`,
              transition: 'all 2s ease', }}>
            чабрець
          </El>
        </li>
        <li>
          <El style={{ top: '80%', left: '45%', width: '45%', height: '13%', transform: `${isFullScreen ? 'scale(0)' : 'scale(1)'}`,
              transition: 'all 2s ease', }}>
            {' '}
            шавлія
          </El>
        </li>
      </ul>
    </CardForDisease>
  );
};
export const Hysteria = ({ id }) => {
  const fullScreenFeature = useFeatureStore(state => state.fullScreenFeature);
  const isFullScreen = fullScreenFeature === id;
  return (
    <CardForDisease id={id} gradient="#f6dce0,#f04f85">
      <ul>
        <li>
          <El style={{ top: '10%', left: '19%', width: '60%', height: '18%', transform: `${isFullScreen ? 'scale(0)' : 'scale(1)'}`,
              transition: 'all 2s ease', }}>
            липа
          </El>
        </li>
        <li>
          <El style={{ top: '60%', left: '5%', width: '40%', height: '20%', transform: `${isFullScreen ? 'scale(0)' : 'scale(1)'}`,
              transition: 'all 2s ease', }}>
            чабрець
          </El>
        </li>
        <li>
          <El style={{ top: '60%', left: '55%', width: '40%', height: '20%', transform: `${isFullScreen ? 'scale(0)' : 'scale(1)'}`,
              transition: 'all 2s ease', }}>
            {' '}
            шавлія
          </El>
        </li>
       
      </ul>
    </CardForDisease>
  );
};
<ul>
  <li>
    <El style={{ top: '10%', left: '5%', width: '40%', height: '24%' }}>
      липа
    </El>
  </li>
  <li>
    <El style={{ top: '20%', right: '5%', width: '30%', height: '24%' }}>
      чабрець
    </El>
  </li>
  <li>
    <El style={{ top: '60%', left: '10%', width: '25%', height: '24%' }}>
      {' '}
      шавлія
    </El>
  </li>
  {/* {diseases[0].herbs.map(el => (
          <li key={el}>
            <El>{el}</El>
          </li>
        ))} */}
</ul>;
