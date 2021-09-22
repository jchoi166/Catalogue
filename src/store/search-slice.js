import { createSlice } from "@reduxjs/toolkit";
// import { loaderActions } from "./loader-slice";

const searchSlice = createSlice({
  name: "search",
  initialState: { books: [], isLoaded: null },
  reducers: {
    loadBooks(state, action) {
      state.books = action.payload;
      state.isLoaded = 'loaded'
    },
    setStatus(state, action) {
      state.isLoaded = action.payload
    }
  },
});

export const searchByQuery = (query) => {
  return async (dispatch) => {
    dispatch(searchActions.setStatus('pending'))

    const fetchData = async () => {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40`
      );

      if (!response.ok) throw new Error("Could not fetch books by that search!");

      const data = await response.json();
      const transformedData = data.items.map(item => {
         return {
            id: item.id,
            title: item.volumeInfo.title,
            authors: item.volumeInfo.authors,
            publishDate: item.volumeInfo.publishedDate,
            description: item.volumeInfo.description,
            buyLink: `https://www.amazon.com/s?k=${query}&i=stripbooks&ref=nb_sb_noss_2`,
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
      dispatch(searchActions.setStatus('loaded'))
    } catch (error) {

      console.log(error)
    }
  };
};

export const searchActions = searchSlice.actions;

export default searchSlice;