import "./App.css";
import { getNews } from "./service/api";
import { getFifa } from "./service/api";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer";
import Articles from "./components/Articles";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Fifa from "./components/Fifa";

function App() {
  const [news, setNews] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  //Location of current page
  let location = useLocation();
  let path = location.pathname;

  //Getting top headlines
  useEffect(() => {
    if (path === "/") {
      console.log("In homepage");
      dailyNews().then((json) => {
        setSearchResults(json);
      });
    }
  }, [path]);
  const dailyNews = async () => {
    let response = await getNews();
    // console.log(response.data);
    setNews(response.data);
    return response.data;
  };

  //Getting fifa news
  useEffect(() => {
    if (path === "/fifa") {
      console.log("In fifa page");
      fifaNews().then((json) => {
        setSearchResults(json);
      });
    }
  }, [path]);
  const fifaNews = async () => {
    let response = await getFifa();
    // console.log(response.data);
    setNews(response.data);
    return response.data;
  };

  return (
    <div className="App">
      <Header posts={news} setSearchResults={setSearchResults} />
      <Routes>
        <Route path="/" element={<Articles searchResults={searchResults} />} />
        <Route path="/fifa" element={<Fifa searchResults={searchResults} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
