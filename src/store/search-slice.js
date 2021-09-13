import { createSlice } from "@reduxjs/toolkit";
// import { loaderActions } from "./loader-slice";

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
   // dispatch(loaderActions.setStatus({
   //    status: 'pending',
   //    title: 'Retrieving',
   //    message: 'Retrieving book data'
   // }))
    const fetchData = async () => {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40`
      );

      if (!response.ok) throw new Error("Could not fetch books by that search!");

      const data = await response.json();
      const transformedData = data.items.map(item => {
         const formatInput = (input) => input.replace(/ /gi, "+")
         const formattedTitle = formatInput(item.volumeInfo.title)
         return {
            title: item.volumeInfo.title,
            authors: item.volumeInfo.authors,
            publishDate: item.volumeInfo.publishedDate,
            description: item.volumeInfo.description,
            buyLink: `https://www.amazon.com/s?k=${formattedTitle}&i=stripbooks&ref=nb_sb_noss_2`,
            url: item.volumeInfo.infoLink,
            image: item.volumeInfo.imageLinks
         }
      })
      console.log(data)
      return transformedData;
    };

    try {
      const bookData = await fetchData();
      dispatch(searchActions.loadBooks(bookData));
    } catch (error) {
      // dispatch(loaderActions.setStatus({
      //    status: 'error',
      //    title: 'Error!',
      //    message: 'Retrieving book data has failed!'
      // }))
      console.log(error)
    }
  };
};

export const searchActions = searchSlice.actions;

export default searchSlice;