import { useInView } from 'framer-motion';
import { NameDisease } from 'pages/Health/Health.styled';
import { useEffect, useRef } from 'react';
import { useFeatureStore } from './store';

console.log();

export const FeaturesTitle = ({ children, id }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-50% 0px -50% 0px' });
  const setInViewFeature = useFeatureStore(state => state.setInViewFeature);
  const inViewFeature = useFeatureStore(state => state.inViewFeature);
  const inViewTitle = useFeatureStore(state => state.inViewTitle);

  const container = {
    paddingLeft: '0px',
    color: 'purple',
    opacity: `${inViewTitle ? '0' : '100'}`,
    transition: 'all 1s ease'
  };

  const containerOne = {
    marginLeft: '-100px',
    paddingLeft: '0px',
    color: 'grey',
    opacity: `${inViewTitle ? '0' : '100'}`,
    transition: 'all 1s ease'
  };

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
