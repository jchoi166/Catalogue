import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  const book = props.book

  return (
    <div className={classes.modal}>
      <header className={classes.header}>
        <h2>{book.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{book.description}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Remove From List</Button>
          <a href={book.buyLink} target="_blank" rel="noopener noreferrer" ><Button>Find A Copy</Button></a>
          <a href={book.url} target="_blank" rel="noopener noreferrer" ><Button>More Info</Button></a>
      </footer>
    </div>
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay 
          book={props.book}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default Modal;