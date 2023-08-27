import { useInView } from 'framer-motion';
import { NameDisease } from 'pages/Health/Health.styled';
import { useEffect, useRef } from 'react';
import { useFeatureStore } from './store';

console.log();

// const container = {
//   color: 'purple',

// };

// const containerOne = {
//   color: 'grey',
// };

export const FeaturesTitle = ({ children, id }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-50% 0px -50% 0px' });
  const setInViewFeature = useFeatureStore(state => state.setInViewFeature);
  const inViewFeature = useFeatureStore(state => state.inViewFeature);
  const inViewTitle = useFeatureStore(state => state.inViewTitle);

  console.log(inViewTitle);

  const container = {
    color: 'purple',
    opacity: `${inViewTitle ? '0' : '100'}`,
    transition: 'all 2.5s ease',
  };

  const containerOne = {
    color: 'grey',
    opacity: `${inViewTitle ? '0' : '100'}`,
    duration: 0.3,
    transition: 'all 2.5s ease',
  };

  useEffect(() => {
    if (isInView) setInViewFeature(id);
    if (!isInView && inViewFeature === id) setInViewFeature(null);
  }, [isInView, id, setInViewFeature, inViewFeature]);

  return (
    <NameDisease ref={ref} style={isInView ? container : containerOne}>
      {children}
    </NameDisease>
    // <p className="title" ref={ref} style={isInView ? container : containerOne}>

    //   {children}
    // </p>
  );
};
