import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import AddCartButton from "./AddCartButton";

const Book = ({ title, author, summary, onClick, bookId }) => {
  return (
    <div className="col-lg-3 col-md-6 w-1">
      <Card bg="light">
        <Card.Img variant="top" src="sampleBook.jpg" />
        <Card.Body>
          <Card.Subtitle className="text-center text-primary">
            {title}
          </Card.Subtitle>
          <Card.Text>
            {" "}
            <b>Author:</b> {author}
          </Card.Text>

          <Card.Text className="text-left">
            <b>Summary:</b>{" "}
            <i>
              {summary.length > 50 ? summary.substring(0, 50) : summary}....
            </i>
          </Card.Text>
          <div className="text-right">
            <AddCartButton bookId={bookId} />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired
};

export default Book;
