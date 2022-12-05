import axios from "axios";

export const getFifa = async () => {
  const URL = "http://localhost:8000";
  try {
    return await axios.get(`${URL}/fifa`);
  } catch (error) {
    console.log("Error while calling api ", error);
  }
};
