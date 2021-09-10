import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import logoImage from "../../assets/nav-logo.png";

import Button from "../UI/Button";


const Navbar = () => {
  return (
    <nav className={classes.navbar + " container"}>
      <div className={classes.navLinks}>
        <NavLink to="/search">Find A Book!</NavLink>
        <NavLink to="/saved">Your Books</NavLink>
        <NavLink to="/explore">Explore</NavLink>
      </div>
      <div className={classes.logo}>
        <img src={logoImage} alt="c/at silhouette" />
        {/* <img src='https://i.pinimg.com/564x/82/ce/81/82ce81fecd6bda8a36407abaa5bc194e.jpg' alt="cat silhouette" /> */}
        <h3>Catalogue</h3>
      </div>
      {/* Remember to use authCtx to pass Username into login component */}
      <Button className={classes.login}>
        <NavLink to="/login">Login</NavLink>
      </Button>
    </nav>
  );
};

export default Navbar;
