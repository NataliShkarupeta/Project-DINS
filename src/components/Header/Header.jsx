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

export const Header = () => {
  const [t] = useTranslation();

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
          delay:0.5,
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
            <NavigationLink to="/developer">
              front-end {t('professions.dev')}
            </NavigationLink>
          </Li>
          <Li>
            <NavigationLink to="/painting">
              {t('professions.art')}
            </NavigationLink>
          </Li>
          <Li>
            <NavigationLink to="/astrology">
              {t('professions.astr')}
            </NavigationLink>
          </Li>
          <Li>
            <NavigationLink to="/beauty">
              {t('professions.lash')}
            </NavigationLink>
          </Li>
          <Li>
            <NavigationLink to="/educator">
              {t('professions.teacher')}
            </NavigationLink>
          </Li>
          <Li>
            <NavigationLink to="/health">
              {t('professions.herb')}
            </NavigationLink>
          </Li>
        </Ul>
      </WrapLinks>

      <WrapSender>
        <SmallWrap>
          {' '}
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
            {t('email')}
          </ButtonEmail>
        </>
      </WrapSender>
    </Head>
  );
};
