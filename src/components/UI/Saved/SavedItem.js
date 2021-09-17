import { useState, Fragment } from "react"
import Button from "../Button"
import classes from "./SavedItem.module.css"

const SavedItem = (props) => {

   const book = props.book


   const showModalHandler = (item) => {
      // Going to display the modal with the entire book item.
      // make sure to include onClose prop to close modal
      props.onOpenModal(book)
   }

   return (
      <Fragment>
         <div className={classes.item} onClick={showModalHandler}>
            <div className={classes.imgContainer}>
               <img src={book.image.thumbnail} />
            </div>
            <Button className={classes.button}>Remove</Button>
         </div>
      </Fragment>
   )
}

export default SavedItem