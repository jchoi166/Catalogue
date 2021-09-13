import { useState, useRef } from "react";
import classes from './Login.module.css'
import { authActions } from "../../store/auth-slice";

import Button from "../UI/Button";



const Login = () => {

   const [isLogin, setIsLogin] = useState(true);
   const [isLoading, setIsLoading] = useState(false);

   const emailInputRef = useRef();
   const passwordInputRef = useRef();

   const switchAuthModeHandler = () => {
      setIsLogin((prevState) => !prevState);
      // console.log("switched")
    };

   const submitHandler = (event) => {
      event.preventDefault()
      console.log("signed in!")
   }

   return (
      <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <Button type="submit">{isLogin ? "Login" : "Create Account"}</Button>
          )}
          {isLoading && <p>Sending request ...</p>}
          {/* <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button> */}
          <Button type="button" onClick={switchAuthModeHandler} className={classes.toggle}>
            {isLogin ? "Create new account" : "Login with existing account"}
          </Button>
        </div>
      </form>
    </section>
   )
}

export default Login