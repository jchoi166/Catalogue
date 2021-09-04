import { Fragment, useEffect } from "react"
import { useDispatch } from "react-redux"

import { fetchArticleData } from "../../store/explore-slice"

const Explore = () => {

   const dispatch = useDispatch()
   // const articles = useSelector((state) => state.exploreSlice)

   useEffect(() => {
      dispatch(fetchArticleData())
   }, [dispatch])

   // console.log(articles)

   const fetchHandler = () => {
      dispatch(fetchArticleData)
   }


   return <Fragment>
      <div>This is the EXPLORE page!</div>
      <button onClick={fetchHandler}>Click me</button>
      </Fragment> 
}

export default Explore