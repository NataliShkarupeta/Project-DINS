// import { ModalCommon } from 'components/common/modal/modal';
import { normalizedDate } from 'pages/Blog/normalizeDate';
import { BASIC_URL } from 'service/basicUrl';
import {
  H2,
  Span,
  Wrap,
  WrapDescription,
  WrapImage,
  WrapImageAndDateCreate,
  WrapInfo,
  WrapInfoFromMe,
  WrapOrderBlock,
} from './PictureInfo.styled';
import { useTranslation } from 'react-i18next';
import { FaStarOfLife } from 'react-icons/fa';
import { useLocation, useParams } from 'react-router-dom';
import { CommonButton } from 'components/common/commonButton/button';
import { useEffect, useState } from 'react';
import { getPictureById } from 'service/gallertService';
import { useFeatureStore } from 'components/Features/Features/store';
import { NavLinkButton } from 'pages/ListPictures/ListPictures.styled';

export const PictureInfo = () => {
  const [picture, setPicure] = useState(null);
  const { paintingId } = useParams();
  const leng = useFeatureStore(state => state.leng);
  const location = useLocation();
  const [t] = useTranslation();

  useEffect(() => {
    getPictureById(paintingId).then(res => setPicure(res));
  }, [paintingId]);

  if (!picture) {
    return null;
  }
  const { title1, descriptions, image, createdAt, TitleEn, descriptionsEn } =
    picture;
  return (
    <>
      <NavLinkButton to={location.state?.from ?? '/'}>
        <CommonButton text={t('button.back')} />
      </NavLinkButton>
      <Wrap>
        <WrapInfo>
          <ImageBlock
            img={image}
            title={leng === 'ua' ? title1 : TitleEn}
            date={createdAt}
          />
          <DescriptionsBlock
            title={leng === 'ua' ? title1 : TitleEn}
            text={leng === 'ua' ? descriptions : descriptionsEn}
          />
        </WrapInfo>

        <OrderBlock tit={leng === 'ua' ? title1 : TitleEn} />
      </Wrap>
    </>
  );
};

const InfoBlock = () => {
  const [t] = useTranslation();
  return (
    <WrapInfoFromMe>
      <p> {t('gallaryPage.pictureInfo.info')}</p>
    </WrapInfoFromMe>
  );
};

const OrderBlock = ({ tit }) => {
  const [checked, setChecked] = useState([]);
  // const [item,setItem]=('');

  const handleCheck = e => {
    console.log('e', e.target.value);
    let updatedList = [...checked];
    if (e.target.checked) {
      updatedList = [...checked, e.target.value];
    } else {
      updatedList.splice(checked.indexOf(e.target.value), 1);
    }
    console.log('updatedList', updatedList);
    setChecked(updatedList);
  };
  const list = [
    'до 40*60 - 70 y.e',
    'до 70*80 -120 y.e',
    'до 100*110 - 250 y.e',
    'від 100*110 - договірна(в приватному листуванні)',
  ];

  const checkList = ['30*40', '40*40', '40*50', '40*60'];

  const submitOrder = e => {
    e.preventDefault();

    console.log(tit, checked);
    setChecked([]);
  };

  return (
    <WrapOrderBlock>
      <h3>Придбати картину</h3>
      <span>
        Цей сайт не є інтернет магазином, тому запити на придбання картин
        відправляються безпосередньо автору. Після опрацювання замовлення
        (протягом доби), Ви отримаєте електронний лист з підтвердженням і
        реквізитами для внесення предоплати.
        <span>
          <FaStarOfLife size={'10px'} />
          Предоплата складає 20% від вартості картин, і !НЕ повертається у
          випадку відхилення замовлення.
        </span>
        Як тільки гроші будуть зараховані, Ваша картина почне народжуватись ).
      </span>

      <div>
        {list.map((item, index) => (
          <div key={index}>
            {/* <input value={item}
             type="checkbox" onChange={handleCheck}
              /> */}
            <span>{item}</span>
          </div>
        ))}
        <select>
          {checkList.map((item, index) => (
            <option
              key={index}
              // value={item}
              // type="checkbox"
              onChange={handleCheck}
              
            >
              {item}
            </option>
          ))}
        </select>
      </div>
      <div>
        <FaStarOfLife size={'10px'} />
        <p> Послуги доставки оплачуються замовником</p>
      </div>
      <div>
        <label htmlFor="">
          Зазначте свою адресу, і я зможу дізнатись для Вас орієнтовну вартість
          доставки.
          <textarea
            placeholder="Україна,м.Київ,Дарницький район"
            cols="30"
            rows="5"
          ></textarea>
        </label>
      </div>

      <CommonButton clickHandler={submitOrder} text={'Відправити замовленя'} />
    </WrapOrderBlock>
  );
};

const ImageBlock = ({ img, title, date }) => {
  return (
    <WrapImageAndDateCreate>
      <WrapImage>
        <img src={`${BASIC_URL}/${img}`} alt={title} />
      </WrapImage>
      <p>Дата додавання зображення {normalizedDate(date)}</p>
    </WrapImageAndDateCreate>
  );
};

const DescriptionsBlock = ({ title, text }) => {
  return (
    <WrapDescription>
      <H2>{title}</H2>
      <Span>{text}</Span>
      <InfoBlock />
    </WrapDescription>
  );
};
