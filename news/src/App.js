import "./App.css";
import { getNews } from "./service/api";
import { getFifa } from "./service/fifaApi";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer";
import Articles from "./components/Articles";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Fifa from "./components/Fifa";

function App() {
  const [news, setNews] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [fifa, setFifa] = useState([]);
  let location = useLocation();

  let path = location.pathname;

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

  useEffect(() => {
    if (path === "/fifa") {
      console.log("in fifa page");
    }
  }, [path]);

  //   useEffect(()=>{
  // getFifa().then(json => {
  //   setFifa(json)
  //   return json;
  // }).then()
  //   },[])

  return (
    <div className="App">
      <Header posts={news} setSearchResults={setSearchResults} />
      <Routes>
        {/* Articles is rendered from Header component */}
        {/* <Articles searchResults={searchResults} /> */}

        <Route path="/" element={<Articles searchResults={searchResults} />} />
        <Route path="/fifa" element={<Fifa />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
