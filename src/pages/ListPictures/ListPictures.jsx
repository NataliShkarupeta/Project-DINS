// import { useFeatureStore } from 'components/Features/Features/store';
import {
  AboutOrder,
  Li,
  Ul,
  WrapPicture,
} from 'components/Gallery/Gallery.styled';
import { CommonButton } from 'components/common/commonButton/button';
import { DefaultComponent } from 'components/common/default/defaultComponent';
import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { BASIC_URL } from 'service/basicUrl';
import { getAllPictures, getInStockPictures } from 'service/gallertService';
import { Input, LabPlaces, LiPlaces, NavLinkButton, NavPlaces, PlacesContent, PlacesInput, TextPlace, UlPlaces, WrapCheckBlok, WrapPlaces } from './ListPictures.styled';
import { ThreeDots } from 'react-loader-spinner';
import { WrapDots } from 'components/PictureInfo/PictureInfo.styled';

const ListPictures = memo(() => {
  const [pictures, setPicures] = useState({});
  const [inStock, setInStock] = useState({});
  const [selectedItem, setSelectedItem] = useState('Всі');
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const [t] = useTranslation();

  useEffect(() => {
    setLoading(true);
    getAllPictures()
      .then(res => setPicures(res))
      .finally(() => setLoading(false));
  }, []);
  useEffect(() => {
    setLoading(true);
    getInStockPictures()
      .then(res => setInStock(res))
      .finally(() => setLoading(false));
  }, []);

  const onChangeHandler = event => {
    setSelectedItem(event.target.name);
  };

  if ((!pictures, !inStock)) {
    return (
      <>
        <NavLinkButton to={'/painting'}>
          <CommonButton text={t('button.back')} />
        </NavLinkButton>
        <DefaultComponent>
          <ThreeDots />
          <p>{t('defoultText')} </p>
        </DefaultComponent>
      </>
    );
  }

  const places = [ 'Вітальня','Кухня','Спальня','Дитяча','Офіс/Кабінет' ]

  return (
    <>
      <NavLinkButton to={'/painting'}>
        <CommonButton text={t('button.back')} />
      </NavLinkButton>
      {loading && (
        <WrapDots>
          <ThreeDots />
        </WrapDots>
      )}
      <AboutOrder>{t('gallaryPage.aboutOrder')}</AboutOrder>

      <div>
        <WrapPlaces>
          <NavPlaces>
            <PlacesInput id="menu-cb" type="checkbox"></PlacesInput>
            <LabPlaces htmlFor="menu-cb">Фільтри</LabPlaces>
            <PlacesContent>
              <UlPlaces>
                {places.map(place => (
                  <LiPlaces key={place}>
                    <TextPlace>{place}</TextPlace>
                  </LiPlaces>
                ))}
              </UlPlaces>
            </PlacesContent>
          </NavPlaces>
        </WrapPlaces>

        <WrapCheckBlok>
          <label>
            <Input
              name="Всі"
              type="checkbox"
              onChange={onChangeHandler}
              checked={selectedItem === 'Всі'}
            />
            <span>{t('gallaryPage.listPictures.all')}</span>
          </label>
          <label>
            <Input
              name="В наявності"
              type="checkbox"
              onChange={onChangeHandler}
              checked={selectedItem === 'В наявності'}
            />
            <span>{t('gallaryPage.listPictures.inStock')}</span>
          </label>
        </WrapCheckBlok>
      </div>
      {selectedItem === 'Всі' ? (
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
      ) : Object.keys(inStock).length === 0 ? (
        <DefaultComponent>
          <p>{t('gallaryPage.listPictures.ifNotAvailable')}</p>
        </DefaultComponent>
      ) : (
        <Ul>
          {Object.values(inStock).map(({ title1, image, _id }) => (
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
    </>
  );
});

export default ListPictures;
