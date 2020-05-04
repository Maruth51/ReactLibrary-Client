import { Button } from "react-bootstrap";
import React, { useState } from "react";

function CheckoutButton({ handleCheckout }) {
  const [isLoading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    handleCheckout();
  };

  return (
    <Button
      variant="primary"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
      block
    >
      {isLoading ? "Loading…" : "Check Out"}
    </Button>
  );
}

export default CheckoutButton;
