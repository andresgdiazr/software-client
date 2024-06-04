import React from 'react';

const Step = ({ stepNumber, isActive, isCompleted, children }) => {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`w-8 h-8 flex items-center justify-center rounded-full text-white ${
          isCompleted ? 'bg-blue-600' : isActive ? 'bg-blue-400' : 'bg-gray-300'
        }`}
      >
        {stepNumber}
      </div>
      <div className="mt-2 text-xs text-center">{children}</div>
    </div>
  );
};

export default Step;