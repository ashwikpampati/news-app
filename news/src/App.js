import "./App.css";
import {
  getBusiness,
  getClimate,
  getNews,
  getEntertainment,
  getHealth,
  getFifa,
} from "./service/api";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer";
import Articles from "./components/Articles";
import Business from "./components/Business";
import Climate from "./components/Climate";
import Entertainment from "./components/Entertainment";
import Health from "./components/Health";
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

  //Getting Business news
  useEffect(() => {
    if (path === "/business") {
      console.log("In business page");
      BusinessNews().then((json) => {
        setSearchResults(json);
      });
    }
  }, [path]);
  const BusinessNews = async () => {
    let response = await getBusiness();
    // console.log(response.data);
    setNews(response.data);
    return response.data;
  };

  //Getting Climate news
  useEffect(() => {
    if (path === "/climate") {
      console.log("In Climate page");
      ClimateNews().then((json) => {
        setSearchResults(json);
      });
    }
  }, [path]);
  const ClimateNews = async () => {
    let response = await getClimate();
    // console.log(response.data);
    setNews(response.data);
    return response.data;
  };

  //Getting Entertainment news
  useEffect(() => {
    if (path === "/entertainment") {
      console.log("In Entertainment page");
      EntertainmentNews().then((json) => {
        setSearchResults(json);
      });
    }
  }, [path]);
  const EntertainmentNews = async () => {
    let response = await getEntertainment();
    // console.log(response.data);
    setNews(response.data);
    return response.data;
  };

  //Getting Health news
  useEffect(() => {
    if (path === "/health") {
      console.log("In Health page");
      HealthNews().then((json) => {
        setSearchResults(json);
      });
    }
  }, [path]);
  const HealthNews = async () => {
    let response = await getHealth();
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
        <Route
          path="/business"
          element={<Business searchResults={searchResults} />}
        />
        <Route
          path="/climate"
          element={<Climate searchResults={searchResults} />}
        />
        <Route
          path="/entertainment"
          element={<Entertainment searchResults={searchResults} />}
        />
        <Route
          path="/health"
          element={<Health searchResults={searchResults} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
