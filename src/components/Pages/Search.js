import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./Search.module.css"
import { savedActions } from "../../store/saved-slice";
import { sendNewBooks } from "../../store/saved-slice";

import PageHeader from "../Layout/PageHeader";
import SearchInput from "../UI/Search/SearchInput";
import SearchItem from "../UI/Search/SearchItem";
import Loader from "../UI/Loader";

let isInitial = true

const Search = () => {
   const dispatch = useDispatch()
   const searchResults = useSelector(state => state.searchSlice.books)
   const isLoaded = useSelector(state => state.searchSlice.isLoaded)
   const savedBooks = useSelector(state => state.savedSlice)
   const uId = useSelector(state => state.authSlice.uId)

   useEffect(() => {
  
      if (isInitial) {
        isInitial = false
        return
      }
  
      if (savedBooks.changed) {
         console.log(savedBooks.changed, savedBooks.savedBooks, uId)
         sendNewBooks(savedBooks.savedBooks, uId)
      }
   }, [savedBooks.savedBooks]);

   const saveBookHandler = (book) => {
      dispatch(savedActions.addBook(book))
      console.log(savedBooks.savedBooks)
      // sendNewBooks(savedBooks)
   }
   

   return <section>
      <PageHeader title={'Search'} caption={'Search for new titles using different filters!'} />
      <div className={classes.searchBar}>
         <SearchInput />
      </div>
      <div>
         {isLoaded === "loaded" && searchResults.map((item) => <SearchItem onSaveBook={saveBookHandler} key={item.id} book={item}/>)}
         {isLoaded === "pending" && <Loader/>}
      </div>
   </section>
}

export default Search