import { ButtonHome } from 'components/ButtonHome/ButtonHome';
import { Link } from 'react-router-dom';
const BlogPage = () => {
  //  don't forgot create a button for delete && update && show one for repost post through additional the ask-password window //
  return (
    <Link to={'/'}>
      <ButtonHome />
    </Link>
  );
};

export default BlogPage;
