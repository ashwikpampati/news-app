import News from "../model/schema.js";

export const getNews = async (request, response) => {
  try {
    let data = await News.find({});
    // const { q } = request.query;
    // console.log(q);
    response.status(200).json(data);
  } catch (error) {
    response.status(500).json({ message: data.message });
  }
};
