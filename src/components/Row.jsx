import React from "react";

const Row = ({ onClick, css, children }) => {
  return <div onClick={onClick} className={`flex flex-row ${css}`}> {children} </div>;
};

export default Row;
