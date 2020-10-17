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
  return {
    type: actionTypes.LOGOUT
  }
}
export const checkTimeout = (expireTime) => {

  return dispatch => {
    setTimeout(
      dispatch(logout())
    ,expireTime*1000)}
}
//Async call
export const signUp_Async = (email, password, isSingUp) => {
  return (dispatch) => {
    dispatch(signUp());
    console.log(email,password)
    const auth_data = {
      email: email,
      password: password,
      returnSecureToken: true
    };

    let url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDN4xdFrJnd0EoLhEM9TDdrVqmCjYB8PiA"
    if(!isSingUp){
        url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDN4xdFrJnd0EoLhEM9TDdrVqmCjYB8PiA"
    }
    console.log('authData',auth_data)
    axios
      .post(
        url,
        auth_data
      )
      .then(response => {
          console.log(response);
          dispatch(signUp_Success(response.data.idToken, response.data.localId));
          dispatch(checkTimeout(response.data.expires))
      })
      .catch(error => {
          console.log(error)
          dispatch(signUp_fail(error));
      });
  };
};
