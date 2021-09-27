import { useState, useRef } from "react";
import { useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router";
import classes from './Login.module.css'

import { userLogin } from "../../store/auth-slice";
import { userLogout } from "../../store/auth-slice";

import Button from "../UI/Button";



const Login = () => {
   const [isLogin, setIsLogin] = useState(true);
   
   const history = useHistory()
   const dispatch = useDispatch()

   const emailInputRef = useRef();
   const passwordInputRef = useRef();

   const expirationTime = useSelector(state => state.authSlice.expirationTime)

   const isLoggedIn = useSelector(state => state.authSlice.isLoggedIn)
   if (isLoggedIn) history.replace("/")


   const switchAuthModeHandler = () => {
      setIsLogin((prevState) => !prevState);
    };

   const submitHandler = (event) => {
      event.preventDefault()
      const enteredEmail = emailInputRef.current.value
      const enteredPassword = passwordInputRef.current.value

      dispatch(userLogin({enteredEmail, enteredPassword, isLogin}))
      setTimeout(function(){
        dispatch(userLogout())
      }, expirationTime)
   }

   return (
     <section className={classes.auth}>
      <div className={classes.authCard}>
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
          <Button type="submit">{isLogin ? "Login" : "Create Account"}</Button>
          <Button type="button" onClick={switchAuthModeHandler} className={classes.toggle}>
            {isLogin ? "Create new account" : "Login with existing account"}
          </Button>
        </div>
      </form>
    </div>
    </section>
   )
}

export default Login