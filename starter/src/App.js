import "./App.css";
import {Route, Routes} from "react-router-dom";
import SearchPage from "./SearchPage";
import MainPage from "./MainPage";

function App() {

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
