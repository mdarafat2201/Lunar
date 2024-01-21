import React from "react";

const button = ({ btnstyle, children }) => {
  return (
    <>
      <button className={btnstyle}>{children}</button>
    </>
  );
};

export default button;
