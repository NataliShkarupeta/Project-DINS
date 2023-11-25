// import { ModalCommon } from 'components/common/modal/modal';
import { normalizedDate } from 'pages/Blog/normalizeDate';
import { BASIC_URL } from 'service/basicUrl';
import { H2, Span, Wrap, WrapInfo, WrapInfoFromMe } from './PictureInfo.styled';
import { useFeatureStore } from 'components/Features/Features/store';
import { useTranslation } from 'react-i18next';
import { FaStarOfLife } from 'react-icons/fa';
// import { useParams } from 'react-router-dom';

export const PictureInfo = ({ picture }) => {
  // const { paintingId } = useParams();
  const leng = useFeatureStore(state => state.leng);
  console.log(picture);
  const { title1, descriptions, image, createdAt, TitleEn, descriptionsEn } =
    picture;
  return (
    // <ModalCommon>
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

      <OrderBlock />
    </Wrap>
    // </ModalCommon>
  );
};

const InfoBlock=()=>{
      const [t] = useTranslation();
    return (
      <WrapInfoFromMe>
        <FaStarOfLife size={'10px'} />
        <p> {t('gallaryPage.pictureInfo.info')}</p>
      </WrapInfoFromMe>
    );
}

const OrderBlock = () => {
  return (
    <form>
      <label>
        <input type="text" />
      </label>
    </form>
  );
};

const ImageBlock = ({ img, title, date }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' ,flexDirection:'column',justifyContent: 'center'}}>
      <div >
        <img src={`${BASIC_URL}/${img}`} alt={title} />
      </div>
      <p>Дата додавання картини {normalizedDate(date)}</p>
    </div>
  );
};

const DescriptionsBlock = ({ title, text}) => {
  return (
    <div>
      <H2>{title}</H2>

      <Span>{text}</Span>
      <InfoBlock />
      
    </div>
  );
};
