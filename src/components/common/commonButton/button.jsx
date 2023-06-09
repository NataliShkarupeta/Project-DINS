import { Button } from "./button.styled";

export const CommonButton = ({ text, clickHandler }) => {
  return <Button onClick={clickHandler}>{text} </Button>;
};
