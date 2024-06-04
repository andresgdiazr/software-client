import React from 'react';

const InputField = ({ type, placeholder, icon, value, onChange, name }) => {
  return (
    <div className="relative my-2">

      

      {icon && <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">{icon}</span>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        className={`w-full p-2 border border-gray-300 rounded pl-10`}
      />
    </div>
  );
};

export default InputField;