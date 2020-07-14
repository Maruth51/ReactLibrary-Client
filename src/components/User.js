import React, { useContext, Fragment } from "react";
import { Nav, Dropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { userContext } from "../store/UserContext";

export const UserComponent = () => {
  const { user, dispatch } = useContext(userContext);
  console.log(user);
  if (user.isLoggedIn) {
    return (
      <Fragment>
        <Nav.Item>
          <NavLink className="nav-link" activeClassName={"active"} to="/cart">
            Cart
          </NavLink>
        </Nav.Item>

        <Nav.Item>
          <Dropdown>
            <Dropdown.Toggle as={Dropdown} className="nav-link">
              {"Hello! " + user.userData?.first_name}
            </Dropdown.Toggle>
            <Dropdown.Menu bg="dark" className="dropdown-menu-right">
              <Dropdown.Item
                as={NavLink}
                to="/book"
                activeClassName={"text-primary"}
              >
                My Books
              </Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/profile">
                Profile
              </Dropdown.Item>
              <Dropdown.Item
                as={NavLink}
                exact
                to="/"
                onClick={() => {
                  localStorage.removeItem("jwt");
                  localStorage.removeItem("user");
                  dispatch({ type: "Logout" });
                  window.location.reload();
                }}
                activeClassName={"text-primary"}
              >
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav.Item>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <Nav.Item>
          <NavLink className="nav-link" activeClassName={"active"} to="/login">
            Login
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="nav-link" activeClassName={"active"} to="/signup">
            Signup
          </NavLink>
        </Nav.Item>
      </Fragment>
    );
  }
};
