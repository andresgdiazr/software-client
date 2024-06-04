import React from 'react';

const StepLine = ({ isCompleted }) => {
  return (
    <div
      className={`flex-1 h-1 ${isCompleted ? 'bg-blue-600' : 'bg-gray-300'}`}
    ></div>
  );
};

export default StepLine;