import classes from "./SearchItem.module.css";

import Button from "../Button";

const SearchItem = (props) => {
  const book = props.book;

  const publishDateHandler = (date) => {
     let formattedDate = new Date (date)
     return formattedDate.getFullYear()
  }

  return (
    <div className={classes.item}>
      <div className={classes.image}>
         <a href={book.url} target="_blank" rel="noopener noreferrer">
          <img src={book.image === undefined ? "no image!" : book.image.smallThumbnail}/>
        </a>
      </div>
      <div className={classes.info}>
        <a href={book.url} target="_blank" rel="noopener noreferrer">
          <h3>{book.title}</h3>
        </a>
        <p className={classes.authors}>
          {book.authors && book.authors.length > 1
            ? book.authors.join(", ")
            : book.authors} &middot;
             {' ' + publishDateHandler(book.publishDate)}
        </p>
        <p className={classes.description}>{book.description}</p>
      <div className={classes.actions}>
       <Button>Bookmark</Button><Button>Find a copy</Button>
      </div>
      </div>
    </div>
  );
};

export default SearchItem;
