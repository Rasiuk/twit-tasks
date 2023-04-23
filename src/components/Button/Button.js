import { StyledButton } from "./Button.styled";

export const Button = ({ text, color, onClick }) => {
  return (
    <StyledButton
      onClick={onClick}
      style={{ background: `${color}` }}
      type="submit"
    >
      {text}
    </StyledButton>
  );
};
