import { ButtonHome } from 'components/ButtonHome/ButtonHome';
import { Link} from 'react-router-dom';
const PaintingPage = () => {
  //   const location = useLocation();

  return (
    <Link to={'/'}>
      <ButtonHome />
    </Link>
  );
};

export default PaintingPage;
