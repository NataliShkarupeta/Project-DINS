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
} from './PictureInfo.styled';
import { FaStarOfLife } from 'react-icons/fa';
import { CommonButton } from 'components/common/commonButton/button';
import { useState } from 'react';
import { HiCursorClick } from 'react-icons/hi';
import { BsExclamation } from 'react-icons/bs';
import { BorderTop, MiddleLine } from 'components/Gallery/Gallery.styled';
import { BGPriceBlock, Input } from 'pages/ListPictures/ListPictures.styled';

const styles = {
  width: '100px',
  backgroundColor: 'transparent',
};

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

export const OrderBlock = ({ tit, size, inStock }) => {
  const [selectedItem, setSelectedItem] = useState(
    inStock === 'так' ? 'Купляю' : 'Замовляю'
  );
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
      <H3>Замовити або придбати картину</H3>
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
              Зазначте свою адресу, я зможу сформувати відправлення і дізнатись
              для Вас орієнтовну вартість доставки.
              <Prepayment>
                <FaStarOfLife size={'10px'} color="purple" />
                <p> Послуги доставки оплачуються замовником</p>
              </Prepayment>
              <TextArea
                name="adress"
                placeholder="Україна,м.Київ,Дарницький район"
              ></TextArea>
            </Label>
          </div>
        </WrapInputFields>
        <CommonButton
          styled={styles}
          type="submit"
          text={'Відправити замовлення'}
        />
      </Form>
    </WrapOrderBlock>
  );
};

const IfBuy = ({ name, size }) => {
  return (
    <WrapIfBuy>
      Ви обрали для придбання картину <H4>"{name}"</H4>, її розмір
      <Size>{size} </Size>.
      <p>
        Якщо Ви бажаєте придбати цю картину іншого розміру, тисніть на кнопочку
        "Замовляю", і оберіть для себе бажаний розмір полотна.
      </p>
    </WrapIfBuy>
  );
};

const SelectOrderOrBuy = ({ setSelectedItem, selectedItem }) => {
  const onChangeHandler = event => {
    setSelectedItem(event.target.name);
  };
  return (
    <div>
      <label>
        <Input
          name="Купляю"
          type="checkbox"
          onChange={onChangeHandler}
          checked={selectedItem === 'Купляю'}
        />
        <span>Купляю</span>
      </label>
      <label>
        <Input
          name="Замовляю"
          type="checkbox"
          onChange={onChangeHandler}
          checked={selectedItem === 'Замовляю'}
        />
        <span>Замовляю</span>
      </label>
    </div>
  );
};

const IfOrder = ({ size }) => {
  const checkList = ['30*40', '40*40', '40*50', '40*60', '50*70', '100*110'];
  return (
    <div style={{ width: '50%' }}>
      <Label>
        <LableText>
          Оберіть розмір полотна яке найкраще підійде Вашому інтерʼєру
        </LableText>
        <Select name="selectedSize" defaultValue={size}>
          {checkList.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </Select>
      </Label>
<br />
      <TextExplanation>
        <BsExclamation />
        Прошу зауважити, що термін виконання замовлення може зайняти від 2
        тижнів до 2 місяців. Це залежить від загруженості митця і розміру
        обраного Вами полотна. Строк виконання замовлення буде зазначений у
        зворотньому листі-підтверджені.
      </TextExplanation>
    </div>
  );
};

const DescriptionPreOrder = () => {
  const [vis, setVis] = useState(false);

  const list = [
    'до 40*60 - 70 y.e',
    'до 70*80 -120 y.e',
    'до 100*110 - 250 y.e',
    'від 100*110 - договірна(в приватному листуванні)',
  ];
  return (
    <Desctiption>
      Цей сайт не є інтернет магазином, тому запити на придбання, або замовлення
      картин відправляються безпосередньо автору. Після опрацювання замовлення
      (протягом доби), Ви отримаєте електронний лист з підтвердженням і
      реквізитами для внесення предоплати.
      <Prepayment>
        <FaStarOfLife size={'10px'} color="purple" />
        Предоплата складає 20% від вартості картин, і !НЕ повертається у випадку
        відхилення замовлення.
      </Prepayment>
      <Price>
        <Text>
          Як тільки предоплата буде зарахована, замовлення буде відправлено на
          зазначену Вами адресу; у випадку замовлення картини - перейде до
          створення )
        </Text>
        <PricePicture onClick={() => setVis(!vis)}>
          <HiCursorClick /> Ознайомитись з вартістю картин{' '}
        </PricePicture>
        <BGPriceBlock style={vis ? pricesBlockVisible : pricesBlock}>
          <WrapSizes >
            <FaStarOfLife size={'5px'} />
            <p> розміри зазначені у сантиметрах</p>
          </WrapSizes>

          <ul>
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </BGPriceBlock>
      </Price>
    </Desctiption>
  );
};
