import axios from "axios";
import { selectToken } from "./selector";

export function loggedIn(user) {
  return {
    type: "LOGS_IN",
    payload: user,
  };
}

export function loggedOut() {
  return {
    type: "LOGS_OUT",
  };
}

export function stillLoggedIn(userAndToken) {
  return {
    type: "STILL_LOGGED_IN",
    payload: userAndToken,
  };
}

export function logInThunkCreator(email, password) {
  return async function logIn(dispatch, getState) {
    try {
      const response = await axios.post(`http://localhost:4000/login`, {
        email,
        password,
      });
      dispatch(loggedIn(response.data));
    } catch (error) {
      console.log(`Log in error: ${error}`);
    }
  };
}

export function signUpThunkCreator(newUser) {
  return async function singUp(dispatch, getState) {
    try {
      const response = await axios.post(
        `http://localhost:4000/signup`,
        newUser
      );
      dispatch(loggedIn(response.data));
    } catch (error) {
      console.log(`Sign up error: ${error}`);
    }
  };
}

export function getLoggedInUserThunkCreator() {
  return async function getUserThunk(dispatch, getState) {
    const tokenFunction = selectToken();
    const token = tokenFunction(getState());
    if (token === null) {
      return;
    }
    try {
      const response = await axios.get(`http://localhost:4000/user`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(stillLoggedIn(response.data));
    } catch (error) {
      dispatch(loggedOut());
      console.log(`Error in still logged in: ${error}`);
    }
  };
}
