// import { useFeatureStore } from 'components/Features/Features/store';
import {
  AboutOrder,
  Li,
  Ul,
  WrapPicture,
} from 'components/Gallery/Gallery.styled';
import { CommonButton } from 'components/common/commonButton/button';
import { DefaultComponent } from 'components/common/default/defaultComponent';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { BASIC_URL } from 'service/basicUrl';
import { getAllPictures } from 'service/gallertService';
import { Input, NavLinkButton, WrapCheckBlok } from './ListPictures.styled';

const ListPictures = () => {
  const [pictures, setPicures] = useState({});
  const location = useLocation();
  const [t] = useTranslation();

  useEffect(() => {
    getAllPictures().then(res => setPicures(res));
  }, []);

  if (!pictures) {
    return (
      <>
        <NavLinkButton to={location.state?.from ?? '/'}>
          <CommonButton text={t('button.back')} />
        </NavLinkButton>
        <DefaultComponent>
          <p> От халепа, щось пішло не так!</p>
        </DefaultComponent>
      </>
    );
  }
  return (
    <>
      <NavLinkButton to={location.state?.from ?? '/'}>
        <CommonButton text={t('button.back')} />
      </NavLinkButton>
      <AboutOrder>{t('gallaryPage.aboutOrder')}</AboutOrder>
      <WrapCheckBlok>
        <lable>
          Всі 
          <Input type="checkbox"  defaultValue={true}/>
        </lable>
        <label>
          В наявності
          <Input type="checkbox" />
        </label>
      </WrapCheckBlok>
      <section>
        {Object.keys(pictures).length === 0 ? (
          <DefaultComponent>
            <p>
              От халепа, щось пішло не так!Спробуйте перезавантажити сторінку
              або зайдіть пізніше.
            </p>
          </DefaultComponent>
        ) : (
          <Ul>
            {pictures &&
              Object.values(pictures).map(({ title1, image, _id }) => (
                <Li key={_id}>
                  <Link
                    to={`/painting/list_pictures/${_id}`}
                    state={{ from: location }}
                  >
                    <WrapPicture>
                      <img src={`${BASIC_URL}/${image}`} alt={title1} />
                    </WrapPicture>
                  </Link>
                </Li>
              ))}
          </Ul>
        )}
      </section>
    </>
  );
};

export default ListPictures;
