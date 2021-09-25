import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
   name: 'authentication',
   initialState: { isLoggedIn: false, token: '', uId: ''},
   reducers: {
      login(state, action){
         state.token = action.payload.token
         state.uId = action.payload.uId
         state.expirationTime = action.payload.expirationTime
         state.isLoggedIn = true
      },
      logout(state){
         state.isLoggedIn = false
         state.token = null
         state.uId = null
         state.expirationTime = null
      },
   }
})

export const authActions = authSlice.actions

export default authSlice

// Thunks

const FirebaseAPI ='AIzaSyC6rsYpDeS0JX18D5cqfumdrQx_g72FpvY'
let url
let logoutTimer

const addUserToDatabase = (userId, authToken) => {
   const sendRequest = async () => {
      const response = await fetch(`https://catalogue-6cbbf-default-rtdb.firebaseio.com/users/${userId}.json?auth=${authToken}`,
      {
         method: "PUT",
         body: JSON.stringify({
           uId: userId
         }),
         headers: {
           "Content-Type": "application/json",
         }
       })
      
       if (!response.ok) throw new Error   
   }

   try {
      console.log('new user has been added!')
      sendRequest()
   }
   catch (error) {
      console.log(error)
   }
}

const clearLocalStorage = () => {
   localStorage.removeItem("token");
   localStorage.removeItem("uId");
   localStorage.removeItem("expirationDate");
}

export const userLogout = () => {
   return (dispatch) => {
      clearLocalStorage()
      dispatch(authActions.logout())
   }
}

export const userLogin = (loginInfo) => {
   
   return async (dispatch) => {
      if (loginInfo.isLogin) {
         url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FirebaseAPI}`
      } else {
         url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FirebaseAPI}`
      }

      const fetchData = async () => {
         const response = await fetch(url, 
         {
            method: 'POST',
            body:  JSON.stringify({
               email: loginInfo.enteredEmail,
               password: loginInfo.enteredPassword,
               returnSecureToken: true,
             }),
             headers: {
               "Content-Type": "application/json",
             }
         })

         if (!response.ok) {
            const errorData = await response.json()
            throw (errorData)
         };

         const data = await response.json()
         console.log(data)

         return data
      }

      try {
         const loginData = await fetchData()

         // Adds user to database if signing up
         if(!loginInfo.isLogin) {
            addUserToDatabase(loginData.localId, loginData.idToken)
         }

         localStorage.setItem("token", loginData.idToken);
         localStorage.setItem("uId", loginData.localId);

         // Converts the 'expiresIn' value provided by firebase and coverts it to an expiration date/time 
         const expirationDate = new Date(new Date().getTime() + (+loginData.expiresIn * 1000))
         localStorage.setItem("expirationDate", expirationDate.toISOString());

         const expirationTime = loginData.expiresIn * 1000

         dispatch(authActions.login({
            token: loginData.idToken, 
            uId: loginData.localId,
            expirationTime: expirationTime,
            isLoggedIn: true,
         }))
      }
      catch (error) {
         alert(error.error.message)
      }
   }
}


const calculateRemainingTime = (expirationDate) => {
   const currentTime = new Date().getTime();
   const adjExpirationTime = new Date(expirationDate).getTime();
 
   const remainingDuration = adjExpirationTime - currentTime;
 
   return remainingDuration;
};

export const checkLogin = () => {
   return (dispatch) => {
      const storedToken = localStorage.getItem("token");
      const storedId = localStorage.getItem("uId");
      const storedExpirationDate = localStorage.getItem("expirationDate");

      const remainingTime = calculateRemainingTime(storedExpirationDate);

      console.log(remainingTime)

      if (remainingTime <= 60000) {
         clearLocalStorage()
         dispatch(authActions.logout())

       } else {
         logoutTimer = setTimeout(function(){
            clearLocalStorage()
            dispatch(authActions.logout())
         }, remainingTime)
         dispatch(authActions.login({
            token: storedToken,
            uId: storedId,
            expirationTime: remainingTime,
            isLoggedIn: true
         }))
       }
       
   }
}
