import { Button } from 'components/common/commonButton/button.styled';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

export const ButtonHome = () => {
  const [t] = useTranslation();
  const location = useLocation();

  const styles = {
    marginBottom: '32px',
    marginLeft: '16px',
    padding:'2px 5px',
  };

  return (
    <Button style={styles} onClick={() => console.log(location)}>
      {t('button.buttonHome')}
    </Button>
  );
};
