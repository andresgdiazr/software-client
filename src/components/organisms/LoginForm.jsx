import React from 'react';
import EmailInput from '../molecules/EmailInput';
import PasswordInput from '../molecules/PasswordInput';
import Button from '../atoms/Button';
import Input from '../atoms/Input';

const LoginForm = ({ nextStep, previousStep, handleInput, form }) => {
  return (
    <div className="max-w-md mx-auto p-5 border rounded-lg shadow-md bg-white">
      
      <h2 className="text-2xl font-bold text-center mb-4">  Hola, Bienvenido! 👋</h2>
      <p className="text-center text-gray-500 mb-6">Welcome back, fill all the information to start to explore.</p>
      
      <EmailInput />
      <PasswordInput />
      <Button className="w-full bg-blue-500 text-white" onClick={nextStep}>Iniciar sesión</Button>
      
      <div className="flex items-center my-4">
        <hr className="flex-grow border-t border-gray-300" />
        <span className="mx-2 text-gray-500">O</span>
        <hr className="flex-grow border-t border-gray-300" />
      </div>
      <p className="text-center text-gray-500 mt-4">
        No tienes una cuenta? <a href="#" className="text-blue-500">Registrate</a>
      </p>
    </div>
  );
};


export default LoginForm;