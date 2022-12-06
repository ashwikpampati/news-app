import fetch from "node-fetch";

const URL =
  "https://newsapi.org/v2/everything?q=fifa&pageSize=15&apiKey=743f80bf9d894e8fa7b43ad4d2a15bdb";

async function getFifaData() {
  const response = await fetch(URL);
  return response.json();
}

const raw = await getFifaData();

let fifaNews = raw.articles;

for (var key in fifaNews) {
  delete fifaNews[key].source;
}

export default fifaNews;
