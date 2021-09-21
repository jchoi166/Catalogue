import { createSlice } from "@reduxjs/toolkit";
// import { loaderActions } from "./loader-slice";

const savedSlice = createSlice({
  name: "saved",
  initialState: { savedBooks: [], changed: false, isLoaded: false, savedIds: [] },
  reducers: {
    setBooks(state, action) {
      state.savedBooks = action.payload.savedBooks;
      state.savedIds = action.payload.savedIds;
    },
    addBook(state, action) {
      state.savedBooks.push(action.payload.book)
      state.savedIds.push(action.payload.id)
      state.changed = true
    },
    removeBook(state, action) {
      // will receive id in action payload
      const bookIndex = state.savedBooks.findIndex(book => book.id === action.payload)
      state.savedBooks.splice(bookIndex, 1)

      const idIndex = state.savedIds.indexOf(action.payload)
      state.savedIds.splice(idIndex, 1)

      state.changed = true
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
      const savedIds = bookData.savedBooks.map(book => book.id)
      dispatch(savedActions.setBooks({
        savedBooks: bookData.savedBooks,
        savedIds
      }))
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
