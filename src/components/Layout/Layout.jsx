import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { WrapBody, WrapMain } from './Layout.styled';

export const Layout = () => {
  return (
    <WrapBody>
      <WrapMain>
        <Header />
        <Outlet />
      </WrapMain>
      <Footer />
    </WrapBody>
  );
};
