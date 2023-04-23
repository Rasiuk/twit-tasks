import logo from "../../logo.svg";
import logoGoIt from "../../images/logo-go-it.png";
// import backgroundImage from "../../images/backgroundImage.png";

import {
  Avatar,
  BackgroundImages,
  BoxAvatar,
  ButtonFollow,
  InformationBox,
  ListCard,
  Subtitle,
} from "./card.styled";
export const Card = () => {
  return (
    <ListCard>
      <BackgroundImages>
        <img src={logoGoIt} width={76} height={22} alt="goit-logo" />
      </BackgroundImages>
      <BoxAvatar>
        <Avatar src={logo} width={80} height={80} alt="avatar" />
      </BoxAvatar>
      <InformationBox>
        <Subtitle>twits</Subtitle>
        <Subtitle>followers</Subtitle>
        <ButtonFollow type="submit">Follow</ButtonFollow>
      </InformationBox>
    </ListCard>
  );
};
