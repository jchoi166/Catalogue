import { useSelector } from "react-redux";
import classes from "./SearchItem.module.css";

import Button from "../Button";

const SearchItem = (props) => {
  const book = props.book;

  const isLoggedIn = useSelector(state => state.authSlice.isLoggedIn)

  const publishDateHandler = (date) => {
    let formattedDate = new Date(date);
    return formattedDate.getFullYear();
  };

  const saveBook = () => {
    props.onSaveBook(book)
  }

  return (
    <div className={classes.item}>
      <div className={classes.image}>
        <a href={book.url} target="_blank" rel="noopener noreferrer">
          {!book.image && 
          <div className={classes.noImage}>
            <i class="fas fa-cat"></i>
            <p>Image not available!</p>
            </div>}
          {book.image && <img src={book.image.smallThumbnail} alt={book.title}/>}
        </a>
      </div>
      <div className={classes.info}>
        <h3>
          <a href={book.url} target="_blank" rel="noopener noreferrer">
            {book.title}
          </a>
        </h3>
        <p className={classes.authors}>
          {book.authors && book.authors.length > 1
            ? book.authors.join(", ")
            : book.authors}{" "}
          &middot;
          {" " + publishDateHandler(book.publishDate)}
        </p>
        <p className={classes.description}>{book.description}</p>
        <div className={classes.actions}>
          {isLoggedIn && <div>
            {!props.isSaved && <Button onClick={saveBook}>Bookmark</Button>}
            {props.isSaved && <Button className={classes.disabled} disabled>Bookmarked!</Button>}
          </div>}
          <a href={book.buyLink} target="_blank" rel="noopener noreferrer">
            <Button>Find a copy</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
