import {
  LOGIN_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
  AUTHENTICATE_USER,
  SIGNUP_START,
  SIGNUP_FAILED,
  SIGNUP_SUCCESS,
  LOG_OUT,
} from "./actionTypes";
import { APIUrls } from "../Extra/urls";
import { getFormBody } from "../Extra/function";

export function signup(email, password, name, cpassword) {
  return (dispatch) => {
    const url = APIUrls.signup();
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getFormBody({ email, password, name, cpassword }),
    })
      //fetch will give promise
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        if (data.success) {
          //dispatch action to save user
          localStorage.setItem("token", data.data.token);
          dispatch(signupSuccess(data.data.user));
          return;
        } else {
          dispatch(signupFailed(data.message));
        }
      });
  };
}
export function startSignup() {
  return {
    type: SIGNUP_START,
  };
}
export function signupFailed(error) {
  return {
    type: SIGNUP_FAILED,
    error: error,
  };
}
export function signupSuccess(user) {
  return {
    type: SIGNUP_SUCCESS,
    user,
  };
}
export function StartLogIn() {
  return {
    type: LOGIN_START,
  };
}
export function loginFailed(errorMessage) {
  return {
    type: LOGIN_FAILED,
    error: errorMessage,
  };
}
export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}
export function login(email, password) {
  return (dispatch) => {
    dispatch(StartLogIn());
    //its an asychronous thunk redux so it will return a function
    //sending request tp server when user login
    const url = APIUrls.login();
    fetch(url, {
      method: "POST", //not use get method bcz login is in POST
      headers: {
        "Content-Type": "application/x-www-form-urlencoded", //bcz API are written in such if a way if APIS are written in json frmat then specify the json format
      },
      body: getFormBody({ email, password }),
    })
      //fetch will give promise
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        if (data.success) {
          //dispatch action to save user
          localStorage.setItem("token", data.data.token);
          dispatch(loginSuccess(data.data.user));
          return;
        } else {
          dispatch(loginFailed(data.message));
        }
      });
  };
}
export function authenticateUser(user) {
  return {
    type: AUTHENTICATE_USER,
    user,
  };
}
export function logoutUser(user) {
  return {
    type: LOG_OUT,
    user,
  };
}
