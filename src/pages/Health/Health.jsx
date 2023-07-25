import { ButtonHome } from 'components/ButtonHome/ButtonHome';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { WrapPhotos, Title, Text } from './Health.styled';

const HealthPage = () => {
  const [t] = useTranslation();

  return (
    <>
      <Link to={'/'}>
        <ButtonHome />
      </Link>
      <Title>{t(`herbalPage.word`)}</Title>
      <WrapPhotos>
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
        <img
          src={require('../../images/healthy/herbs10.jpg')}
          alt=""
          width="340"
        />
      </WrapPhotos>
      <div>
        {/* <Title>{t(`herbalPage.word`)}</Title> */}
        <Text>{t(`herbalPage.title`)}</Text>
        <br />
        <Text>{t(`herbalPage.text.bread`)}</Text>
        <br />
        <Text>{t(`herbalPage.text.nature`)}</Text>
        <br />
        <Text>{t(`herbalPage.text.herbalTea`)}</Text>
      </div>
    </>
  );
};

export default HealthPage;
