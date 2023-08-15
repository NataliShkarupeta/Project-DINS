import { useInView } from 'framer-motion';
import { NameDisease } from 'pages/Health/Health.styled';
import { useRef } from 'react';

const container = {
  color: 'red',
};

const containerOne = {
  color: 'grey',
};

export const FeaturesTitle = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-50% 0px -50% 0px' });

  console.log(isInView, children);

  return (
    <NameDisease ref={ref} style={isInView ? container : containerOne}>
      {children}
    </NameDisease>
  );
};
