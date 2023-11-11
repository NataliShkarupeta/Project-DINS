import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { Button } from './ButtonHome.styled';

export const ButtonHome = () => {
  const [t] = useTranslation();
   const location = useLocation();

  return (
    <Button onClick={() => console.log(location)}>
      {t('button.buttonHome')}
    </Button>
  );
};
