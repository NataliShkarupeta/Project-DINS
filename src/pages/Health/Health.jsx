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
  Overlay,
  OverlayText,
  LinkForSite,
  TwoColumns,
  LeftColumn,
  RightColumn,
  InRightBlock,
} from './Health.styled';
import { FcRightDown2 } from 'react-icons/fc';

import { data } from '../../herbsArray.js';
import { diseases } from './disease';
import { FeaturesTitle } from 'components/Features/Features/title';
const HealthPage = () => {
  const [t] = useTranslation();

  return (
    <>
      <Link to={'/'}>
        <ButtonHome />
      </Link>
      <Title>{t(`herbalPage.word`)}</Title>
      <WrapPhotos>
        {/* <img
          src={require('../../images/healthy/herb1 (1).jpg')}
          alt=""
          width="340"
        /> */}
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
        <Text>{t(`herbalPage.title`)}</Text>
        <br />
        <Text>{t(`herbalPage.text.bread`)}</Text>
        <br />
        <Text>{t(`herbalPage.text.nature`)}</Text>
        <br />
        <Text>{t(`herbalPage.text.herbalTea`)}</Text>
      </WrapText>
      <section>
        <span>
          Трави які можна використати для лікування розповсюджених хвороб:{' '}
        </span>
        <TwoColumns>
          <LeftColumn>
            <ul>
              {diseases.map(({ title, id }) => (
                <li key={id}>
                  <FeaturesTitle id={id}> {title}</FeaturesTitle>
                </li>
              ))}
            </ul>
          </LeftColumn>
          <RightColumn>
            <InRightBlock>
              {diseases.map(disease => (
                <disease.card id={disease.id} key={disease.id} />
              ))}
            </InRightBlock>
          </RightColumn>
        </TwoColumns>
      </section>

      <Propose>
        {t(`herbalPage.propose`)} <FcRightDown2 />
      </Propose>
      <Ul>
        {data.map(({ title, image, about, description, siteFrom }) => (
          <Li key={title}>
            <CardWrap>
              <img src={image} alt="" width="370" />
              <Overlay>
                <OverlayText>
                  {t(`${description}`)}
                  <br />
                  <a href={siteFrom} target="_blank" rel="noopener noreferrer">
                    <LinkForSite>{t(`herbalPage.siteFromInfo`)}</LinkForSite>
                  </a>
                </OverlayText>
              </Overlay>
            </CardWrap>
            <InfoData>
              <H3>{t(`${title}`)}</H3>
              <p> {t(`${about}`)}</p>
            </InfoData>
          </Li>
        ))}
      </Ul>
    </>
  );
};

export default HealthPage;
