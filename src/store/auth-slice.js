import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
   name: 'authentication',
   initialState: { isLoggedIn: false, token: '', uId: ''},
   reducers: {
      login(state, action){
         state.token = action.payload.token
         state.uId = action.payload.uId
         state.expirationDate = action.payload.expirationDate
         state.isLoggedIn = true
      },
      logout(state){
         state.isLoggedIn = false
         state.token = null
         state.uId = null
         state.expirationDate = null
      },
   }
})

export const authActions = authSlice.actions

export default authSlice

// Thunks

const FirebaseAPI ='AIzaSyC6rsYpDeS0JX18D5cqfumdrQx_g72FpvY'
let url
let logoutTimer

const addUserToDatabase = (userId) => {
   const sendRequest = async () => {
      const response = await fetch(`https://catalogue-6cbbf-default-rtdb.firebaseio.com/users/${userId}.json`,
      {
         method: "PUT",
         body: JSON.stringify({
           name: 'Jin'
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


export const userLogout = () => {
   return (dispatch) => {
      localStorage.removeItem("token");
      localStorage.removeItem("uId");
      localStorage.removeItem("expirationDate");
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
            addUserToDatabase(loginData.localId)
         }

         localStorage.setItem("token", loginData.idToken);
         localStorage.setItem("uId", loginData.localId);
         localStorage.setItem("expirationDate", loginData.expiresIn);

         const remainingTime = calculateRemainingTime(loginData.expiresIn);
         logoutTimer = setTimeout(userLogout, remainingTime);

         dispatch(authActions.login({
            token: loginData.idToken, 
            uId: loginData.localId,
            expirationDate: loginData.expiresIn,
            isLoggedIn: true,
         }))
      }
      catch (error) {
         // alert(error.message)
         alert(error.error.message)
      }
   }
}


const calculateRemainingTime = (expirationTime) => {
   const currentTime = new Date().getTime();
   const adjExpirationTime = new Date(expirationTime).getTime();
 
   const remainingDuration = adjExpirationTime - currentTime;
 
   return remainingDuration;
};

export const checkLogin = () => {
   return (dispatch) => {
      const storedToken = localStorage.getItem("token");
      const storedId = localStorage.getItem("uId");
      const storedExpirationDate = localStorage.getItem("expirationDate");

      const remainingTime = calculateRemainingTime(storedExpirationDate);

      // console.log(storedToken.toString())
      console.log(remainingTime)

      if (remainingTime <= 6000) {
         userLogout()

       } else {
         logoutTimer = setTimeout(userLogout, remainingTime)
         dispatch(authActions.login({
            token: storedToken,
            uId: storedId,
            expirationDate: storedExpirationDate,
            isLoggedIn: true
         }))
       }
       
   }
}
