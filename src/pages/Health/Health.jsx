import { ButtonHome } from 'components/ButtonHome/ButtonHome';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const HealthPage = () => {
  const [t] = useTranslation();

  return (
    <>
      <Link to={'/'}>
        <ButtonHome />
      </Link>
      <div>
        <img
          src={require('../../images/healthy/herb1 (1).jpg')}
          alt=""
          width="340"
        />
        <img
          src={require('../../images/healthy/herb2 (1).jpg')}
          alt=""
          width="340"
        />
        <img
          src={require('../../images/healthy/herb3 (1).jpg')}
          alt=""
          width="340"
        />
      </div>
      <div>
        <h2>{t(`herbalPage.word`)}</h2>
        <span>{t(`herbalPage.title`)}</span>
        <p>{t(`herbalPage.text.bread`)}</p>
        <p>{t(`herbalPage.text.nature`)}</p>
        <p>{t(`herbalPage.text.herbalTea`)}</p>
      </div>
    </>
  );
};

export default HealthPage;
