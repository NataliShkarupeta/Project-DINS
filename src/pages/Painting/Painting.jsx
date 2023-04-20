import { ButtonHome } from 'components/ButtonHome/ButtonHome';
import { Link, NavLink, Outlet} from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PaintingPage = () => {
  const[t]=useTranslation();
  //   const location = useLocation();

  return (
    <>
      <Link to={'/'}>
        <ButtonHome />
      </Link>
      <div>
        <section>
          <NavLink to={'/painting/social-project'}>
            <h3>{t('paintin_page.paintinTitle1')}</h3>
          </NavLink>
        </section>
        <section>
          <NavLink to={'/painting/my-gallary'}>
            <h3>{t('paintin_page.paintinTitle2')}</h3>
          </NavLink>
        </section>
      </div>
      <Outlet/>
    </>
  );
};

export default PaintingPage;
