import { Fragment } from 'react'
import classes from './Layout.module.css'
import Navbar from './Navbar'



const Layout = (props) => {
   return (
      <Fragment>
         <Navbar />
         <div className={classes.layout + ' container'}>
            {props.children}
         </div>
      </Fragment>
   )
}

export default Layout
