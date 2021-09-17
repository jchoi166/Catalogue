
import classes from "./SavedGrid.module.css"

import SavedItem from "./SavedItem"

const SavedGrid = (props) => {

   // will have to map out search items with props.books
   const savedBooks = props.books

   return (
      <div className={classes.grid}>
         {savedBooks.map(book => <SavedItem book={book} />)}
      </div>
   )
}


export default SavedGrid