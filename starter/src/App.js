import "./App.css";
import {useState} from "react";
import {Route, Routes} from "react-router-dom";
import SearchPage from "./SearchPage";
import MainPage from "./MainPage";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  return (
      <Routes>
        <Route exact path="/" element={
          <MainPage />
        }/>
        <Route path="/search" element={
          <SearchPage />
        }/>
      </Routes>
  );
}

export default App;
