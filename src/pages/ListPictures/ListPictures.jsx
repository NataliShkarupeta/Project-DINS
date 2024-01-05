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
import {
  getAllPictures,
  getInStockPictures,
  getPlacePictures,
} from 'service/gallertService';
import {
  AllAndStockWords,
  Input,
  LabPlaces,
  LiPlaces,
  NavLinkButton,
  NavPlaces,
  PlacesContent,
  PlacesInput,
  TextPlace,
  UlPlaces,
  WrapCheckBlok,
  WrapCheckboxes,
  WrapPlaces,
} from './ListPictures.styled';
import { ThreeDots } from 'react-loader-spinner';
import { WrapDots } from 'components/PictureInfo/PictureInfo.styled';

const ListPictures = memo(() => {
  const [pictures, setPicures] = useState({});
  const [pictByPlace, setPictByPlace] = useState({});
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

  const places = [
    t('gallaryPage.listPictures.livingRoom'),
    t('gallaryPage.listPictures.kitchen'),
    t('gallaryPage.listPictures.bedroom'),
    t('gallaryPage.listPictures.childrenRoom'),
    t('gallaryPage.listPictures.office'),
  ];

  const getPicturesByPlaces = place => {

    setLoading(true);
    getPlacePictures(place)
      .then(res => setPictByPlace(res))
      .finally(() => setLoading(false));

   ;
   console.log(pictByPlace)
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

      <WrapCheckboxes>
        <WrapPlaces>
          <NavPlaces>
            <PlacesInput id="menu-cb" type="checkbox"></PlacesInput>
            <LabPlaces htmlFor="menu-cb">
              {t('gallaryPage.listPictures.filters')}
            </LabPlaces>
            <PlacesContent>
              <UlPlaces>
                {places.map(place => (
                  <LiPlaces key={place}>
                    <TextPlace onClick={()=>getPicturesByPlaces(place)}>
                      {place}
                    </TextPlace>
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
            <AllAndStockWords>
              {t('gallaryPage.listPictures.all')}
            </AllAndStockWords>
          </label>
          <label>
            <Input
              name="В наявності"
              type="checkbox"
              onChange={onChangeHandler}
              checked={selectedItem === 'В наявності'}
            />
            <AllAndStockWords>
              {t('gallaryPage.listPictures.inStock')}
            </AllAndStockWords>
          </label>
        </WrapCheckBlok>
      </WrapCheckboxes>
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
