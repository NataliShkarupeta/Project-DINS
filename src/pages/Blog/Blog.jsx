import { ButtonHome } from 'components/ButtonHome/ButtonHome';
import { Link } from 'react-router-dom';
const BlogPage = () => {
  return (
    <Link to={'/'}>
      <ButtonHome />
    </Link>
  );
};

export default BlogPage;
