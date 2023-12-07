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
} from './PictureInfo.styled';
import { FaStarOfLife } from 'react-icons/fa';
import { CommonButton } from 'components/common/commonButton/button';
import { useState } from 'react';
import { HiCursorClick } from 'react-icons/hi';
import { BorderTop, MiddleLine } from 'components/Gallery/Gallery.styled';

const styles={
    width:'100px',
      backgroundColor:'transparent'

}

const pricesBlock = {
  position: 'absolute',
  visibility: 'hidden',
 
};
const pricesBlockVisible = {
  backgroundColor: '#fff4e4',
  marginTop: '30px',
  padding: '10px 20px',
  position: 'absolute',
  visibility: 'visible',
  right: '-20px',
};

export const OrderBlock = ({ tit }) => {
  const [vis, setVis] = useState(false);
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
  const list = [
    'до 40*60 - 70 y.e',
    'до 70*80 -120 y.e',
    'до 100*110 - 250 y.e',
    'від 100*110 - договірна(в приватному листуванні)',
  ];

  const checkList = ['30*40', '40*40', '40*50', '40*60', '50*70'];

  const submitOrder = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log(tit, formJson);
    form.reset();
  };

  return (
    <WrapOrderBlock>
      <H3>Придбати картину</H3>
      <Desctiption>
        Цей сайт не є інтернет магазином, тому запити на придбання картин
        відправляються безпосередньо автору. Після опрацювання замовлення
        (протягом доби), Ви отримаєте електронний лист з підтвердженням і
        реквізитами для внесення предоплати.
        <Prepayment>
          <FaStarOfLife size={'10px'} color="purple" />
          Предоплата складає 20% від вартості картин, і !НЕ повертається у
          випадку відхилення замовлення.
        </Prepayment>
        <Price>
          <p>
            Як тільки гроші будуть зараховані, Ваша картина почне народжуватись
            ).
          </p>
          <PricePicture onClick={() => setVis(!vis)}>
            <HiCursorClick /> Ознайомитись з вартістю картин{' '}
          </PricePicture>
          <div style={vis ? pricesBlockVisible : pricesBlock}>
            <ul>
              {list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </Price>
      </Desctiption>
      <BorderTop>
        <div></div>
        <MiddleLine></MiddleLine>
        <div></div>
      </BorderTop>
      <Form onSubmit={submitOrder}>
        <WrapInputFields>
          <Label>
            <LableText>
              Оберіть розмір полотна яке найкраще підійде Вашому інтерʼєру
            </LableText>

            <Select name="selectedSize" defaultValue="50*70">
              {checkList.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </Select>
          </Label>

          <div>
            <Label>
              Зазначте свою адресу, і я зможу дізнатись для Вас орієнтовну
              вартість доставки.
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
