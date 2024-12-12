import { Button } from "./styles";
export const ButtonComponent = ({ onClick, title }) => {
  return (
    <Button key={title} onClick={onClick}>
      {title}
    </Button>
  );
};
