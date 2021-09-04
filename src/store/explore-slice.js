import { createSlice } from "@reduxjs/toolkit";

const exploreSlice = createSlice({
  name: "explore",
  initialState: { articles: [] },
  reducers: {
    replaceArticles(state, action) {
      state.articles = action.payload;
    },
  },
});

export const fetchArticleData = () => {
  console.log("i am running!");

  return async (dispatch) => {
   console.log('the dispatch function is running!')

    const fetchData = async () => {
      const response = await fetch(
        'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=books&fq=type_of_material:("news")ANDnews_desk:("books")&api-key=cQ7HvAZE9347iW9igcgZu5Aerg8ucRDG'
      );

      if (!response.ok) throw new Error("Could not fetch article data");

      const data = await response.json();
      // console.log(data.response.docs);
      // console.log(data)
      return data.response.docs;
    };

    try {
      const articleData = await fetchData();
      dispatch(
        exploreActions.replaceArticles(articleData)
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const exploreActions = exploreSlice.actions;

export default exploreSlice;

// Custom Actions
