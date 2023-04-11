import { Head, WrapSender, SmallWrap, ButtonEmail } from './Header.styled';
import { FaEnvelope } from 'react-icons/fa';

export const Header = () => {
  return (
    <Head>
      <p>Logo</p>
      <WrapSender>
        <SmallWrap>
          {' '}
          <FaEnvelope />
          <p>Наталі Шкарупета</p>
        </SmallWrap>
        <>
          <ButtonEmail
            onClick={e => {
              window.location.href = 'mailto:natalinardi.kh@gmail.com';
              e.preventDefault();
            }}
          >
            Напишіть мені листа
          </ButtonEmail>
        </>
      </WrapSender>
    </Head>
  );
};
