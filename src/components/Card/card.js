import logo from "../../logo.svg";
import { Avatar, BoxAvatar, ListCard } from "./card.styled";
export const Card = () => {
  return (
    <ListCard>
      <BoxAvatar>
        <Avatar src={logo} width={80} height={80} alt="avatar" />
      </BoxAvatar>
      <div>
        <h3>name</h3>
        <p>twits</p>
        <p>followers</p>
        <button type="button">Follow</button>
      </div>
    </ListCard>
  );
};
