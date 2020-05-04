import React, { useEffect, useState } from "react";
import { Jumbotron } from "react-bootstrap";
import "../home.css";
import Book from "../components/Book";
import { getBooks } from "../services/bookServices";
import { toast } from "react-toastify";
const HomePage = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooks()
      .then(data => {
        setBooks(data.books);
      })
      .catch(err => {
        const errMsg = `Newtwork Error; \n
           unable to retrive books form server`;
        toast.error(errMsg, { position: toast.POSITION.BOTTOM_RIGHT });
      });
  }, []);

  return (
    <div className="container-fluid my-2 jstify-content-center">
      <Jumbotron className="info bg-dark">
        <h1 className="text-white">Welcome! to Library</h1>
        <p className="text-white">
          <i>
            This is a simple Library Application. Login and add books to cart.
            below data are just a junk to create sample. so, they don't have any
            meaning please ignore
          </i>
          .{" "}
        </p>
        <p />
      </Jumbotron>
      <div className="mx-2">
        <div className="row">
          {books.map((book, index) => {
            return (
              <Book
                key={index}
                title={book.title}
                author={book.author}
                summary={book.summary}
                bookId={book._id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
