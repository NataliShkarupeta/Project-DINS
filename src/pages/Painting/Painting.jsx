import { ButtonHome } from 'components/ButtonHome/ButtonHome';
import { Link, Outlet } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
// import { NavigationLink } from 'pages/HomePage/HomePage.styled';
// import { Ul, NavigationLink } from './Painting.styled';

const PaintingPage = () => {
  // const [t] = useTranslation();
  //   const location = useLocation();

  return (
    <>
      <Link to={'/'}>
        <ButtonHome />
      </Link>
      {/* <Ul> */}
        {/* <li> */}
          {/* <NavigationLink to={'/painting'}> */}
            {/* <h3>{t('paintin_page.paintinTitle2')}</h3> */}
            {/* <h3>{t('paintin_page.paintinTitle1')}</h3> */}
          {/* </NavigationLink> */}
        {/* </li> */}
        {/* <li> */}
          {/* <NavigationLink to={'/painting/social-project'}> */}
            {/* <h3>{t('paintin_page.paintinTitle2')}</h3> */}
            {/* <h3>{t('paintin_page.paintinTitle1')}</h3> */}
          {/* </NavigationLink> */}
        {/* </li> */}
      {/* </Ul> */}
      <Outlet />
    </>
  );
};

export default PaintingPage;
