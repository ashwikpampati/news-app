import { useEffect, useState } from "react";
import { getNews } from "../service/api.js";

import { Article } from "./Article.jsx";

const Articles = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    dailyNews();
  }, []);
  const dailyNews = async () => {
    let response = await getNews();
    // console.log(response.data);
    setNews(response.data);
  };
  return (
    <div>
      <p class="text-uppercase fs-3">top headlines</p>
      {news.map((data) => {
        return <Article key={data._id} data={data} />;
      })}
    </div>
  );
};

export default Articles;
