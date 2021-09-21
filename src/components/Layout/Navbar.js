import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../../store/auth-slice";

import classes from "./Navbar.module.css";
import logoImage from "../../assets/nav-logo.png";

import Button from "../UI/Button";

const Navbar = () => {
  const dispatch = useDispatch()
  const userLoggedIn = useSelector((state) => state.authSlice.isLoggedIn);

  const logoutHandler = () => {
    console.log('logout')
    dispatch(userLogout())
  }

  return (
    <nav className={classes.navbar + " container"}>
      <div className={classes.navLinks}>
        <NavLink to="/search">Find A Book!</NavLink>
        <NavLink to="/saved">Your Books</NavLink>
        <NavLink to="/explore">Explore</NavLink>
      </div>
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
  );
};

export default Navbar;
