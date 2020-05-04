import React, { useState } from "react";
import { returnBook } from "../services/bookServices";
import { toast } from "react-toastify";
import { Spinner } from "react-bootstrap";

const UserBook = ({ title, bookId, removeBook }) => {
  const [isLoading, setLoading] = useState();
  const handleClick = () => {
    setLoading(false);
    returnBook(bookId)
      .then(res => {
        if (res.status === "Success") {
          toast.success("Book returned to Library");
          removeBook();
        } else {
          toast.info("Failed to return");
        }
      })
      .catch(err => toast.error("Network error"));
  };
  return (
    <tr>
      <td>{title}</td>
      <td>
        <button className="btn btn-primary btn-sm" onClick={handleClick}>
          {isLoading ? (
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          ) : (
            "Return to library"
          )}
        </button>
      </td>
    </tr>
  );
};

export default UserBook;
