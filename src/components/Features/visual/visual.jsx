import { Overlay } from 'components/common/modal/modal.styled';
import { useFeatureStore } from '../Features/store';
import { BackgroundForVisual, H3 } from './visual.styled';
import { GiVineLeaf } from 'react-icons/gi';

export const Visual = ({ children, id }) => {
  const fullScreenFeature = useFeatureStore(state => state.fullScreenFeature);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'all 2s ease',
        opacity: `${fullScreenFeature === id ? '100' : '0 '}`,

        pointerEvents: `${fullScreenFeature === id ? 'auto' : 'none'}`,
      }}
    >
      {/* <div style={{ maxWidth: '100vh', padding: '4px' }}>  */}
      <Overlay>
        <BackgroundForVisual>
          <div>
            <GiVineLeaf
              size={40}
              color="green"
              style={{ position: 'absolute', left: '35' }}
            />
            <GiVineLeaf
              size={40}
              color="green"
              style={{ position: 'absolute', left: '35', top: '80' }}
            />
            <GiVineLeaf
              size={40}
              color="green"
              style={{ position: 'absolute', left: '35', top: '130' }}
            />
            <GiVineLeaf
              size={40}
              color="green"
              style={{ position: 'absolute', left: '35', top: '180' }}
            />
            <GiVineLeaf
              size={40}
              color="green"
              style={{ position: 'absolute', left: '35', top: '230' }}
            />
            <GiVineLeaf
              size={40}
              color="green"
              style={{ position: 'absolute', left: '35', top: '280' }}
            />
            <GiVineLeaf
              size={40}
              color="green"
              style={{ position: 'absolute', left: '35', top: '330' }}
            />
            <GiVineLeaf
              size={40}
              color="green"
              style={{ position: 'absolute', left: '35', top: '380' }}
            />
            <GiVineLeaf
              size={40}
              color="green"
              style={{ position: 'absolute', left: '35', top: '430' }}
            />
            <GiVineLeaf
              size={40}
              color="green"
              style={{ position: 'absolute', left: '35', top: '480' }}
            />
            <GiVineLeaf
              size={40}
              color="green"
              style={{ position: 'absolute', left: '35', top: '530' }}
            />
          </div>
          {children}
        </BackgroundForVisual>
      </Overlay>

      {/* </div> */}
    </div>
  );
};

export const CommonСoldVisual = ({ id }) => {
  return (
    <Visual id={id}>
     span
    </Visual>
  );
};

export const HighPressureVisual = ({ id }) => {
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
export const LowPressureVisual = ({ id }) => {
  return (
    <Visual id={id}>
     
    </Visual>
  );
};
export const InsomniaVisual = ({ id }) => {
  return (
    <Visual id={id}>
      
    </Visual>
  );
};
export const DepressionVisual = ({ id }) => {
  return (
    <Visual id={id}>
    
    </Visual>
  );
};
export const AllergyVisual = ({ id }) => {
  return (
    <Visual id={id}>
   
          <H3>Алергія це лдійсно проблема тисячоліття</H3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate,
            consectetur veniam reiciendis aperiam architecto perspiciatis
            laboriosam aut maiores incidunt? Corporis non accusamus quae
            adipisci provident, culpa perferendis officia impedit fugit!
          </p>
        
    </Visual>
  );
};
export const SkinRashesVisual = ({ id }) => {
  return (
    <Visual id={id}>
     
    </Visual>
  );
};
export const HysteriaVisual = ({ id }) => {
  return (
    <Visual id={id}>
      
    </Visual>
  );
};
