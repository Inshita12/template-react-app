import {
  AUTHENTICATE_USER,
  LOGIN_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOG_OUT,
  SIGNUP_FAILED,
  SIGNUP_START,
  SIGNUP_SUCCESS,
} from "../actions/actionTypes";

const initialAuthState = {
  user: {},
  error: null,
  isLoggedIn: false,
  inProgress: false, //to disable and enable the login button
};

export default function auth(state = initialAuthState, action) {
  switch (action.type) {
    case LOGIN_START:
      case SIGNUP_START:
      return {
        ...state, //copy the existing state
        inProgress: true,
      };
    case LOGIN_SUCCESS:
      case SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.user,
        inProgress: false,
        isLoggedIn: true,
        error: null,
      };
    case LOGIN_FAILED:
      case SIGNUP_FAILED:
      return {
        ...state,
        inProgress: true,
        error: action.error,
      };
      case AUTHENTICATE_USER:{
        return{
          ...state,
          user:{},
          isLoggedIn:true,
        }
      }
      case LOG_OUT:{
        return{
          ...state,
          user:{},
          isLoggedIn:false,
        }
      }
    default:
      return state;
  }
}
