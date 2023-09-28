import { normalizedDate } from 'pages/Blog/normalizeDate';
import { useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next';
import {  getAllPictures } from 'service/gallertService';

// const URLPIC = 'http://localhost:3001'
// import { NavLink } from 'react-router-dom';
// import {
//   SectionMain,
//   SectionSecond,
//   H2,
//   WrapSections,
// } from '../SocialProject/SocialProject.styled';

const Gallary = () => {
  const [pictures, setPicures] = useState({});
  // const [t] = useTranslation();

  useEffect(() => {
    getAllPictures().then(res => setPicures(res));
  }, []);

  console.log(pictures);
  return (
    <div>
      <ul style={{ display: 'flex', gap: '30px' }}>
        {pictures &&
          Object.values(pictures).map(
            ({ title1, descriptions,image, createdAt, _id }) => (
              <li key={_id}>
                <h3>{title1}</h3>
                <p>{normalizedDate(createdAt)}</p>
                <p>{descriptions}</p>
                <img
                  src="http://localhost:3001/pictures/paintVase.jpg"
                  alt=""
                />
              </li>
            )
          )}
      </ul>
    </div>
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
