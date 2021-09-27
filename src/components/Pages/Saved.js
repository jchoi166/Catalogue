import { useState } from "react";
import { useSelector } from "react-redux";

import classes from "./Saved.module.css";

import PageHeader from "../Layout/PageHeader";
import SavedItem from "../UI/Saved/SavedItem";
import Modal from "../UI/Modal";
import Empty from "../UI/Empty";

const Saved = () => {

  const savedBooks = useSelector((state) => state.savedSlice.savedBooks);
  const isLoggedIn = useSelector((state) => state.authSlice.isLoggedIn);

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [modalData, setModalData] = useState({});

  const openModalHandler = (book) => {
    setModalIsVisible(true);
    setModalData(book);
  };

  const closeModalHandler = () => {
    setModalIsVisible(false);
  };

  return (
    <section>
      <PageHeader
        title={"Saved"}
        caption={"View your bookmarked books here!"}
      />
      {isLoggedIn && (
        <div className={classes.saved}>
          {savedBooks &&
            savedBooks.map((book) => (
              <SavedItem
                onOpenModal={openModalHandler}
                key={book.id}
                book={book}
              />
            ))}
          {savedBooks.length === 0 && (
            <Empty
              header="There are no saved books at this time"
              message="Find new books in the 'Find A Book' section and bookmark any that you would like to read in the future :)"
            />
          )}
        </div>
      )}
      {!isLoggedIn && (
        <Empty
          header="Its seems you are not logged in!"
          message="Please log in or create an account to save books to your library"
        />
      )}
      {modalIsVisible && (
        <Modal book={modalData} onClose={closeModalHandler}></Modal>
      )}
    </section>
  );
};

export default Saved;
