import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"


import classes from './Saved.module.css'

import PageHeader from "../Layout/PageHeader"
// import SavedGrid from "../UI/Saved/SavedGrid"
import SavedItem from "../UI/Saved/SavedItem"
// import SearchItem from "../UI/Search/SearchItem"
import Modal from "../UI/Modal"


const Saved = () => {
   const dispatch = useDispatch()

   const savedBooks = useSelector(state => state.savedSlice.savedBooks)
   const isLoggedIn = useSelector(state => state.authSlice.isLoggedIn)

   const [modalIsVisible, setModalIsVisible] = useState(false)
   const [modalData, setModalData] = useState({})
   

   const openModalHandler = (book) => {
      setModalIsVisible(true)
      setModalData(book)
   }

   const closeModalHandler = () => {
      setModalIsVisible(false)
   }

   return (
      <section>
         <PageHeader title={"Saved"} caption={"View your bookmarked books here!"}/>
         {/* <SavedGrid books={savedBooks} /> */}
         {isLoggedIn && <div className={classes.saved}>
            {savedBooks && savedBooks.map(book => <SavedItem onOpenModal={openModalHandler} key={book.id} book={book}/>)} 
         </div>}
         {!isLoggedIn && 
            <div className={classes.notLogin}>
               <h1>Its seems you are not logged in!</h1>
               <p>Please log in or create an account to save books to your library</p>
            </div>
         }
         {modalIsVisible && <Modal book={modalData} onClose={closeModalHandler}></Modal>}
      </section>
   )
}

export default Saved