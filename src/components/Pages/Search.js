import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./Search.module.css"
import { savedActions } from "../../store/saved-slice";
import { sendNewBooks } from "../../store/saved-slice";

import PageHeader from "../Layout/PageHeader";
import SearchInput from "../UI/Search/SearchInput";
import SearchItem from "../UI/Search/SearchItem";
import Loader from "../UI/Loader";


const Search = () => {
   const dispatch = useDispatch()
   const searchResults = useSelector(state => state.searchSlice.books)
   const isLoaded = useSelector(state => state.searchSlice.isLoaded)
   const savedIds = useSelector(state => state.savedSlice.savedIds)
   // const uId = useSelector(state => state.authSlice.uId)

   

   const saveBookHandler = (book) => {
      dispatch(savedActions.addBook({
         id: book.id,
         book 
      }))
      // console.log(savedBooks)
      // sendNewBooks(savedBooks)
   }

   const checkSavedHandler = (book) => {
      let isSaved
      if (savedIds.includes(book.id)) {
         console.log('this book is saved!')
         isSaved = true
      } else {
         isSaved = false
      }
         return <SearchItem onSaveBook={saveBookHandler} isSaved={isSaved} key={book.id} book={book}/>
   }
   

   return <section>
      <PageHeader title={'Search'} caption={'Search for new titles using different filters!'} />
      <div className={classes.searchBar}>
         <SearchInput />
      </div>
      <div>
         {/* {isLoaded === "loaded" && searchResults.map((item) => <SearchItem onSaveBook={saveBookHandler} key={item.id} book={item}/>)} */}
         {isLoaded === "loaded" && searchResults.map((item) => checkSavedHandler(item))}
         {isLoaded === "pending" && <Loader/>}
      </div>
   </section>
}

export default Search