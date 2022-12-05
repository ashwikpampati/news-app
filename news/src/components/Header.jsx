import React from "react";

const Header = (props) => {
  const handleSearchChange = (e) => {
    if (!e.target.value) return props.setSearchResults(props.posts);

    const resultsArray = props.posts.filter((posts) =>
      posts.title.toLowerCase().includes(e.target.value)
    );

    props.setSearchResults(resultsArray);
  };
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
            onChange={handleSearchChange}
          />
        </div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/fifa">Fifa</a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Header;
