import axios from "axios";

export const getNews = async () => {
  const URL = "http://localhost:8000";
  try {
    return await axios.get(`${URL}/news`);
  } catch (error) {
    console.log("Error while calling api ", error);
  }
};

export const getFifa = async () => {
  const URL = "http://localhost:8000";
  try {
    return await axios.get(`${URL}/fifa`);
  } catch (error) {
    console.log("Error while calling api ", error);
  }
};
