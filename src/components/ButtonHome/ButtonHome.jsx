import { useTranslation } from "react-i18next"

export const ButtonHome =()=>{
const[t]=useTranslation();

    return <button> {t('button.buttonHome')}</button>;
}