import express from "express";
import { getNews } from "../controller/news-controller.js";
import fifaNews from "../constants/fifadata.js";
import HealthNews from "../constants/healthdata.js";
import EntertainmentNews from "../constants/entertainmentdata.js";
import BusinessNews from "../constants/businessdata.js";
import ClimateNews from "../constants/climatedata.js";

const Route = express.Router();

Route.get("/news", getNews);

Route.get("/fifa", (req, res) => {
  res.send(fifaNews);
});

Route.get("/health", (req, res) => {
  res.send(HealthNews);
});

Route.get("/entertainment", (req, res) => {
  res.send(EntertainmentNews);
});

Route.get("/climate", (req, res) => {
  res.send(ClimateNews);
});

Route.get("/business", (req, res) => {
  res.send(BusinessNews);
});

export default Route;
