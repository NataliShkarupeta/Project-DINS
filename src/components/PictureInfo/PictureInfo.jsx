// import { ModalCommon } from 'components/common/modal/modal';
import { normalizedDate } from 'pages/Blog/normalizeDate';
import { BASIC_URL } from 'service/basicUrl';
import { H2, Span, Wrap, WrapInfo, WrapInfoFromMe } from './PictureInfo.styled';
import { useTranslation } from 'react-i18next';
import { FaStarOfLife } from 'react-icons/fa';
import { Link, useLocation, useParams } from 'react-router-dom';
import { CommonButton } from 'components/common/commonButton/button';
import { useEffect, useState } from 'react';
import { getPictureById } from 'service/gallertService';
import { useFeatureStore } from 'components/Features/Features/store';

export const PictureInfo = () => {
  const [picture, setPicure] = useState(null);
  const { paintingId } = useParams();
  const leng = useFeatureStore(state => state.leng);
  const location = useLocation();
  const [t] = useTranslation();

console.log('paintingId', paintingId);

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
      <Link to={location.state?.from ?? '/'}>
        <CommonButton text={t('button.back')} />
      </Link>
      {/* <ModalCommon> */}
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

      {/* </ModalCommon> */}
    </>
  );
};

const InfoBlock = () => {
  const [t] = useTranslation();
  return (
    <WrapInfoFromMe>
      <FaStarOfLife size={'10px'} />
      <p> {t('gallaryPage.pictureInfo.info')}</p>
    </WrapInfoFromMe>
  );
};

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
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <div>
        <img src={`${BASIC_URL}/${img}`} alt={title} />
      </div>
      <p>Дата додавання картини {normalizedDate(date)}</p>
    </div>
  );
};

const DescriptionsBlock = ({ title, text }) => {
  return (
    <div>
      <H2>{title}</H2>

      <Span>{text}</Span>
      <InfoBlock />
    </div>
  );
};
