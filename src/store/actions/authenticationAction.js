import * as actionTypes from "./actionTypes";
import axios from "axios";

export const signUp = () => {
  return {
    type: actionTypes.SIGN_UP,
  };
};

export const signUp_fail = (error) => {
  return {
    type: actionTypes.SIGN_UP_FAIL,
    error: error,
  };
};

export const signUp_Success = (idToken,userId) => {
  return {
    type: actionTypes.SIGN_UP_SUCCESS,
    idToken: idToken,
    userId: userId
  };
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expiresTimes');
  return {
    type: actionTypes.LOGOUT
  }
}
export const checkTimeout = (expireTime) => {
  // eslint-disable-next-line radix
  let exp = parseInt(expireTime * 1000);
  return dispatch => {
    setTimeout(
      dispatch(logout())
    ,exp)}
}
//Async call
export const signUp_Async = (email, password, isSingUp) => {
  return (dispatch) => {
    dispatch(signUp());
    const auth_data = {
      email: email,
      password: password,
      returnSecureToken: true
    };

    let url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDN4xdFrJnd0EoLhEM9TDdrVqmCjYB8PiA"
    if(!isSingUp){
        url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDN4xdFrJnd0EoLhEM9TDdrVqmCjYB8PiA"
    }

    axios
      .post(
        url,
        auth_data
      )
      .then(response => {
          console.log(response);
          const refreshTime = new Date().getTime + response.data.expriesIn * 1000
          localStorage.setItem('token',response.data.idToken);
           localStorage.setTimeout('expiresTimes',refreshTime);
          dispatch(signUp_Success(response.data.idToken, response.data.localId));
          console.log(response.data)
         // dispatch(checkTimeout(response.data.expiresIn))
      })
      .catch(error => {
          console.log(error)
          dispatch(signUp_fail(error));
      });
  };
};
