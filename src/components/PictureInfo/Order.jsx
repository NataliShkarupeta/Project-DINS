import {
  Desctiption,
  H3,
  Prepayment,
  Price,
  PricePicture,
  WrapOrderBlock,
  Form,
  WrapInputFields,
  Label,
  Select,
  LableText,
  TextArea,
  Text,
  WrapIfBuy,
  H4,
  Size,
  WrapSizes,
  TextExplanation,
  WrapIfOrder,
} from './PictureInfo.styled';
import { FaStarOfLife } from 'react-icons/fa';
import { CommonButton } from 'components/common/commonButton/button';
import { useState } from 'react';
import { HiCursorClick } from 'react-icons/hi';
import { BsExclamation } from 'react-icons/bs';
import { BorderTop, MiddleLine } from 'components/Gallery/Gallery.styled';
import { BGPriceBlock, Input } from 'pages/ListPictures/ListPictures.styled';
import { useTranslation } from 'react-i18next';
import { useFeatureStore } from 'components/Features/Features/store';
import { useMedia } from 'react-use';

const styles = {
  width: '100px',
  backgroundColor: 'transparent',
};

export const OrderBlock = ({ tit, size, inStock }) => {
  const [selectedItem, setSelectedItem] = useState(
    inStock === 'так' ? 'Купляю' : 'Замовляю'
  );
  const isMobile = useMedia('(max-width:541px)');

  const [t] = useTranslation();
  //   const handleCheck = e => {
  //     console.log('e', e.target.value);
  //     let updatedList = [...selected];
  //     if (e.target.checked) {
  //       updatedList = [...selected, e.target.value];
  //     } else {
  //       updatedList.splice(selected.indexOf(e.target.value), 1);
  //     }
  //     console.log('updatedList', updatedList);
  //     setSelected(updatedList);
  //   };

  const submitOrder = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log(tit, formJson);
    // form.reset();
  };

  return (
    <WrapOrderBlock>
      <H3>{t('gallaryPage.pictureInfo.order.title')}</H3>
      <DescriptionPreOrder />

      <BorderTop>
        <div></div>
        <MiddleLine></MiddleLine>
        <div></div>
      </BorderTop>
      <Form onSubmit={submitOrder}>
        <div>
          <SelectOrderOrBuy
            setSelectedItem={setSelectedItem}
            selectedItem={selectedItem}
            inStock={inStock}
          />
        </div>
        <WrapInputFields>
          {selectedItem === 'Замовляю' ? (
            <IfOrder />
          ) : (
            <IfBuy name={tit} size={size} />
          )}

          <div>
            <Label>
              <span
                style={
                  isMobile ? { lineHeight: '1.12' } : { lineHeight: '1.22' }
                }
              >
                {t('gallaryPage.pictureInfo.order.setAdress')}
              </span>
              <Prepayment>
                <FaStarOfLife size={'10px'} color="purple" />
                <p> {t('gallaryPage.pictureInfo.order.delivery')}</p>
              </Prepayment>
              <TextArea
                name="adress"
                placeholder={t('gallaryPage.pictureInfo.order.placeholder')}
              ></TextArea>
            </Label>
          </div>
        </WrapInputFields>
        <CommonButton
          styled={styles}
          type="submit"
          text={t('gallaryPage.pictureInfo.order.buttonSubmit')}
        />
      </Form>
    </WrapOrderBlock>
  );
};

const IfBuy = ({ name, size }) => {
  const isMobile = useMedia('(max-width:541px)');
  const [t] = useTranslation();
  return (
    <WrapIfBuy>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <p>{t('gallaryPage.pictureInfo.order.IfBuyText')} </p>
          <p> {t('gallaryPage.pictureInfo.order.size')}</p>
        </div>
        <div>
          <span>
            <H4>"{name}"</H4>
          </span>
          <span>
            {' '}
            <Size>{size} </Size>
          </span>
        </div>
      </div>

      {!isMobile && (
        <TextExplanation>
          {t('gallaryPage.pictureInfo.order.ifAnother')}{' '}
        </TextExplanation>
      )}
    </WrapIfBuy>
  );
};

const SelectOrderOrBuy = ({ setSelectedItem, selectedItem, inStock }) => {
  const [t] = useTranslation();
  const onChangeHandler = event => {
    setSelectedItem(event.target.name);
  };

  const disStyles = {
    color: 'grey',
    cursor: 'default',
  };

  const styles = {
    color: 'black',
    cursor: 'pointer',
  };

  return (
    <div>
      <label>
        <Input
          disabled={inStock === 'ні' ? true : null}
          style={inStock === 'ні' ? disStyles : styles}
          name="Купляю"
          type="checkbox"
          onChange={onChangeHandler}
          checked={selectedItem === 'Купляю'}
        />
        <span style={inStock === 'ні' ? disStyles : styles}>
          {t('gallaryPage.pictureInfo.order.buy')}
        </span>
      </label>
      <label>
        <Input
          name="Замовляю"
          type="checkbox"
          onChange={onChangeHandler}
          checked={selectedItem === 'Замовляю'}
        />
        <span>{t('gallaryPage.pictureInfo.order.order')}</span>
      </label>
    </div>
  );
};

const IfOrder = ({ size }) => {
  const [t] = useTranslation();
    const isMobile = useMedia('(max-width:541px)');
  const checkList = ['40*40', '40*50', '40*60', '50*70', '80*70', '100*110'];
  return (
    <WrapIfOrder>
      <Label>
        <LableText>{t('gallaryPage.pictureInfo.order.selectSize')}</LableText>
        <Select name="selectedSize" defaultValue={size}>
          {checkList.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </Select>
      </Label>

      {!isMobile && (
        <>
          <br />
          <TextExplanation>
            <BsExclamation />
            {t('gallaryPage.pictureInfo.order.attention')}
          </TextExplanation>
        </>
      )}
    </WrapIfOrder>
  );
};

const DescriptionPreOrder = () => {
  const [t] = useTranslation();
  const [vis, setVis] = useState(false);

  const leng = useFeatureStore(state => state.leng);
  const isMobile = useMedia('(max-width:541px)');

  const list = [
    'до 40*60 - 70 y.e',
    'до 70*80 -120 y.e',
    'до 100*110 - 250 y.e',
    'від 100*110 - договірна(в приватному листуванні)',
  ];

  const listEn = [
    'up to 40*60 - 70 y.e',
    'up to 70*80 -120 y.e',
    'up to 100*110 - 250 y.e',
    'from 100*110 - contractual (in private correspondence)',
  ];
  const pricesBlock = {
    position: 'absolute',
    visibility: 'hidden',
  };
  const pricesBlockVisible = {
    // backgroundColor: '#fff4e4',
    marginTop: '30px',
    padding: '10px 20px',
    position: 'absolute',
    visibility: 'visible',
    right: '-20px',
  };
  const pricesBlockVisibleMobile = {
    padding: '5px 10px',
    position: 'absolute',
    visibility: 'visible',
    bottom: '20px',
    fontSize: '10px',
  };

  return (
    <Desctiption>
      {t('gallaryPage.pictureInfo.order.desctiption')}
      <Prepayment>
        <FaStarOfLife size={'10px'} color="purple" />
        {t('gallaryPage.pictureInfo.order.prepayment')}
      </Prepayment>
      <Price>
        <Text>{t('gallaryPage.pictureInfo.order.afterPrepayment')}</Text>
        <PricePicture onClick={() => setVis(!vis)}>
          <HiCursorClick />
          {t('gallaryPage.pictureInfo.order.findPrice')}
        </PricePicture>
        <BGPriceBlock
          style={
            vis
              ? isMobile
                ? pricesBlockVisibleMobile
                : pricesBlockVisible
              : pricesBlock
          }
        >
          <WrapSizes>
            <FaStarOfLife size={'5px'} />
            <p> {t('gallaryPage.pictureInfo.order.cm')}</p>
          </WrapSizes>

          <ul>
            {leng === 'ua'
              ? list.map((item, index) => <li key={index}>{item}</li>)
              : listEn.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </BGPriceBlock>
      </Price>
    </Desctiption>
  );
};
