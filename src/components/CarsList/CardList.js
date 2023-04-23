import { useState } from "react";
import { Button } from "../Button/Button";
import { Card } from "../Card/card";
import { List, TweetBox } from "./CardList.styled";

export const CardList = ({ users }) => {
  const [nextPage, setNextPage] = useState(3);
  const handleMoreCards = (e) => {
    setNextPage(nextPage + 3);
  };
  return (
    <TweetBox>
      <List>
        {users.slice(0, nextPage).map((user) => {
          return <Card key={user.id} user={user} />;
        })}
      </List>

      <Button onClick={handleMoreCards} text={"Load more"} color={"#ebd8ff"} />
    </TweetBox>
  );
};
