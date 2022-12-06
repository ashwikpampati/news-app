import fetch from "node-fetch";

const URL =
  "https://newsapi.org/v2/top-headlines?country=ca&category=health&apiKey=743f80bf9d894e8fa7b43ad4d2a15bdb";

async function getHealthData() {
  const response = await fetch(URL);
  return response.json();
}

const raw = await getHealthData();

let HealthNews = raw.articles;

for (var key in HealthNews) {
  delete HealthNews[key].source;
}

export default HealthNews;
