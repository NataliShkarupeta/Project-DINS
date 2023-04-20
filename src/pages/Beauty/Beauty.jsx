import { ButtonHome } from 'components/ButtonHome/ButtonHome';
import { Link, useLocation } from 'react-router-dom';


const BeautyPage = () => {
   const location = useLocation();
console.log('location', location);

  return (
    <Link to={'/'}>
      <ButtonHome />
    </Link>
  );
};

export default BeautyPage;
