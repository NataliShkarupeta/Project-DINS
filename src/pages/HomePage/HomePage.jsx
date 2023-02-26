
import {
  H1,
  WrapHome,
  WrapLinks,
  Ul,
  Li,
  NavigationLink,
  Circle,
} from './HomePage.styled';


export const HomePage=()=>{
    return (
      <WrapHome>
        <div>
          <Circle></Circle>
          <Circle></Circle>
          <Circle></Circle>
        </div>
        <div>
          <H1>
            Наталі
            <br />
            Шкарупета
          </H1>
          <p>
            {' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            nisi beatae neque nam architecto! Vero esse vel doloremque eum
            facere placeat eaque dolores voluptatem. Soluta fugit nihil quis
            odit reprehenderit.
          </p>
        </div>
        <WrapLinks>
          <Ul>
            <Li>
              <NavigationLink to="/developer">
                Front-end розробник
              </NavigationLink>
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
        </WrapLinks>
      </WrapHome>
    );
}