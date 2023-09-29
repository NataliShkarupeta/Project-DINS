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
    color: 'purple',
    opacity: `${inViewTitle ? '0' : '100'}`,
    transition: 'all 1s ease',
    // textShadow: '1px 1px 1px rgba(246,  242,  242, 0.97)',
   
  };

  const containerOne = {
     paddingLeft:"0px",
    color: 'grey',
    opacity: `${inViewTitle ? '0' : '100'}`,
    transition: 'all 1s ease',
    // textShadow: ' 1px 1px 11px rgba(0, 0, 0, 0.97)',
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
