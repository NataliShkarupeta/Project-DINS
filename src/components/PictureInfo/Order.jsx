import { WrapOrderBlock } from './PictureInfo.styled';
import { FaStarOfLife } from 'react-icons/fa';
import { CommonButton } from 'components/common/commonButton/button';

export const OrderBlock = ({ tit }) => {
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
      </div>
      <form action="" onSubmit={submitOrder}>
        <label htmlFor="">
          Оберіть розмір полотна яке найкраще підійде Вашомуу інтерʼєру
          <select name="selectedSize" defaultValue="50*70">
            {checkList.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </select>
        </label>

        <div>
          <label htmlFor="">
            Зазначте свою адресу, і я зможу дізнатись для Вас орієнтовну
            вартість доставки.
            <div>
              <FaStarOfLife size={'10px'} />
              <p> Послуги доставки оплачуються замовником</p>
            </div>
            <textarea
              name="adress"
              placeholder="Україна,м.Київ,Дарницький район"
              cols="30"
              rows="5"
            ></textarea>
          </label>
        </div>

        <CommonButton type="submit" text={'Відправити замовленя'} />
      </form>
    </WrapOrderBlock>
  );
};
