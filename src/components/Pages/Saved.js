import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchSavedBooks } from "../../store/saved-slice"

import PageHeader from "../Layout/PageHeader"
// import SavedGrid from "../UI/Saved/SavedGrid"
import SavedItem from "../UI/Saved/SavedItem"
// import SearchItem from "../UI/Search/SearchItem"

const Saved = () => {

   const dispatch = useDispatch()
   const uId = useSelector(state => state.authSlice.uId)
   const savedBooks = useSelector(state => state.savedSlice.savedBooks)
   

   useEffect(() => {
      dispatch(fetchSavedBooks(uId))
   }, [dispatch])

   return (
      <section>
         <PageHeader title={"Saved"} caption={"View your bookmarked books here!"}/>
         {/* <SavedGrid books={savedBooks} /> */}
         <div>
            {savedBooks && savedBooks.map(book => <SavedItem book={book}/>)} 
         </div>
      </section>
   )
}

export default Saved