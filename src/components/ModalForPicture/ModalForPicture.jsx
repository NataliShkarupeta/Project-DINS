import { useEffect, useState } from 'react';
import { changeInfoPicture } from 'service/gallertService';
import {
  Button,
  ContainerPost,
  Input,
  ModalContainer,
  Overlay,
  Text,
  Title,
  WrapButtonsModal,
} from './ModalForPicture.styled';
// import { useFeatureStore } from 'components/Features/Features/store';

export const ModalChangePicture = ({
  text,
  descriptions,
  textButton,
  close,
  textButton1,
  pictureForChange,
}) => {
  const [changePicture, setchangePicture] = useState(false);


  useEffect(() => {
    const closeEsc = e => {
      if (e.keyCode === 27) {
        close(false);
      }
    };
    window.addEventListener('keydown', closeEsc);
    return () => window.removeEventListener('keydown', closeEsc);
  }, [close]);

  const onClose = evt => {
    if (evt.currentTarget === evt.target) {
      close(false);
    }
  };
  // const leng = useFeatureStore(state => state.leng);

  const submitChange = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const descriptions = formData.get('descriptions');
    const descriptionsEn = formData.get('descriptionsEn');
    const inStock = formData.get('inStock');
    const inStockEn = formData.get('inStockEn');

    const newInfo = {
      descriptions,
      inStock,
      inStockEn,
      descriptionsEn,
    };
    changeInfoPicture(pictureForChange, newInfo);
    close(false);
  };
  const handelSubmit = e => {
    e.preventDefault();

    const form = document.querySelector('#formElement');
    const formData = new FormData(form);
    const secret = formData.get('text');

    if (secret.toUpperCase() === 'MOYAVERA25') {
      return setchangePicture(true);
    } else {
      alert('secret key is not correct');
    }
    form.reset();
  };

  return (
    <>
      {!changePicture ? (
        <Overlay onClick={onClose}>
          <ModalContainer>
            <Title>{text}</Title>
            <form id="formElement" onSubmit={handelSubmit}>
              <Text>{descriptions}</Text>
              <input type="password" name="text" required />
              <WrapButtonsModal>
                <Button type="submit" onClick={handelSubmit}>
                  {textButton}
                </Button>
                <Button type="button" onClick={() => close(false)}>
                  {textButton1}
                </Button>
              </WrapButtonsModal>
            </form>
          </ModalContainer>
        </Overlay>
      ) : (
        <Overlay onClick={onClose}>
          <ContainerPost
            style={{ width: '80vw', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <h2>{pictureForChange.title}</h2>
            <form onSubmit={submitChange}>
              <Input
                defaultValue={pictureForChange.descriptions}
                type="text"
                name="descriptions"
              />
               <input
                defaultValue={pictureForChange.inStock}
                type="text"
                name="inStock"
              />
              <input
                defaultValue={pictureForChange.inStockEn}
                type="text"
                name="inStockEn"
              />

              <WrapButtonsModal>
                <Button type="submit">Змінити</Button>
                <Button onClick={onClose}>{textButton1}</Button>
              </WrapButtonsModal>
            </form>
          </ContainerPost>
        </Overlay>
      )}
    </>
  );
};
