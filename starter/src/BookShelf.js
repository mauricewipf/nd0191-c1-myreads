const BookShelf = ({categoryname, books}) => {
    return (
        <div>
            <h2 className="bookshelf-title">{categoryname}</h2>
            <div className="bookshelf-books">
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
                                            backgroundImage: 'url(%s)'.replace('%s', book.imageLinks.thumbnail)
                                        }}
                                    ></div>
                                    <div className="book-shelf-changer">
                                        <select value={book.shelf} onChange={ () => {} }>
                                            <option value="none" disabled>
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
                                <div className="book-authors">{book.authors.join(", ")}</div>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default BookShelf;
