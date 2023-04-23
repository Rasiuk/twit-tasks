import { useEffect, useState } from "react";
import { CardList } from "../components/CarsList/CardList";
import { getAllTweetTasks } from "../servises/Fetchs";

export const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getAllTweetTasks().then((data) => setUsers(data.data));
    setIsLoading(false);
  }, [isLoading]);
  return <CardList users={users} />;
};
