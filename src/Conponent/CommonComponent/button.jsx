import React from "react";

const button = ({ btnstyle, btnContent }) => {
  return (
    <>
      <button className={btnstyle}>{btnContent}</button>
    </>
  );
};

export default button;
