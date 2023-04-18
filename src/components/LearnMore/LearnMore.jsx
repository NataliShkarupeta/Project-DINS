import { useTranslation } from "react-i18next";


export const LearnMore = ({setMore})=>{
  const [t]=useTranslation();


    return (
      <>
        <button onClick={() => setMore(false)}>{t('button.back')}</button>
        <p>QWe</p>
      </>
    );
}