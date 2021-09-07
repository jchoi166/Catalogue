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
        `https://www.googleapis.com/books/v1/volumes?q=harry+potter&callback=handleResponse`
      );

      if (!response.ok) throw new Error("Could not fetch article data");

      const data = await response.json();

      return data.response.docs;
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