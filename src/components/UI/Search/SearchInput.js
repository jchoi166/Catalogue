import { useState } from "react";
import { useDispatch } from "react-redux";

import classes from "./SearchInput.module.css";
import { searchByQuery } from "../../../store/search-slice";

const SearchInput = (props) => {
  const [currentInput, setCurrentInput] = useState("");
  const dispatch = useDispatch()


  const inputChangeHandler = (event) => {
    setCurrentInput(event.target.value);
  };

  const formatInput = (input) => input.replace(/ /gi, "+")

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const query = formatInput(currentInput)
    // console.log(query + '  has been submitted!')
    dispatch(searchByQuery(query))
  };

  return (
    <form className={classes.inputForm} onSubmit={formSubmitHandler}>
      <div className={classes.inputContainer}>
        <input
          type="text"
          onChange={inputChangeHandler}
          placeholder="Search for a book..."
          value={currentInput}
        />
        <i className={`fas fa-search ${classes.searchIcon}`} onClick={formSubmitHandler}></i>
      </div>
    </form>
  );
};

export default SearchInput;
