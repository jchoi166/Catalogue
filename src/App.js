import { Route, Switch, Redirect } from 'react-router-dom'


import Layout from './components/Layout/Layout'
import Explore from './components/Pages/Explore'
import Homepage from './components/Pages/Homepage'
import Saved from './components/Pages/Saved'
import Search from './components/Pages/Search'


function App() {
  return (
    <Layout>
        <Switch>
          <Route path='/' exact>
            <Homepage />
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
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Layout>
  );
}

export default App;
