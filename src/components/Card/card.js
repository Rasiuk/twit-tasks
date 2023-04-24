import logoGoIt from "../../images/logo-go-it.png";

import {
  Avatar,
  BackgroundImages,
  BoxAvatar,
  InformationBox,
  ListCard,
  Subtitle,
} from "./card.styled";
import { Button } from "../Button/Button";
import { useEffect, useState } from "react";
export const Card = ({ user: { id, tweets, followers, avatar } }) => {
  const [isFollowing, setIsFollowing] = useState(
    JSON.parse(localStorage.getItem(`${id}-isFollowing`)) ?? false
  );
  const [followersNum, setFollowersNum] = useState(
    JSON.parse(localStorage.getItem(`${id}-followers`)) ?? followers
  );
  useEffect(() => {
    localStorage.setItem(`${id}-isFollowing`, JSON.stringify(isFollowing));
    localStorage.setItem(`${id}-followers`, JSON.stringify(followersNum));
  }, [id, isFollowing, followersNum]);
  const handleClickOnFollow = () => {
    setIsFollowing(true);
    setFollowersNum(followersNum + 1);
  };
  const handleClickOnFollowing = () => {
    setIsFollowing(false);
    setFollowersNum(followersNum - 1);
  };
  return (
    <ListCard>
      <BackgroundImages>
        <img src={logoGoIt} width={76} height={22} alt="goit-logo" />
      </BackgroundImages>
      <BoxAvatar>
        <Avatar src={avatar} width={80} height={80} alt="avatar" />
      </BoxAvatar>
      <InformationBox>
        <Subtitle>tweets : {tweets}</Subtitle>
        <Subtitle>{followersNum.toLocaleString("en-US")} followers</Subtitle>
        {!isFollowing ? (
          <Button
            onClick={handleClickOnFollow}
            text={"Follow"}
            color={"#ebd8ff"}
          />
        ) : (
          <Button
            onClick={handleClickOnFollowing}
            text={"Following"}
            color={"#5CD3A8"}
          />
        )}
      </InformationBox>
    </ListCard>
  );
};
