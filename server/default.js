import topNews from "./constants/data.js";
import News from "./model/schema.js";

const DefaultData = async () => {
  try {
    await News.deleteMany({});
    await News.insertMany(topNews);
    console.log("Data imported successfully");
  } catch (error) {
    console.log(`Error: `, error.message);
  }
};

export default DefaultData;
