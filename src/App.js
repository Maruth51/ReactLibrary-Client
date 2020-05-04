import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import Login from "./components/Login";
import HomePage from "./pages/HomePage";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartPage from "./pages/CartPage";
import Signup from "./components/Signup";
import UserBookPage from "./pages/UserBooksPage";

toast.configure({
  autoClose: 8000,
  draggable: false,
  transition: Slide
  //etc you get the idea
});
export default function App() {
  return (
    <Fragment>
      <NavbarComponent />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={true}
      />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/cart">
          <CartPage />
        </Route>
        <Route exact path="/book">
          <UserBookPage />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
      </Switch>
    </Fragment>
  );
}
