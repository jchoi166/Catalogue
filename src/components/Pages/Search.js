import PageHeader from "../UI/PageHeader";
import SearchInput from "../UI/Search/SearchInput";

import classes from "./Search.module.css"

const Search = () => {
   return <section>
      <PageHeader title={'Search'} caption={'Search for new titles using different filters!'} />
      <div className={classes.searchBar}>
         <SearchInput />
      </div>
   </section>
}

export default Search