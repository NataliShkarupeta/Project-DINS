import { ButtonHome } from 'components/ButtonHome/ButtonHome';
import { Link } from 'react-router-dom';
const HealthPage = () => {
  return (
    <Link to={'/'}>
      <ButtonHome />
    </Link>
  );
};

export default HealthPage;
