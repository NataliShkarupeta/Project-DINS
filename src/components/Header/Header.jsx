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

export const Header = () => {
  const [t] = useTranslation();
 const location = useLocation();

  const pVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  // елементи виїжджають знизу, за рахунок у, буде круто якщо стовбецем 
  // const pVariantsList = {
  //   hidden: { opacity: 0 ,y:100},
  //   visible: i => ({ opacity: 1, transition:{delay: i *0.5,} ,y:0}),
  // };
  //.map((el,i)=>( <motion.li key={} variants={pVariantsList} initial ='hidden' animate="visible" custom={i}
  return (
    <Head>
      <motion.p
        initial={'hidden'}
        animate={'visible'}
        transition={{
          duration: 1.5,
          delay: 0.5,
          // reteat: Infinity,
          // repeatType: 'reverse',
          // type: 'tween',
          // ease: 'easeInOut',
        }}
        variants={pVariants}
      >
        Logo
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