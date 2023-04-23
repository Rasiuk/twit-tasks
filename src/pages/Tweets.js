import { useEffect, useRef, useState } from "react";
import { CardList } from "../components/CarsList/CardList";
import { getAllTweetTasks } from "../servises/Fetchs";
import { useLocation } from "react-router-dom";

export const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? "/" ?? "/tweets");
  useEffect(() => {
    getAllTweetTasks().then((data) => setUsers(data.data));
    setIsLoading(false);
  }, [isLoading]);
  return <CardList users={users} backLink={backLinkLocationRef.current} />;
};
