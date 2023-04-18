import { ButtonHome } from 'components/ButtonHome/ButtonHome';
import { Link } from 'react-router-dom';
const FrontEndPage = () => {
  return (
    <Link to={'/'}>
      <ButtonHome />
    </Link>
  );
};

export default FrontEndPage;
