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

// export const data = [
//   {
//     author: null,
//     title:
//       "Russian missiles crossed into NATO member Poland, killing 2: U.S. official - CBC News",
//     description:
//       "A senior U.S. intelligence official says Russian missiles crossed into NATO member Poland, killing two people.",
//     url: "https://www.cbc.ca/news/world/russia-missiles-poland-nato-1.6652345",
//     urlToImage:
//       "https://i.cbc.ca/1.6652244.1668535718!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/breaking-news.jpg",
//     publishedAt: "2022-11-15T19:48:58Z",
//     content:
//       "A senior U.S. intelligence official says Russian missiles crossed into NATO member Poland, killing two people.\r\nPolish government spokesperson Piotr Mueller did not immediately confirm the informatio… [+1209 chars]",
//   },
//   {
//     author: null,
//     title:
//       "Trudeau's national security adviser felt convoy protest posed 'a threat to democracy:' documents - CBC News",
//     description:
//       'Prime Minister Justin Trudeau\'s national security and intelligence adviser believed that the convey protesters posed a "threat to democracy," according to a document tabled at the Emergencies Act inquiry.',
//     url: "https://www.cbc.ca/news/politics/lucki-duheme-emergencies-act-rcmp-1.6651907",
//     urlToImage:
//       "https://i.cbc.ca/1.6363110.1645728353!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_620/ottawa-protest-convoy-cleanup.JPG",
//     publishedAt: "2022-11-15T19:29:00Z",
//     content:
//       'Prime Minister Justin Trudeau\'s national security and intelligence adviser believed that the convey protesters posed a "threat to democracy," according to a document tabled at the Emergencies Act inq… [+7292 chars]',
//   },
//   {
//     author: null,
//     title:
//       "Flu shots recommended by province as cases rise sharply - CTV News Regina",
//     description:
//       "Influenza cases are quickly rising in Saskatchewan with the majority of the increase being seen in children and young adults.",
//     url: "https://regina.ctvnews.ca/sha-recommends-vaccines-as-influenza-cases-rise-in-sask-1.6153820",
//     urlToImage:
//       "https://www.ctvnews.ca/content/dam/ctvnews/en/images/2022/11/15/dr--shahab-1-6153821-1668535274951.jpg",
//     publishedAt: "2022-11-15T19:23:29Z",
//     content:
//       "Influenza cases are quickly rising in Saskatchewan with the majority of the increase being seen in children and young adults.\r\nAccording to the Saskatchewan Health Authority (SHA), 61 per cent of inf… [+2818 chars]",
//   },
// ];
