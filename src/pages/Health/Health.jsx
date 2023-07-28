import { ButtonHome } from 'components/ButtonHome/ButtonHome';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  WrapPhotos,
  Title,
  Text,
  Propose,
  WrapText,
  Ul,
  Li,
  CardWrap,
  InfoData,
  H3,
} from './Health.styled';
import { FcRightDown2 } from 'react-icons/fc';

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
      <WrapText>
        {/* <Title>{t(`herbalPage.word`)}</Title> */}
        <Text>{t(`herbalPage.title`)}</Text>
        <br />
        <Text>{t(`herbalPage.text.bread`)}</Text>
        <br />
        <Text>{t(`herbalPage.text.nature`)}</Text>
        <br />
        <Text>{t(`herbalPage.text.herbalTea`)}</Text>
      </WrapText>
      <Propose>
        {t(`herbalPage.propose`)} <FcRightDown2 />
      </Propose>
      <Ul>
        <Li>
          <CardWrap>
            <img
              src={require('../../images/healthy/herb4 (1).jpg')}
              alt=""
              width="370"
            />
            <div>
              <p></p>
            </div>
          </CardWrap>
          <InfoData>
            <H3>{t(`herbalPage.cardSet.mint.title`)} </H3>
            <p>{t(`herbalPage.cardSet.mint.about`)} </p>
          </InfoData>
        </Li>
        <Li>
          <CardWrap>
            <img
              src={require('../../images/healthy/herbs5 (1).jpg')}
              alt=""
              width="370"
            />
            <div>
              <p></p>
            </div>
          </CardWrap>
          <InfoData>
            <H3>{t(`herbalPage.cardSet.plantain.title`)} </H3>
            <p></p>
          </InfoData>
        </Li>
        <Li>
          <CardWrap>
            <img
              src={require('../../images/healthy/herbs6 (1).jpg')}
              alt=""
              width="370"
            />
            <div>
              <p></p>
            </div>
          </CardWrap>
          <InfoData>
            <H3>{t(`herbalPage.cardSet.St.John'sWort.title`)} </H3>
            <p></p>
          </InfoData>
        </Li>
        <Li>
          <CardWrap>
            <img
              src={require('../../images/healthy/herbs7 (1).jpg')}
              alt=""
              width="370"
            />
            <div>
              <p></p>
            </div>
          </CardWrap>
          <InfoData>
            <H3>{t(`herbalPage.cardSet.thyme.title`)} </H3>
            <p></p>
          </InfoData>
        </Li>
        <Li>
          <CardWrap>
            <img
              src={require('../../images/healthy/herbs8 (1).jpg')}
              alt=""
              width="370"
            />
            <div>
              <p></p>
            </div>
          </CardWrap>
          <InfoData>
            <H3>{t(`herbalPage.cardSet.Linden.title`)} </H3>
            <p></p>
          </InfoData>
        </Li>
        <Li>
          <CardWrap>
            <img
              src={require('../../images/healthy/herbs9 (1).jpg')}
              alt=""
              width="370"
            />
            <div>
              <p></p>
            </div>
          </CardWrap>
          <InfoData>
            <H3>{t(`herbalPage.cardSet.blackСurrant.title`)} </H3>
            <p></p>
          </InfoData>
        </Li>
      </Ul>
    </>
  );
};

export default HealthPage;
