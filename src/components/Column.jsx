import React from "react";

const Column = ({ onClick, css }) => {
  return <div onClick={onClick} className={`flex flex-col ${css}`}>{child}</div>;
};

export default Column;
