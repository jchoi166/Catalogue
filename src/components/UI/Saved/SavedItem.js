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
               <img src={book.image.thumbnail} />
            </div>
            <Button className={classes.button} onClick={removeBook}>Remove</Button>
         </div>
   )
}

export default SavedItem