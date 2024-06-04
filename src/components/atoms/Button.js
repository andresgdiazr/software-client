import React from 'react';

const Button = ({ children, onClick, className, nextStep }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 text-white p-2 rounded mt-4 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;