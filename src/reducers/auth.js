import {
  LOGIN_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
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
      return {
        ...state, //copy the existing state
        inProgress: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        inProgress: false,
        isLoggedIn: true,
        error: null,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        inProgress: true,
        error: action.error,
      };
    default:
      return state;
  }
}
