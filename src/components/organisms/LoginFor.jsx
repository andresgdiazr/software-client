import React from 'react';
import EmailInput from '../molecules/EmailInput';
import PasswordInput from '../molecules/PasswordInput';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import FormInput from '../molecules/Form';

const LoginFor = ({ nextStep, previousStep, handleInput, form }) => {
  return (
    <div className="max-w-md mx-auto p-5 border rounded-lg shadow-md bg-white">
      
      <h2 className="text-2xl font-bold mb-4">  Información personal.</h2>
      <p className="text-center text-gray-500 mb-6">dinos algo más para que podamos ayudarte a empezar. </p>
      
      
      <FormInput type="Text" placeholder="Nombre" />
      <FormInput type="Text" placeholder="Apellido" />
      <FormInput type="Date" placeholder="fecha de nacimiento"/>
      <FormInput type="Text" placeholder="Nombre" />
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


export default LoginFor;