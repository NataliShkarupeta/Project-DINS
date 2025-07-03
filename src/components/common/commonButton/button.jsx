import { Button } from './button.styled';

export const CommonButton = ({ styled, text, clickHandler, href }) => {
  return (
    <Button
      style={styled}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={clickHandler}
    >
      {text}
    </Button>
  );
};
