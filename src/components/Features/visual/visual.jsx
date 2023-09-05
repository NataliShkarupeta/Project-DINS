import { Overlay } from 'components/ModalForBlog/ModalForDelete/ModalForDelete.styled';
import { useFeatureStore } from '../Features/store';
import { BackgroundForVisual, H3 } from './visual.styled';
import { GiVineLeaf } from 'react-icons/gi';
import { useTranslation } from 'react-i18next';

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
  const [t] = useTranslation();
  return (
    <Visual id={id}>
      <H3>{t(`herbalPage.diseases.allergy.forVisual`)}</H3>
      <br />
    </Visual>
  );
};

export const HighPressureVisual = ({ id }) => {
  const [t] = useTranslation();
  return (
    <Visual id={id}>
      <H3>{t(`herbalPage.diseases.allergy.forVisual`)}</H3>
      <br />
      <img
        src={require('../../../images/healthy/herb3 (1).jpg')}
        alt=""
        width="340"
      />
    </Visual>
  );
};
export const LowPressureVisual = ({ id }) => {
  const [t] = useTranslation();
  return (
    <Visual id={id}>
      <H3>{t(`herbalPage.diseases.allergy.forVisual`)}</H3>
      <br />
    </Visual>
  );
};
export const InsomniaVisual = ({ id }) => {
  const [t] = useTranslation();
  return (
    <Visual id={id}>
      <H3>{t(`herbalPage.diseases.allergy.forVisual`)}</H3>
      <br />
    </Visual>
  );
};
export const DepressionVisual = ({ id }) => {
  const [t] = useTranslation();
  return (
    <Visual id={id}>
      <H3>{t(`herbalPage.diseases.allergy.forVisual`)}</H3>
      <br />
    </Visual>
  );
};
export const AllergyVisual = ({ id }) => {
  const [t] = useTranslation();
  return (
    <Visual id={id}>
      <H3>{t(`herbalPage.diseases.allergy.forVisual`)}</H3>
      <br />
      <p>{t(`herbalPage.diseases.allergy.forVisualOne`)}</p>
      <br />
      <p>{t(`herbalPage.diseases.allergy.forVisualTwo`)}</p>
      <br />
      <p>{t(`herbalPage.diseases.allergy.forVisualThree`)}</p>
    </Visual>
  );
};
export const SkinRashesVisual = ({ id }) => {
  const [t] = useTranslation();
  return (
    <Visual id={id}>
      <H3>{t(`herbalPage.diseases.allergy.forVisual`)}</H3>
      <br />
    </Visual>
  );
};
export const HysteriaVisual = ({ id }) => {
  const [t] = useTranslation();
  return (
    <Visual id={id}>
      <H3>{t(`herbalPage.diseases.allergy.forVisual`)}</H3>
      <br />
    </Visual>
  );
};
