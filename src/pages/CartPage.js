import React, { Fragment, useContext, useEffect, useState } from "react";
import CartBook from "../components/CartBook";
import { userContext } from "../store/UserContext";
import {
  getCart,
  removeBookFromCart,
  addBookToUser
} from "../services/bookServices";
import { Spinner } from "react-bootstrap";
import CheckoutButton from "../components/CheckoutButton";
import { NavLink } from "react-router-dom";

const CartPage = () => {
  const { user, dispatch } = useContext(userContext);
  const [isLoading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  //get userid from context
  const userId = user.userData._id;
  useEffect(() => {
    getCart(userId).then(res => {
      if (res.status === "Success") {
        setLoading(false);
        setCart(res.cart);
      }
    });
  }, []);

  const updateCart = bookIdx => {
    let newCart = cart.filter((book, idx) => {
      if (idx === bookIdx) {
        return false;
      } else return true;
    });
    setCart(newCart);
  };
  const handleCheckout = () => {
    addBookToUser(userId)
      .then(res => {
        setCart([]);
      })
      .catch(err => alert("Some Error Occured"));
  };
  let display = <Fragment />;
  if (isLoading) {
    display = (
      <div className="d-flex justify-content-center">
        <Spinner animation="border" role="status" variant="primary" size="lg">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  } else if (cart.length === 0) {
    display = (
      <div className="d-flex justify-content-center">
        <h1> Your Cart Is Empty.</h1>
      </div>
    );
  } else {
    display = (
      <Fragment>
        <div className="container mb-4">
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Book Name</th>
                      <th scope="col">Author</th>
                      <th scope="col">Available</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((book, index) => {
                      const handleRemove = () => {
                        removeBookFromCart(userId, book._id)
                          .then(res => {
                            if (res.status === "Success") {
                              updateCart(index);
                            }
                          })
                          .catch(err => {});
                      };
                      return (
                        <CartBook
                          key={index}
                          title={book.title}
                          author={book.author}
                          available={book.count > 0}
                          handleRemove={handleRemove}
                        />
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col mb-2">
              <div className="row">
                <div className="col-sm-12  col-md-6">
                  <button className="btn btn-block  text-uppercase">
                    <NavLink to="/">go to library</NavLink>
                  </button>
                </div>
                <div className="col-sm-12 col-md-6 text-right">
                  <CheckoutButton handleCheckout={handleCheckout} />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Library Cart</h1>
        </div>
      </section>
      {display}
    </Fragment>
  );
};

export default CartPage;
