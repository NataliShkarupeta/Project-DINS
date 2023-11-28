// import { useFeatureStore } from 'components/Features/Features/store';
import { AboutOrder, Li, Ul, WrapPicture } from 'components/Gallery/Gallery.styled';
import { CommonButton } from 'components/common/commonButton/button';
import {  useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { BASIC_URL } from 'service/basicUrl';
import { getAllPictures } from 'service/gallertService';

export const ListPictures = () => {
  const [pictures, setPicures] = useState({});
  const location = useLocation();
  const [t] = useTranslation();

  useEffect(() => {
    getAllPictures().then(res => setPicures(res));
  }, []);

  // const setPict = useFeatureStore(store => store.setPict);

  // const savePictueres = _id => {
  //   const image = Object.values(pictures).find(image => image._id === _id);
  //   setPict(image);
  // };

  return (
    <>
      <Link to={location.state?.from ?? '/'}>
        <CommonButton text={t('button.back')} />
      </Link>
      <AboutOrder>{t('gallaryPage.aboutOrder')}</AboutOrder>
      <section>
        <Ul>
          {pictures &&
            Object.values(pictures).map(({ title1, image, _id }) => (
              <Li key={_id}>
                <Link
                  to={`/painting/list_pictures/${_id}`}
                  state={{ from: location }}
                >
                  <WrapPicture >
                    <img src={`${BASIC_URL}/${image}`} alt={title1} />
                  </WrapPicture>
                </Link>
              </Li>
            ))}
        </Ul>
      </section>
    </>
  );
};
