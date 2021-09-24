import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../../store/auth-slice";

import classes from "./Navbar.module.css";
import logoImage from "../../assets/nav-logo.png";

import Button from "../UI/Button";

const Navbar = () => {
  const dispatch = useDispatch()
  const [showLinks, setShowLinks] = useState(false)
  const userLoggedIn = useSelector((state) => state.authSlice.isLoggedIn);

  const logoutHandler = () => {
    console.log('logout')
    dispatch(userLogout())
  }

  const showLinksHandler = () => {
    setShowLinks(!showLinks)
  }

  const navLinksClass = `${classes.navLinks} ${showLinks && classes.navShown}`
  
  return (
    <section className={classes.navSection}>
    <nav className={classes.navbar + " container"}>
      <div className={navLinksClass}>
        <NavLink to="/search">Find A Book!</NavLink>
        <NavLink to="/saved">Your Books</NavLink>
        <NavLink to="/explore">Explore</NavLink>
      </div>
      <button className={classes.navToggle} onClick={showLinksHandler}>Open</button>
      <div className={classes.mask}></div>
      <div className={classes.logo}>
        <img src={logoImage} alt="c/at silhouette" />
        <NavLink to="/explore"><h3>Catalogue</h3></NavLink>
      </div>
      {!userLoggedIn && (
        <Button className={classes.login}>
          <NavLink to="/login">Login</NavLink>
        </Button>
      )}
      {userLoggedIn && <Button className={classes.login} onClick={logoutHandler} >Logout</Button>}
    </nav>
    </section>
  );
};

export default Navbar;
