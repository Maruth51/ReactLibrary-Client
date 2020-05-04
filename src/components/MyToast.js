import React from "react";
const MyCustomToast = ({ appearance, children }) => (
  <div style={{ background: appearance === "error" ? "red" : "green" }}>
    {children}
  </div>
);

module.exports = MyCustomToast;
