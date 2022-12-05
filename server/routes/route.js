import express from "express";
import { getNews } from "../controller/news-controller.js";
import fifaNews from "../constants/fifadata.js";
const Route = express.Router();

Route.get("/news", getNews);

Route.get("/fifa", (req, res) => {
  res.send(fifaNews);
});

export default Route;
