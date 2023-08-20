
import { Div, El,CardButtun } from './cardForDisease.styled';
import { useFeatureStore } from './store';
// import { diseases } from 'pages/Health/disease';

const CardForDisease = ({ gradient, children, id }) => {
  const inViewFeature = useFeatureStore(state => state.inViewFeature);
  const setFullScreenFeature = useFeatureStore(state=>state.setFullScreenFeature)

  const styles = {
    backgroundImage: `linear-gradient(to bottom right,${gradient})`,
    opacity: `${inViewFeature === id ? '100' : '0'}`,
  };
  return (
    <Div style={styles}>
      {children}
      <CardButtun onClick={
        ()=>setFullScreenFeature(id)
        // ()=>console.log("click")
        }>
        Розгорнути
        {/* <CommonButton text={'Розгорнути'} /> */}
      </CardButtun>
    </Div>
  );
};

export const CommonСold = ({ id }) => {
  return (
    <CardForDisease id={id} gradient="#f5fbff,#addeff">
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
      </ul>
    </CardForDisease>
  );
};

export const HighPressure = ({ id }) => {
  return (
    <CardForDisease id={id} gradient="#f5fff7,#adf8ff">
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
      </ul>
    </CardForDisease>
  );
};
export const LowPressure = ({ id }) => {
  return (
    <CardForDisease id={id} gradient="#f7f0ff,#a78afe">
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
      </ul>
    </CardForDisease>
  );
};

export const Insomnia = ({ id }) => {
  return (
    <CardForDisease id={id} gradient="#f7fff5,#adffd8">
    
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
      </ul>
    </CardForDisease>
  );
};
export const Depression = ({ id }) => {
  return (
    <CardForDisease id={id} gradient="#fff7f5,#ffd8ad">
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
      </ul>
    </CardForDisease>
  );
};

export const Allergy = ({ id }) => {
  return (
    <CardForDisease id={id} gradient="#fef5ff,#ffade1">
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
      </ul>
    </CardForDisease>
  );
};
export const SkinRashes = ({ id }) => {
  return (
    <CardForDisease id={id} gradient="#dcedd5,#4ddaf0">
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
      </ul>
    </CardForDisease>
  );
};
export const Hysteria = ({ id }) => {
  return (
    <CardForDisease id={id} gradient="#f6dce0,#f04f85">
      
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
