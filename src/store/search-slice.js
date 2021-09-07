import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: { books: [], isLoaded: false },
  reducers: {
    loadBooks(state, action) {
      state.articles = action.payload;
      state.isLoaded = true
    },
  },
});

export const searchByQuery = (query) => {
  return async (dispatch) => {

    const fetchData = async () => {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );

      if (!response.ok) throw new Error("Could not fetch books by that search!");

      const data = await response.json();

      // return data;
      console.log(data)
    };

    try {
      const articleData = await fetchData();
      dispatch(searchActions.loadBooks(articleData));
    } catch (error) {
      console.log(error);
    }
  };
};

export const searchActions = searchSlice.actions;

export default searchSlice;