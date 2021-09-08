import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: { books: [], isLoaded: false },
  reducers: {
    loadBooks(state, action) {
      state.books = action.payload;
      state.isLoaded = true
    },
  },
});

export const searchByQuery = (query) => {
  return async (dispatch) => {

    const fetchData = async () => {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40`
      );

      if (!response.ok) throw new Error("Could not fetch books by that search!");

      const data = await response.json();
      const transformedData = data.items.map(item => {

         return {
            title: item.volumeInfo.title,
            authors: item.volumeInfo.authors,
            publishDate: item.volumeInfo.publishedDate,
            description: item.volumeInfo.description,
            buyLink: item.saleInfo.buyLink,
            url: item.volumeInfo.infoLink,
            image: item.volumeInfo.imageLinks
         }
      })
      // console.log(transformedData)
      console.log(data)
      return transformedData;
    };

    try {
      const bookData = await fetchData();
      dispatch(searchActions.loadBooks(bookData));
    } catch (error) {
      console.log(error);
    }
  };
};

export const searchActions = searchSlice.actions;

export default searchSlice;