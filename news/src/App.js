import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Header />

      {/* Articles is rendered from Header component */}
      {/* <Articles /> */}

      <Footer />
    </div>
  );
}

export default App;
