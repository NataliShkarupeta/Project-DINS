import { useFeatureStore } from './store';


export const Visual = ({ children ,id}) => {
    const fullScreenFeature = useFeatureStore((state =>state.fullScreenFeature))
    console.log(fullScreenFeature);
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // opacity:"0"
        opacity: `${
          fullScreenFeature === id ? '100' : '0 ' 
        }`,
      }}
    >
      <div style={{ maxWidth: '100vh', padding: '4px' }}></div>
      {children}
    </div>
  );
};

export const CommonСoldVisual = ({id}) => {
  return (
    <Visual id={id}>
      <img
        src={require('../../../images/healthy/herb2 (1).jpg')}
        alt=""
        width="340"
      />
    </Visual>
  );
};

export const HighPressureVisual = ({id}) => {
  return (
    <Visual id={id}>
      <img
        src={require('../../../images/healthy/herb3 (1).jpg')}
        alt=""
        width="340"
      />
    </Visual>
  );
};
export const LowPressureVisual = ({id}) => {
  return (
    <Visual id={id}>
      <img
        src={require('../../../images/healthy/herb3 (1).jpg')}
        alt=""
        width="340"
      />
    </Visual>
  );
}
  export const InsomniaVisual = ({id}) => {
  return (
    <Visual id={id}>
      <img
        src={require('../../../images/healthy/herb3 (1).jpg')}
        alt=""
        width="340"
      />
    </Visual>
  );
  }
  export const DepressionVisual = ({id}) => {
  return (
    <Visual id={id}>
      <img
        src={require('../../../images/healthy/herb3 (1).jpg')}
        alt=""
        width="340"
      />
    </Visual>
  );
  }
  export const AllergyVisual = ({id}) => {
  return (
    <Visual id={id}>
      <img
        src={require('../../../images/healthy/herb3 (1).jpg')}
        alt=""
        width="340"
      />
    </Visual>
  );
  }
  export const SkinRashesVisual = ({id}) => {
  return (
    <Visual id={id}>
      <img
        src={require('../../../images/healthy/herb3 (1).jpg')}
        alt=""
        width="340"
      />
    </Visual>
  );
  }
    export const HysteriaVisual = ({id}) => {
      return (
        <Visual id={id}>
          <img
            src={require('../../../images/healthy/herb3 (1).jpg')}
            alt=""
            width="340"
          />
        </Visual>
      );
    };
