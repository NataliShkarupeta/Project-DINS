import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { WrapMain } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <WrapMain>
        <Header />
        <Outlet />
      </WrapMain>
      <Footer />
    </>
  );
};
