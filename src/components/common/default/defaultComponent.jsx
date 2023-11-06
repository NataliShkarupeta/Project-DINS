import { Wrap, WrapIcon } from './defaultComponent.styled';
import { TfiWrite } from 'react-icons/tfi';


export const DefaultComponent = ({ children }) => {
  return (
    <Wrap>
      <WrapIcon>
        <TfiWrite size={'100px'} color="purple" transform='rotate(-10)' />
      </WrapIcon>

      {children}
    </Wrap>
  );
  
};
