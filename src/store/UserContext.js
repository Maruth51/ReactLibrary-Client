import { createContext, useReducer } from "react";
import React from "react";
const initialState = {
  isLoggedIn: false,
  userData: {}
};
export const userContext = createContext(false);
const { Provider } = userContext;

function reducer(state = initialState, action) {
  switch (action.type) {
    case "Logout":
      return { userData: {}, isLoggedIn: false };
    case "Login":
      return { ...state, isLoggedIn: true, userData: action.data };
    case "SET_USER":
      console.log(action.data);
      return { ...state };
    default:
      return { ...state };
  }
}

const Userprovider = ({ children }) => {
  const [userState, dispatch] = useReducer(reducer, initialState);

  return <Provider value={{ user: userState, dispatch }}>{children}</Provider>;
};
export default Userprovider;
