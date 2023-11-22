import { Button } from "./button.styled";

export const CommonButton = ({styled, text, clickHandler }) => {
  return (
    <Button style={styled} onClick={clickHandler}>
      {text}{' '}
    </Button>
  );
};
