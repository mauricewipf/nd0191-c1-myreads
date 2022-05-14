import {Link} from "react-router-dom";
import BookShelf from "./BookShelf";

const MainPage = ({books}) => {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <BookShelf categoryname="Currently Reading" books={books}/>
                <BookShelf categoryname="Want to Read" books={books}/>
                <BookShelf categoryname="Read" books={books}/>
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
    );
}

export default MainPage;
