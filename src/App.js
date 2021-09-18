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


function App() {

  const dispatch = useDispatch()
  const uId = useSelector(state => state.authSlice.uId)


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
