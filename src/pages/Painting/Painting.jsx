import { ButtonHome } from 'components/ButtonHome/ButtonHome';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// import { NavigationLink } from 'pages/HomePage/HomePage.styled';
import { Ul } from './Painting.styled';

const PaintingPage = () => {
  const [t] = useTranslation();
  //   const location = useLocation();

  return (
    <>
      <Link to={'/'}>
        <ButtonHome />
      </Link>
      <Ul>
        <li>
          <NavLink to={'/painting'}>
            <h3>{t('paintin_page.paintinTitle1')}</h3>
          </NavLink>
        </li>
        <li>
          <NavLink to={'/painting/my-gallary'}>
            <h3>{t('paintin_page.paintinTitle2')}</h3>
          </NavLink>
        </li>
      </Ul>
      <Outlet />
    </>
  );
};

export default PaintingPage;