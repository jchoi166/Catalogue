import { Fragment } from 'react'
import Footer from './Footer'
import classes from './Layout.module.css'
import Navbar from './Navbar'



const Layout = (props) => {
   return (
      <Fragment>
         <Navbar />
         <div className={classes.layout + ' container'}>
            {props.children}
            <Footer/>
         </div>
      </Fragment>
   )
}

export default Layout
