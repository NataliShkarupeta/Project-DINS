import { Div } from './cardForDisease.styled';
import { useFeatureStore } from './store';


const CardForDisease = ({ gradient, children, id }) => {
  const inViewFeature = useFeatureStore(state => state.inViewFeature);

  const styles = {
    backgroundImage: `linear-gradient(to bottom right,${gradient})`,
    opacity:`${inViewFeature === id ? '100' : '0'}`
  };
  return <Div style={styles}>{children}</Div>;
};

export const Card = ({ id }) => {
  return <CardForDisease id={id} gradient="#f5fbff,#addeff"></CardForDisease>;
};

export const ForDisease = ({ id }) => {
  return <CardForDisease id={id} gradient="#f5fff7,#adf8ff"></CardForDisease>;
};
export const One = ({ id }) => {
  return <CardForDisease id={id} gradient="#f7f0ff,#a78afe"></CardForDisease>;
};

export const Second = ({ id }) => {
  return <CardForDisease id={id} gradient="#f7fff5,#adffd8"></CardForDisease>;
};
export const Third = ({ id }) => {
  return <CardForDisease id={id} gradient="#fff7f5,#ffd8ad"></CardForDisease>;
};

export const Fourth = ({ id }) => {
  return <CardForDisease id={id} gradient="#fef5ff,#ffade1"></CardForDisease>;
};
export const Fifthth = ({ id }) => {
  return <CardForDisease id={id} gradient="#dcedd5,#4ddaf0"></CardForDisease>;
};
