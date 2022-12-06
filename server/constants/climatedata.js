import fetch from "node-fetch";

const URL =
  "https://newsapi.org/v2/everything?q=climate&pageSize=15&apiKey=743f80bf9d894e8fa7b43ad4d2a15bdb";

async function getClimateData() {
  const response = await fetch(URL);
  return response.json();
}

const raw = await getClimateData();

let ClimateNews = raw.articles;

for (var key in ClimateNews) {
  delete ClimateNews[key].source;
}

export default ClimateNews;
