import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
  author: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  url: {
    type: String,
    required: true,
    unique: true,
  },
  urlToImage: {
    type: String,
  },
  publishedAt: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
});

const News = mongoose.model("news", newsSchema);

export default News;
