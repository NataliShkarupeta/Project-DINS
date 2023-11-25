import { ModalCommon } from 'components/common/modal/modal';
import { normalizedDate } from 'pages/Blog/normalizeDate';
import { BASIC_URL } from 'service/basicUrl';

export const PictureInfo = ({ pict }) => {
    console.log(pict)
  const { title1, descriptions, image, createdAt } = pict;
  return (
    <ModalCommon>
      <div>
        <ImageBlock img={image} title={title1} />
        <InfoBlock title={title1} text={descriptions} date={createdAt} />
        <OrderBlock />
      </div>
    </ModalCommon>
  );
};

const OrderBlock=()=>{
    return(
        <form >
            <label>
                <input type="text" />
            </label>
        </form>
    )
}

const ImageBlock = ({ img, title }) => {
  return (
    <>
      <img src={`${BASIC_URL}/${img}`} alt={title} width={'300px'} />
    </>
  );
};

const InfoBlock = ({ title, text, date }) => {
    return (
      <>
        <div>
          <h2>{title}</h2>
          <p>{normalizedDate(date)}</p>
        </div>
        <p>{text}</p>
      </>
    );

};
