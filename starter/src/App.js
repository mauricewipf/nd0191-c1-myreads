import "./App.css";
import {Route, Routes} from "react-router-dom";
import SearchPage from "./SearchPage";
import MainPage from "./MainPage";
import {useEffect, useState} from "react";
import {getAll, update} from "./BooksAPI";

function App() {

    const [books, setBooks] = useState([]);

    const updateShelf = async (book, event) => {
        const newShelf = event.target.value;
        update(book, newShelf);

        const newBooks = books.map((b) => {
            if (b.id === book.id) {
                return {...b, shelf: newShelf}
            } else {
                return b;
            }
        });
        setBooks(newBooks);
    };

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
          <MainPage books={books} onUpdateShelf={updateShelf} />
        }/>
        <Route path="/search" element={
          <SearchPage books={books} />
        }/>
      </Routes>
  );
}

export default App;
