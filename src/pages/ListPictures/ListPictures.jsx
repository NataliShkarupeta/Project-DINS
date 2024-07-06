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
import { S3_URL } from 'service/basicUrl';
import { getAllPictures, getPlacePictures } from 'service/gallertService';
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
import { TfiArrowUp } from 'react-icons/tfi';
import { Button } from 'components/common/commonButton/button.styled';
import { useFeatureStore } from 'components/Features/Features/store';

const ListPictures = memo(() => {
  const [pictures, setPicures] = useState({});
  const [inStock, setInStock] = useState({});
  const [selectedItem, setSelectedItem] = useState('Всі');
  const [loading, setLoading] = useState(false);
  const [scroll, setScroll] = useState(0);

  const location = useLocation();
  const [t] = useTranslation();
  const refTop = useFeatureStore(state => state.refTop);

  useEffect(() => {
    setLoading(true);
    getAllPictures()
      .then(res => setPicures(res))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const onChangeHandlerInStock = event => {
    setSelectedItem(event.target.name);
    findInStockPict();
  };

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

  const findInStockPict = () => {
    let inStockPict = Object.values(pictures).filter(
      item => item.inStock === 'так'
    );
    setInStock(inStockPict);
  };

  const getPicturesByPlaces = place => {
    setPicures({});
    setSelectedItem('Всі');
    setLoading(true);
    getPlacePictures(place)
      .then(res => setPicures(res))
      .finally(() => setLoading(false));
  };

  const getPictures = event => {
    if (event.target.checked === false) {
      setSelectedItem('Всі');
      setLoading(true);
      getAllPictures()
        .then(res => setPicures(res))
        .finally(() => setLoading(false));
    }
  };

  if (!pictures || !inStock) {
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

  const topButton = {
    position: 'fixed',
    bottom: '34px',
    right: '34px',
  };

  return (
    <>
      <NavLinkButton to={'/painting'}>
        <CommonButton text={t('button.back')} />
      </NavLinkButton>

      <AboutOrder>{t('gallaryPage.aboutOrder')}</AboutOrder>

      {scroll > document.documentElement.clientHeight && (
        <Button
          style={topButton}
          onClick={() => refTop.current.scrollIntoView({ behavior: 'smooth' })}
        >
          <TfiArrowUp size={20} />
        </Button>
      )}

      <WrapCheckboxes>
        <WrapPlaces>
          <NavPlaces>
            <PlacesInput
              id="menu-cb"
              type="checkbox"
              onChange={getPictures}
            ></PlacesInput>
            <LabPlaces htmlFor="menu-cb">
              {t('gallaryPage.listPictures.filters')}
            </LabPlaces>
            <PlacesContent>
              <UlPlaces>
                {places.map(place => (
                  <LiPlaces key={place}>
                    <TextPlace
                      onClick={() => getPicturesByPlaces(place.toLowerCase())}
                    >
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
              onChange={onChangeHandlerInStock}
              checked={selectedItem === 'В наявності'}
            />
            <AllAndStockWords>
              {t('gallaryPage.listPictures.inStock')}
            </AllAndStockWords>
          </label>
        </WrapCheckBlok>
      </WrapCheckboxes>

      {loading && (
        <WrapDots>
          <ThreeDots />
        </WrapDots>
      )}
      {selectedItem === 'Всі' && pictures.length === 0 && (
        <DefaultComponent>
          <p>{t('gallaryPage.listPictures.notForPlace')}</p>
        </DefaultComponent>
      )}
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
                    {loading && (
                      <WrapDots>
                        <ThreeDots />
                      </WrapDots>
                    )}
                    <img
                      loading="lazy"
                      src={`${S3_URL}/${image}`}
                      alt={title1}
                    />
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
                  <img src={`${S3_URL}/${image}`} alt={title1} />
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
