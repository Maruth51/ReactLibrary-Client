import React, { Fragment, useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { Spinner } from "react-bootstrap";
import { removeBookFromCart } from "../services/bookServices";

const CartBook = ({ title, author, available, bookId, updateCart }) => {
  const [isLoading, setLoading] = useState(false);
  const handleClick = () => {
    setLoading(true);
    removeBookFromCart(bookId)
      .then(res => {
        if (res.status === "Success") {
          updateCart(bookId);
        }
      })
      .catch(err => {});
  };
  return (
    <Fragment>
      <tr>
        <td>{title}</td>
        <td>{author}</td>
        <td>{available ? "yes" : "No"}</td>
        <td>
          <button className="btn btn-sm btn-danger" onClick={handleClick}>
            {isLoading ? (
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            ) : (
              <BsFillTrashFill />
            )}
          </button>{" "}
        </td>
      </tr>
    </Fragment>
  );
};

export default CartBook;
