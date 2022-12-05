import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const handleSearchChange = (e) => {
    if (!e.target.value) return props.setSearchResults(props.posts);

    const resultsArray = props.posts.filter((posts) =>
      posts.title.toLowerCase().includes(e.target.value)
    );

    props.setSearchResults(resultsArray);
  };
  // return (
  //   <React.Fragment>
  //     <nav class="navbar bg-light mb-3">
  //       <div class="container-fluid">
  //         <span class="navbar-brand m-3 fs-2">
  //           <ion-icon name="newspaper-outline"></ion-icon> NewsApp
  //         </span>
  //         <input
  //           type="search"
  //           placeholder="Search"
  //           onChange={handleSearchChange}
  //         />
  //       </div>
  //       <ul>
  //         <li>
  //           <Link to="/">Home</Link>
  //         </li>
  //         <li>
  //           <Link to="/fifa">Fifa</Link>
  //         </li>
  //       </ul>
  //     </nav>
  //   </React.Fragment>
  // );

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <span class="navbar-brand m-3 fs-2">
            <ion-icon name="newspaper-outline"></ion-icon> NewsApp
          </span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 lead fw-normal">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/fifa">
                FIFA
              </a>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              onChange={handleSearchChange}
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
