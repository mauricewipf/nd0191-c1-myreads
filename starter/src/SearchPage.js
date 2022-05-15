import {Link} from "react-router-dom";
import {useState} from "react";
import {search} from "./BooksAPI";

const SearchPage = ({currentBooks, onUpdateShelf}) => {

    const [query, setQuery] = useState("");
    const [books, setBooks] = useState([]);

    const updateQuery = async (query) => {
        setQuery(query);
        const results = query.length > 0
            ? await search(query, 100)
            : [];

        const foundBooks = Array.isArray(results) ? results : [];

        const booksWithShelf = foundBooks.map((book) => {
            const currentBook = currentBooks.find((currentBook) => currentBook.id === book.id);
            if (!!currentBook) {
                return currentBook;
            } else {
                return {...book, shelf: "none"};
            }
        })

        setBooks(booksWithShelf);
    };

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link className="close-search" to="/">Close</Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                        value={query}
                        onChange={(event) => updateQuery(event.target.value)}
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {books.map((book) => (
                        <li key={book.id}>
                            <div className="book">
                                <div className="book-top">
                                    <div
                                        className="book-cover"
                                        style={{
                                            width: 128,
                                            height: 193,
                                            backgroundImage: 'url(%s)'.replace('%s', book.imageLinks?.thumbnail)
                                        }}
                                    ></div>
                                    <div className="book-shelf-changer">
                                        <select value={book.shelf} onChange={ (event) => onUpdateShelf(book, event) }>
                                            <option value="disabled" disabled>
                                                Move to...
                                            </option>
                                            <option value="currentlyReading">
                                                Currently Reading
                                            </option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                            <option value="none">None</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="book-title">{book.title}</div>
                                <div className="book-authors">{book.authors?.join(", ")}</div>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default SearchPage;
