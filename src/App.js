import { Route, Switch, Redirect } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Layout from './components/Layout/Layout'
import Explore from './components/Pages/Explore'
import Saved from './components/Pages/Saved'
import Search from './components/Pages/Search'
import Login from './components/Pages/Login'

import { fetchArticleData } from './store/explore-slice'
import { checkLogin } from './store/auth-slice'
import { fetchSavedBooks } from './store/saved-slice'
import { sendNewBooks } from './store/saved-slice'

let isInitial = true

function App() {

  const dispatch = useDispatch()
  const uId = useSelector(state => state.authSlice.uId)
  const savedChanged = useSelector(state => state.savedSlice.changed)
  const savedBooks = useSelector(state => state.savedSlice.savedBooks)


  useEffect(() => {
    dispatch(fetchArticleData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(checkLogin())
  }, [dispatch])

  useEffect(() => {
    if (uId) {
       dispatch(fetchSavedBooks(uId))
    }
 }, [dispatch, uId])

 useEffect(() => {
  if (isInitial) {
    isInitial = false
    return
  }
  // Whenever savedBooks state changes, ie, new book is added, send the list of books to firebase
  if (savedChanged) {
     sendNewBooks(savedBooks, uId)
  }
}, [savedBooks]);

  return (
    <Layout>
        <Switch>
          <Route path='/' exact>
            <Explore />
          </Route>
          <Route path='/saved'>
            <Saved />
          </Route>
          <Route path='/search'>
            <Search />
          </Route>
          <Route path='/explore'>
            <Explore />
          </Route>
          <Route path='/Login'>
            <Login />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Layout>
  );
}

export default App;
