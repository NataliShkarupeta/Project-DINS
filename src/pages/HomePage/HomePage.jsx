import { motion } from 'framer-motion';
import {
  H1,
  NameAndPhoto,
  PhotoWrap,
  Article,
  ButtonUnderArticle,
  // WrapLinks,
  // Ul,
  // Li,
  // NavigationLink,
} from './HomePage.styled';

export const HomePage = () => {
  return (
    <>
      <div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <NameAndPhoto>
        <H1>
          Наталі
          <br />
          Шкарупета
        </H1>
        <PhotoWrap>
          <img
            src={require('../../images/author/IMG_0043.jpg')}
            width="340"
            height="340"
            alt="Фотографія автора"
          />
        </PhotoWrap>
      </NameAndPhoto>
      <div>
        <Article>
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nisi
          beatae neque nam architecto! Vero esse vel doloremque eum facere
          placeat eaque dolores voluptatem. Soluta fugit nihil quis odit
          reprehenderit.
        </Article>
        <ButtonUnderArticle>Дізнатись більше</ButtonUnderArticle>
      </div>
      {/* <WrapLinks>
        <Ul>
          <Li>
            <NavigationLink to="/developer">Front-end розробник</NavigationLink>
          </Li>
          <Li>
            <NavigationLink to="/painting"> Художник</NavigationLink>
          </Li>
          <Li>
            <NavigationLink to="/astrology">Астролог</NavigationLink>
          </Li>
          <Li>
            <NavigationLink to="/beauty">
              Майстер з нарощування вій
            </NavigationLink>
          </Li>
          <Li>
            <NavigationLink to="/beauty">?</NavigationLink>
          </Li>
          <Li>
            <NavigationLink to="/beauty">?</NavigationLink>
          </Li>
        </Ul>
      </WrapLinks> */}
    </>
  );
};
