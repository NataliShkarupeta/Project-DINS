import { ModalCommon } from 'components/common/modal/modal';
import { normalizedDate } from 'pages/Blog/normalizeDate';
import { BASIC_URL } from 'service/basicUrl';

export const PictureInfo = ({ pict }) => {
    console.log(pict)
  const { title1, descriptions, image, createdAt } = pict;
  return (
    <ModalCommon>
      <img src={`${BASIC_URL}/${image}`} alt={title1} width={"300px"}/>
      <InfoBlock title={title1} text={descriptions} date={createdAt} />
    </ModalCommon>
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
