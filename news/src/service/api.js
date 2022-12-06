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

export const getBusiness = async () => {
  const URL = "http://localhost:8000";
  try {
    return await axios.get(`${URL}/business`);
  } catch (error) {
    console.log("Error while calling api ", error);
  }
};

export const getClimate = async () => {
  const URL = "http://localhost:8000";
  try {
    return await axios.get(`${URL}/climate`);
  } catch (error) {
    console.log("Error while calling api ", error);
  }
};

export const getEntertainment = async () => {
  const URL = "http://localhost:8000";
  try {
    return await axios.get(`${URL}/entertainment`);
  } catch (error) {
    console.log("Error while calling api ", error);
  }
};

export const getHealth = async () => {
  const URL = "http://localhost:8000";
  try {
    return await axios.get(`${URL}/health`);
  } catch (error) {
    console.log("Error while calling api ", error);
  }
};
