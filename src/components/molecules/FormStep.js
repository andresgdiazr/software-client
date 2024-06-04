import React from 'react';

const FormStep = ({ children, isVisible }) => {
  return (
    <div className={isVisible ? 'block' : 'hidden'}>
      {children}
    </div>
  );
};

export default FormStep;