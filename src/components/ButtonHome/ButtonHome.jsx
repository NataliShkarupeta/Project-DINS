import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

export const ButtonHome = () => {
  const [t] = useTranslation();
   const location = useLocation();

  return <button onClick={()=>console.log(location)}> {t('button.buttonHome')}</button>;
};
