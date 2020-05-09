import React, { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import { addBookToCart } from "../services/bookServices";
import { toast } from "react-toastify";
function AddCartButton({ bookId }) {
  const [isLoading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    addBookToCart(bookId)
      .then(res => {
        if (res.status === "Success") {
          toast.success("Book added to Your Cart");
        } else if (res.status === "Unavailable") {
          toast.warn("Currently Book is unavailable");
        } else if (res.status === "exsist") {
          toast.info("You already have this book");
        }
        setLoading(false);
      })
      .catch(err => {
        if (err === 401) {
          toast.error("Login to add to cart", {
            position: toast.POSITION.BOTTOM_RIGHT
          });
        } else {
          toast.error("Network Error;", {
            position: toast.POSITION.BOTTOM_RIGHT
          });
        }
        setLoading(false);
      });
  };

  return (
    <Button
      variant="outline-success"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? "Adding…" : "Add to Cart"}
    </Button>
  );
}

export default AddCartButton;
