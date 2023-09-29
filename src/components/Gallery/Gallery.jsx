import { normalizedDate } from 'pages/Blog/normalizeDate';
import { useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next';
import {  getAllPictures } from 'service/gallertService';
import { Banner, FirstV, LinkBlock, MainSection, Presentation, SecondV, ThirdV } from './Gallery.styled';
import { NavigationLink } from 'pages/Painting/Painting.styled';
import { useTranslation } from 'react-i18next';
// import { AnimatePresence ,AnimateSharedLayout} from 'framer-motion';

const URLPIC = 'http://localhost:3001'


const Gallary = () => {
  const [pictures, setPicures] = useState({});
  const [t] = useTranslation();

  useEffect(() => {
    getAllPictures().then(res => setPicures(res));
  }, []);

  console.log();
  return (
    <MainSection>
      <Banner>
        <FirstV>НАТАЛІ</FirstV>
        <SecondV>ГАЛЕРЕЯ</SecondV>
        <ThirdV>ШКАРУПЕТА</ThirdV>
        <LinkBlock>
          <NavigationLink to={'/painting/social-project'}>
            {/* <h3>{t('paintin_page.paintinTitle2')}</h3> */}
            <h3>{t('paintin_page.paintinTitle1')}</h3>
          </NavigationLink>
        </LinkBlock>
      </Banner>
      <Presentation></Presentation>
      <section>
        <ul style={{ display: 'flex', gap: '30px' }}>
          {pictures &&
            Object.values(pictures).map(
              ({ title1, descriptions, image, createdAt, _id }) => (
                <li key={_id}>
                  <h3>{title1}</h3>
                  <p>{normalizedDate(createdAt)}</p>
                  <p>{descriptions}</p>
                  <img
                    src={`${URLPIC}/${image}`}
                    alt={title1}
                    width={'300px'}
                  />
                </li>
              )
            )}
        </ul>
      </section>
    </MainSection>
    // <WrapSections>
    //   <SectionMain>
    //     <H2>{t('paintin_page.paintinTitle2')} </H2>
    //   </SectionMain>
    //   <SectionSecond>
    //     <NavLink to={'/painting/social-project'}>
    //       <p>{t('paintin_page.paintinTitle1')}</p>
    //     </NavLink>
    //   </SectionSecond>
    // </WrapSections>
  );
};

export default Gallary;
