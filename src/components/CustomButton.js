import React from "react";

const CustomButton = ({ label, onClick, style }) => {
  return (
    <button className="custom-button" onClick={onClick} style={style}>
      {label}
    </button>
  );
};

export default CustomButton;
