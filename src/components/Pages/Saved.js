import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchSavedBooks } from "../../store/saved-slice"

const Saved = () => {

   const dispatch = useDispatch()
   const uId = useSelector(state => state.authSlice.uId)
   

   useEffect(() => {
      dispatch(fetchSavedBooks(uId))
   }, [dispatch])

   return <div>This is the SAVED page!</div> 
}

export default Saved