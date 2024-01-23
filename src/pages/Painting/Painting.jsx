import { ButtonHome } from 'components/ButtonHome/ButtonHome';
import { useFeatureStore } from 'components/Features/Features/store';
import { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useMedia } from 'react-use';
// import { useTranslation } from 'react-i18next';
// import { NavigationLink } from 'pages/HomePage/HomePage.styled';
// import { Ul, NavigationLink } from './Painting.styled';

const PaintingPage = () => {
  const setSelectedMenu = useFeatureStore(store => store.setSelectedMenu);
  useEffect(() => {
    setSelectedMenu(false);
  }, [setSelectedMenu]);
   const isMobile = useMedia('(max-width:541px)');
  // const [t] = useTranslation();
  //   const location = useLocation();

  return (
    <>
      {!isMobile && (
        <Link to={'/'}>
          <ButtonHome />
        </Link>
      )}
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
