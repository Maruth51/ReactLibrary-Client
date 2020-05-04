import React, { Fragment, useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { Spinner } from "react-bootstrap";

const CartBook = ({ title, author, available, handleRemove }) => {
  const [isLoading, setLoading] = useState(false);
  const handleClick = () => {
    setLoading(true);
    handleRemove();
    setLoading(false);
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
