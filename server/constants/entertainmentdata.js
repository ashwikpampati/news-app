import fetch from "node-fetch";

const URL =
  "https://newsapi.org/v2/top-headlines?country=ca&category=entertainment&apiKey=743f80bf9d894e8fa7b43ad4d2a15bdb";

async function getEntertainmentData() {
  const response = await fetch(URL);
  return response.json();
}

const raw = await getEntertainmentData();

let EntertainmentNews = raw.articles;

for (var key in EntertainmentNews) {
  delete EntertainmentNews[key].source;
}

export default EntertainmentNews;
