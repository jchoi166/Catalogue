import { createSlice } from "@reduxjs/toolkit";
// import { loaderActions } from "./loader-slice";

const savedSlice = createSlice({
  name: "saved",
  initialState: { savedBooks: [], changed: false, isLoaded: false },
  reducers: {
    setBooks(state, action) {
      state.savedBooks = action.payload;
    },
    addBook(state, action) {
      state.savedBooks.push(action.payload)
      state.changed = true
    },
    removeBook(state, action) {
      //  state.books = state.books - action.payload
    },
  },
});

export const savedActions = savedSlice.actions;

export default savedSlice


export const fetchSavedBooks = (userId) => {
  return async (dispatch) => {

    const fetchData = async () => {
      const response = await fetch(
        `https://catalogue-6cbbf-default-rtdb.firebaseio.com/users/${userId}.json`
      );

      if (!response.ok) throw new Error("Could not fetch books by that search!");

      const data = await response.json();
      
      // return transformedData;
      console.log(data)
      return data
    };

    try {
      const bookData = await fetchData();
      dispatch(savedActions.setBooks(bookData.savedBooks))
      // dispatch(searchActions.loadBooks(bookData));
    } catch (error) {

      console.log(error)
    }
  };
};

export const sendNewBooks = (booksArray, userId) => {
  // return async (dispatch) => {
    console.log('function is being reached')
    const sendData = async () => {

      const response = await fetch(
        `https://catalogue-6cbbf-default-rtdb.firebaseio.com/users/${userId}.json`,
        {
          method: "PUT",
          body: JSON.stringify({
            name: 'Jin',
            savedBooks: booksArray
          }),
          headers: {
            "Content-Type": "application/json",
          }
        }
      );
      if (!response.ok) throw new Error("Could not fetch books by that search!");
    }

    try {
      sendData()
      console.log('book has been saved!')
    } catch (error) {
      console.log(error)
    }
  
};

