import { Head, WrapSender, SmallWrap, ButtonEmail } from './Header.styled';
import { FaEnvelope } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import {
  WrapLinks,
  Ul,
  Li,
  NavigationLink,
} from 'pages/HomePage/HomePage.styled';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import img from '../../images/free-icon-space-8657325 (1).png';

export const Header = () => {
  const [t] = useTranslation();
  const location = useLocation();


  // елементи виїжджають знизу, за рахунок у, буде круто якщо стовбецем
  // const pVariantsList = {
  //   hidden: { opacity: 0 ,y:100},
  //   visible: i => ({ opacity: 1, transition:{delay: i *0.5,} ,y:0}),
  // };
  //.map((el,i)=>( <motion.li key={} variants={pVariantsList} initial ='hidden' animate="visible" custom={i}
  return (
    <Head>
      <motion.p
        animate={{
          scale: [1, 1.1, 1.1, 1, 1],
          rotate: [0, 0, 10, 10, 0],
          borderRadius: ['0%', '0%', '20%', '20%', '0%'],
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      >
        <img src={img} alt="Logo" width="70" />
      </motion.p>

      <WrapLinks>
        <Ul>
          <Li>
            <NavigationLink to="/developer" state={{ from: location }}>
              front-end {t('professions.dev')}
            </NavigationLink>
          </Li>
          <Li>
            <NavigationLink to="/painting" state={{ from: location }}>
              {t('professions.art')}
            </NavigationLink>
          </Li>
          <Li>
            <NavigationLink to="/astrology" state={{ from: location }}>
              {t('professions.astr')}
            </NavigationLink>
          </Li>
          <Li>
            <NavigationLink to="/beauty" state={{ from: location }}>
              {t('professions.lash')}
            </NavigationLink>
          </Li>
          <Li>
            <NavigationLink to="/educator" state={{ from: location }}>
              {t('professions.teacher')}
            </NavigationLink>
          </Li>
          <Li>
            <NavigationLink to="/health" state={{ from: location }}>
              {t('professions.herb')}
            </NavigationLink>
          </Li>
        </Ul>
      </WrapLinks>

      <WrapSender>
        <SmallWrap>
          <FaEnvelope />
          <p>{t('name')}</p>
        </SmallWrap>
        <>
          <ButtonEmail
            onClick={e => {
              window.location.href = 'mailto:natalinardi.kh@gmail.com';
              e.preventDefault();
            }}
          >
            {t('button.email')}
          </ButtonEmail>
        </>
      </WrapSender>
    </Head>
  );
};

// приклад випадаючого меню для мобілки https://codesandbox.io/s/framer-motion-side-menu-mx2rw?from-embed=&file=/src/Example.tsx
// https://www.framer.com/motion/examples/