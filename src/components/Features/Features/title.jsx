import { useInView } from 'framer-motion';
import { NameDisease } from 'pages/Health/Health.styled';
import { useEffect, useRef } from 'react';
import { useFeatureStore } from './store';

const container = {
  color: 'purple',
};

const containerOne = {
  color: 'grey',
};

export const FeaturesTitle = ({ children, id }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-50% 0px -50% 0px' });
  const setInViewFeature = useFeatureStore(state=>state.setInViewFeature);
 const inViewFeature = useFeatureStore(state=>state.inViewFeature)

  useEffect(() => {
    if (isInView) setInViewFeature(id);
    if (!isInView && inViewFeature === id) setInViewFeature(null);
  }, [isInView, id, setInViewFeature, inViewFeature]);

  return (
    <NameDisease ref={ref} style={isInView ? container : containerOne}>
      {children}
    </NameDisease>
  );
};
