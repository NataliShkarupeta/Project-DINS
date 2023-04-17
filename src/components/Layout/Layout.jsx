import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import {
  WrapMain,
  WrapButton,
  ButtonTranslate,
  WrapMoonAndSun,
  BlockUnderLine,
  Background,
} from './Layout.styled';
import { useTranslation } from 'react-i18next';
import { BsMoonFill, BsBrightnessHigh } from 'react-icons/bs';

export const Layout = ({ setMainThema }) => {
  const [t, i18n] = useTranslation();

  const changeLanguage = language => {
    i18n.changeLanguage(language);
  };

  return (
    <Background>
      <WrapMain>
        <Header />
        <BlockUnderLine>
          <WrapButton>
            <ButtonTranslate onClick={() => changeLanguage('en')}>
              En
            </ButtonTranslate>
            <ButtonTranslate onClick={() => changeLanguage('ua')}>
              Ua
            </ButtonTranslate>
          </WrapButton>
          <WrapMoonAndSun>
            <BsBrightnessHigh onClick={()=>{setMainThema(true)}} cursor="pointer" />
            |
            <BsMoonFill onClick={()=>{setMainThema(false)}} cursor="pointer" />
          </WrapMoonAndSun>
        </BlockUnderLine>

        <Outlet />
      </WrapMain>
      <div>{t()}</div>
      <Footer />
    </Background>
  );
};
