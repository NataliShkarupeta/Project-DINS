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

export const CommonСold = ({ id }) => {
  return (
    <CardForDisease id={id} gradient="#f5fbff,#addeff">
      {'липа, чабрець '}
    </CardForDisease>
  );
};

export const HighPressure = ({ id }) => {
  return (
    <CardForDisease id={id} gradient="#f5fff7,#adf8ff">
      {'корінь лопуха, кульбаба'}
    </CardForDisease>
  );
};
export const LowPressure = ({ id }) => {
  return <CardForDisease id={id} gradient="#f7f0ff,#a78afe"></CardForDisease>;
};

export const Insomnia = ({ id }) => {
  return <CardForDisease id={id} gradient="#f7fff5,#adffd8"></CardForDisease>;
};
export const Depression = ({ id }) => {
  return <CardForDisease id={id} gradient="#fff7f5,#ffd8ad"></CardForDisease>;
};

export const Allergy = ({ id }) => {
  return <CardForDisease id={id} gradient="#fef5ff,#ffade1"></CardForDisease>;
};
export const SkinRashes = ({ id }) => {
  return <CardForDisease id={id} gradient="#dcedd5,#4ddaf0"></CardForDisease>;
};
export const Hysteria = ({ id }) => {
  return <CardForDisease id={id} gradient="#f6dce0,#f04f85"></CardForDisease>;
};