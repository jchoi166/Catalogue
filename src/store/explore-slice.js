import { createSlice } from "@reduxjs/toolkit";
// import { loaderActions } from "./loader-slice";

const exploreSlice = createSlice({
  name: "explore",
  initialState: { articles: [], isLoaded: false },
  reducers: {
    loadArticles(state, action) {
      state.articles = action.payload;
      state.isLoaded = true
    },
  },
});

export const fetchArticleData = () => {
  return async (dispatch) => {

   // dispatch(loaderActions.setStatus({
   //    status: 'pending',
   //    title: 'Retrieving',
   //    message: 'Retrieving article data'
   // }))

    const fetchData = async () => {
      const response = await fetch(
        'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=books&fq=type_of_material:("news")ANDnews_desk:("books")&api-key=cQ7HvAZE9347iW9igcgZu5Aerg8ucRDG'
      );

      if (!response.ok) throw new Error("Could not fetch article data");

      const data = await response.json();

      return data.response.docs;
    };

    try {
      const articleData = await fetchData();
      dispatch(exploreActions.loadArticles(articleData));
    } catch (error) {
      // dispatch(loaderActions.setStatus({
      //    status: 'error',
      //    title: 'Error!',
      //    message: 'Retrieving article data has failed!'
      // }))
      console.log(error)
    }
  };
};

export const exploreActions = exploreSlice.actions;

export default exploreSlice;

// Custom Actions
