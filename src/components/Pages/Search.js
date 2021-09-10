import { useSelector } from "react-redux";

import PageHeader from "../UI/PageHeader";
import SearchInput from "../UI/Search/SearchInput";
import SearchItem from "../UI/Search/SearchItem";

import classes from "./Search.module.css"

const Search = () => {
   const searchResults = useSelector(state => state.searchSlice.books)

   return <section>
      <PageHeader title={'Search'} caption={'Search for new titles using different filters!'} />
      <div className={classes.searchBar}>
         <SearchInput />
      </div>
      <div>
         {searchResults && searchResults.map((item, index) => <SearchItem key={index} book={item}/>)}
      </div>
   </section>
}

export default Search