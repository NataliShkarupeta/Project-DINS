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
import { Input, NavLinkButton, WrapCheckBlok } from './ListPictures.styled';

const ListPictures = memo(() => {
  const [pictures, setPicures] = useState({});
  const [inStock, setInStock] = useState({});
  const [selectedItem, setSelectedItem] = useState('Всі');
  const location = useLocation();
  const [t] = useTranslation();

  useEffect(() => {
    getAllPictures().then(res => setPicures(res));
  }, []);
  useEffect(() => {
    getInStockPictures().then(res => setInStock(res));
  }, []);

  // useEffect(() => {
  //   if (selectedItem === 'Всі') {
  //     getAllPictures().then(res => setPicures(res));
  //   }
  //   if (selectedItem === 'В наявності') {
  //     getInStockPictures().then(res => setInStock(res));
  //   }
  // }, [selectedItem]);

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
          <p>
            {' '}
            От халепа, щось пішло не так! Спробуйте перезавантажити сторінку або
            зайдіть пізніше.
          </p>
        </DefaultComponent>
      </>
    );
  }

  return (
    <>
      <NavLinkButton to={'/painting'}>
        <CommonButton text={t('button.back')} />
      </NavLinkButton>
      <AboutOrder>{t('gallaryPage.aboutOrder')}</AboutOrder>
      <WrapCheckBlok>
        <label>
          <Input
            name="Всі"
            type="checkbox"
            onChange={onChangeHandler}
            checked={selectedItem === 'Всі'}
          />
          <span>Всі</span>
        </label>
        <label>
          <Input
            name="В наявності"
            type="checkbox"
            onChange={onChangeHandler}
            checked={selectedItem === 'В наявності'}
          />
          <span>В наявності</span>
        </label>
      </WrapCheckBlok>
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
          <p>
            Схоже всі картини розпродані!!! Натисніть на кнопку "Всі" і замовте для себе 
            ту, яка сподобалась найбільше!
          </p>
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

  // if (!pictures) {
  //   return (
  //     <>
  //       <NavLinkButton to={location.state?.from ?? '/'}>
  //         <CommonButton text={t('button.back')} />
  //       </NavLinkButton>
  //       <DefaultComponent>
  //         <p> От халепа, щось пішло не так!</p>
  //       </DefaultComponent>
  //     </>
  //   );
  // }
  // return (
  //   <>
  //     <NavLinkButton to={'/painting'}>
  //       <CommonButton text={t('button.back')} />
  //     </NavLinkButton>
  //     <AboutOrder>{t('gallaryPage.aboutOrder')}</AboutOrder>
  //     <WrapCheckBlok>
  //       <label>
  //         <Input
  //           name="Всі"
  //           type="checkbox"
  //           onChange={onChangeHandler}
  //           checked={selectedItem === 'Всі'}
  //         />
  //         <span>Всі</span>
  //       </label>
  //       <label>
  //         <Input
  //           name="В наявності"
  //           type="checkbox"
  //           onChange={onChangeHandler}
  //           checked={selectedItem === 'В наявності'}
  //         />
  //         <span>В наявності</span>
  //       </label>
  //     </WrapCheckBlok>
  //     <section>
  //       {selectedItem === 'В наявності' && !inStock && (
  //         <DefaultComponent>
  //           <p> От халепа, щось пішло не так!</p>
  //         </DefaultComponent>
  //       )}
  //       {inStock && Object.keys(inStock).length !== 0 ? (
  //         <Ul>
  //           {Object.values(inStock).map(({ title1, image, _id }) => (
  //             <Li key={_id}>
  //               <Link
  //                 to={`/painting/list_pictures/${_id}`}
  //                 state={{ from: location }}
  //               >
  //                 <WrapPicture>
  //                   <img src={`${BASIC_URL}/${image}`} alt={title1} />
  //                 </WrapPicture>
  //               </Link>
  //             </Li>
  //           ))}
  //         </Ul>
  //       ) : (
  //         <>
  //           {Object.keys(pictures).length === 0 ? (
  //             <DefaultComponent>
  //               <p>
  //                 От халепа, щось пішло не так!Спробуйте перезавантажити
  //                 сторінку або зайдіть пізніше.
  //               </p>
  //             </DefaultComponent>
  //           ) : (
  //             <Ul>
  //               {pictures &&
  //                 Object.values(pictures).map(({ title1, image, _id }) => (
  //                   <Li key={_id}>
  //                     <Link
  //                       to={`/painting/list_pictures/${_id}`}
  //                       state={{ from: location }}
  //                     >
  //                       <WrapPicture>
  //                         <img src={`${BASIC_URL}/${image}`} alt={title1} />
  //                       </WrapPicture>
  //                     </Link>
  //                   </Li>
  //                 ))}
  //             </Ul>
  //           )}
  //         </>
  //       )}
  //     </section>
  //   </>
  // );
});

export default ListPictures;
