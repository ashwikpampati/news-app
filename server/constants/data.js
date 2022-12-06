import fetch from "node-fetch";

const URL =
  "https://newsapi.org/v2/top-headlines?country=ca&apiKey=743f80bf9d894e8fa7b43ad4d2a15bdb";

async function getHeadlines() {
  const response = await fetch(URL);
  return response.json();
}

const raw = await getHeadlines();

let topNews = raw.articles;
// console.log(topNews);

for (var key in topNews) {
  delete topNews[key].source;
}
// console.log(topNews);

export default topNews;
