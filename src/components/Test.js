import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

const TestCom = () => {
  return (
    <Container className="p-3">
      <Jumbotron>
        <h1 className="header">Welcome To React-Bootstrap</h1>
        <p>
          We now have Toasts
          <span role="img" aria-label="tada">
            🎉
          </span>
        </p>
      </Jumbotron>
    </Container>
  );
};
export default TestCom;
