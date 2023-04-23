import { useState } from "react";
import { Button } from "../Button/Button";
import { Card } from "../Card/card";
import { List, TweetBox } from "./CardList.styled";
import { Link } from "../AppBar/AppBar.styled";

export const CardList = ({ users, backLink }) => {
  const [nextPage, setNextPage] = useState(3);
  const handleMoreCards = (e) => {
    console.log(users.length);
    setNextPage(nextPage + 3);
  };
  return (
    <TweetBox>
      <Link to={backLink}>Back</Link>
      <List>
        {users.slice(0, nextPage).map((user) => {
          return <Card key={user.id} user={user} />;
        })}
      </List>
      {nextPage < users.length && (
        <Button
          onClick={handleMoreCards}
          text={"Load more"}
          color={"#ebd8ff"}
        />
      )}
    </TweetBox>
  );
};
