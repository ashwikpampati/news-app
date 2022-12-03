import { useState } from "react";
import Articles from "./Articles.jsx";
import React from "react";

const Header = () => {
  const [query, setQuery] = useState("");

  // console.log(query);
  return (
    <React.Fragment>
      <nav class="navbar bg-light mb-3">
        <div class="container-fluid">
          <span class="navbar-brand m-3 fs-2">
            <ion-icon name="newspaper-outline"></ion-icon> NewsApp
          </span>
          <input
            type="search"
            placeholder="Search"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </nav>
      <Articles search={query} />
    </React.Fragment>
  );
};

// const dailyNews = async () => {
//   let response = await getNews();
//   // console.log(response.data);
// };
// dailyNews();
export default Header;
