import { Article } from "./Article.jsx";
import { useState, useEffect } from "react";
import { getFifa } from "../service/fifaApi.js";
const Fifa = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    dailyNews();
  }, []);
  const dailyNews = async () => {
    let response = await getFifa();
    // console.log(response.data);
    setNews(response.data);
  };

  // console.log(
  //   news.filter((element) => element.title.toLowerCase().includes("how"))
  // );
  //   const results = props.searchResults.map((data) => (
  //     <Article key={data._id} data={data} />
  //   ));
  //   const content = results?.length ? (
  //     results
  //   ) : (
  //     <article>
  //       <p>No Matching news articles</p>
  //     </article>
  //   );
  return (
    <div>
      <p class="text-uppercase fs-3">FIFA</p>
      {news.map((data) => {
        return <Article key={data.url} data={data} />;
      })}
    </div>
  );
};

export default Fifa;
