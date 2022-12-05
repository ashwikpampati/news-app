// import { useEffect, useState } from "react";
// import { getNews } from "../service/api.js";
import { Article } from "./Article.jsx";

const Articles = (props) => {
  // console.log(
  //   news.filter((element) => element.title.toLowerCase().includes("how"))
  // );
  const results = props.searchResults.map((data) => (
    <Article key={data._id} data={data} />
  ));
  const content = results?.length ? (
    results
  ) : (
    <article>
      <p>No Matching news articles</p>
    </article>
  );
  return (
    <div>
      <p class="text-uppercase fs-3">top headlines</p>
      {content}
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
