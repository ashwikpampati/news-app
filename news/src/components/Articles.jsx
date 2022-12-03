import { useEffect, useState } from "react";
import { getNews } from "../service/api.js";
import { Article } from "./Article.jsx";

const Articles = (props) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    dailyNews();
  }, []);
  const dailyNews = async () => {
    let response = await getNews();
    // console.log(response.data);
    setNews(response.data);
  };
  // console.log(
  //   news.filter((element) => element.title.toLowerCase().includes("how"))
  // );
  return (
    <div>
      <p class="text-uppercase fs-3">top headlines</p>
      {news
        .filter((element) => element.title.toLowerCase().includes(props.search))
        .map((data) => {
          return <Article key={data._id} data={data} />;
        })}
    </div>
  );
};

// window.onload = async function () {
//   async function getSearchData() {
//     const response = await getNews();
//     return response.data;
//   }

//   const searchData = await getSearchData();
//   const searchInput = document.querySelector("[data-search]");

//   searchInput.addEventListener("input", (e) => {
//     const value = e.target.value;
//     const filteredSearch = searchData.filter((element) => {
//       return element.title.includes(value);
//     });
//     console.log(filteredSearch);

//     filteredSearch.map((data) => {
//       <Article key={data._id} data={data} />;
//     });
//   });
// };
export default Articles;
