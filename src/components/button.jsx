import React from "react";

const Button = ({ children, onClick, name, variant }) => {
  return (
    <button
      type="submit"
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline max-h-12 max-w-8 my-5 bg-${variant}-500   
      hover:bg-${variant}-500`}
      onClick={onClick}
      name={name}
    >
      {children}
    </button>
  );
};

export default Button;
