import axios from "axios";
axios.defaults.baseURL = "https://643145a9d4518cfb0e5dde1e.mockapi.io/";
export const getAllTweetTasks = async () => {
  try {
    return await axios.get("/users");
  } catch (error) {}
};
