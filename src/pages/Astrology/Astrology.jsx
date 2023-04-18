import { ButtonHome } from 'components/ButtonHome/ButtonHome';
import { Link } from 'react-router-dom';
const AstrologyPage = () => {
  return (
    <Link to={'/'}>
      <ButtonHome />
    </Link>
  );
};

export default AstrologyPage;
