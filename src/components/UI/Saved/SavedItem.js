import { useDispatch } from "react-redux"

import Button from "../Button"
import classes from "./SavedItem.module.css"

import { savedActions } from "../../../store/saved-slice"

const SavedItem = (props) => {

   const book = props.book
   const dispatch = useDispatch()

   const showModalHandler = (item) => {
      // Going to display the modal with the entire book item.
      // make sure to include onClose prop to close modal
      props.onOpenModal(book)
   }

   const removeBook = () => {
      dispatch(savedActions.removeBook(book.id))
   }

   return (
         <div className={classes.item}>
            <div className={classes.imgContainer} onClick={showModalHandler}>
               {book.image && <img src={book.image.thumbnail} alt={book.title}/>}
               {!book.image && 
               <div className={classes.noImage}>
                  <i className="fas fa-cat"></i>
                  <p>Image not available!</p>
               </div>}
            </div>
            <Button className={classes.button} onClick={removeBook}>Remove</Button>
         </div>
   )
}

export default SavedItem