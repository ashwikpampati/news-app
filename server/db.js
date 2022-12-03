import mongoose from "mongoose";

const Connection = async (username, password) => {
  // const URL = `mongodb+srv://root:root@newsapp.qqtktgg.mongodb.net/?retryWrites=true&w=majority`;
  const URL = `mongodb+srv://${username}:${password}@newsapp.qqtktgg.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error: ", error);
  }
};

export default Connection;
