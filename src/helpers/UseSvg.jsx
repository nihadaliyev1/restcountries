import React from "react";

const UseSvg = ({ id, className, onClick }) => {
  return (
    <svg className={className} onClick={onClick}>
      <use xlinkHref={`#${id}`}></use>
    </svg>
  );
};

export default UseSvg;
