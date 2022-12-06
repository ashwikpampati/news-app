import fetch from "node-fetch";

const URL =
  "https://newsapi.org/v2/top-headlines?country=ca&category=business&apiKey=743f80bf9d894e8fa7b43ad4d2a15bdb";

async function getBusinessData() {
  const response = await fetch(URL);
  return response.json();
}

const raw = await getBusinessData();

let BusinessNews = raw.articles;

for (var key in BusinessNews) {
  delete BusinessNews[key].source;
}

export default BusinessNews;
