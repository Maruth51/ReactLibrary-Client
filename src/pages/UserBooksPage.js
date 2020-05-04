import React, { useState, Fragment, useEffect } from "react";
import { toast } from "react-toastify";
import UserBook from "../components/UserBook";
import { getUserBooks } from "../services/bookServices";
import { Spinner } from "react-bootstrap";
const UserBookPage = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    getUserBooks()
      .then(res => {
        if (res.status === "Success") {
          console.log(res);
          setBooks(res.books);
          setLoading(false);
        }
      })
      .catch(err => {
        toast.error("response failed");
      });
  }, []);
  const updateBook = idx => {
    let newBook = books.filter((book, index) => {
      if (idx === index) {
        return false;
      } else return true;
    });
    setBooks(newBook);
  };
  let display = "";
  if (books?.length) {
    display = (
      <div className="container table-responsive">
        <table className="table table-borderless bg-light">
          <tbody>
            {books.map((book, idx) => {
              return (
                <UserBook
                  key={book._id}
                  title={book.title}
                  bookId={book._id}
                  removeBook={() => updateBook(idx)}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  } else {
    display = (
      <div className="container text-center text-primary">
        {" "}
        <h1> You don't have any book</h1>
      </div>
    );
  }

  return (
    <Fragment>
      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Your Books</h1>
        </div>
      </section>
      {isLoading ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" role="status" variant="primary" size="lg">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      ) : (
        display
      )}
    </Fragment>
  );
};

export default UserBookPage;
