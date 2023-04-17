import { FooterContainer } from "./Footer.styled"
import { useTranslation } from 'react-i18next';
import { DateTime } from 'luxon';

const getGreetingTime = (d = DateTime.now()) => {
  const split_afternoon = 12; // 24hr time to split the afternoon
  const split_evening = 17; // 24hr time to split the evening
  const currentHour = parseFloat(d.toFormat("H"));

  if (currentHour >= split_afternoon && currentHour <= split_evening) {
    return 'afternoon';
  } else if (currentHour >= split_evening) {
    return 'evening';
  }
  return 'morning';
};




export const Footer=()=>{
    const [t] = useTranslation();
   

    return (
      <FooterContainer>
        <div>
          {/* <div>{t('footer.date', { val: 2000 })}</div> */}
          <div>
            {t('footer.date', { date: new Date(), context: getGreetingTime() })}
          </div>
        </div>
      </FooterContainer>
    );
}