import { useState } from "react"
import classes from "./SavedItem.module.css"

const SavedItem = (props) => {

   const book = props.book

   const [modalIsVisible, setModalIsVisible] = useState(false)

   const showModalHandler = (item) => {

   }

   return (
      <div className={classes.item}>
         <img src={book.image.thumbnail} onClick={showModalHandler} />
      </div>
   )
}

export default SavedItem