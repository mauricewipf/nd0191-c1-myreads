import "./App.css";
import {Route, Routes} from "react-router-dom";
import SearchPage from "./SearchPage";
import MainPage from "./MainPage";
import {useEffect, useState} from "react";
import {getAll} from "./BooksAPI";

function App() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        const getBooks = async () => {
            const res = await getAll();
            setBooks(res);
        };
        getBooks();
    }, []);

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
