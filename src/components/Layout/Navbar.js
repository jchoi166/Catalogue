import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import logoImage from "../../assets/nav-logo.png";

import Login from "../UI/Login";


const Navbar = () => {
  return (
    <nav className={classes.navbar + " container"}>
      <div className={classes.navLinks}>
        <NavLink to="/search">Find A Book!</NavLink>
        <NavLink to="/saved">Your Books</NavLink>
      </div>
      <div className={classes.logo}>
        <img src={logoImage} alt="cat silhouette" />
        <h1>Catalogue</h1>
      </div>
      {/* Remember to use authCtx to pass Username into login component */}
      <Login />
    </nav>
  );
};

export default Navbar;
