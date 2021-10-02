import { LOGIN_START } from "./actionTypes";
import { APIUrls } from "../Extra/urls";
import { getFormBody } from "../Extra/function";
export function StartLogIn() {
  return {
    type: LOGIN_START,
  };
}

export function login(email, password) {
  return (dispatch) => {
    //its an asychronous thunk redux so it will return a function
    //sending request tp server when user login
    const url = APIUrls.login();
    fetch(url,{
      method:'POST',//not use get method bcz login is in POST
      headers:{
        'Content-Type':'application/x-www-form-urlencoded',//bcz API are written in such if a way if APIS are written in json frmat then specify the json format 
      },
      body: getFormBody({email,password}),
    });
  };
}
