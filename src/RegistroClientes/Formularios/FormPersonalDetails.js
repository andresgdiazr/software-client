import React from 'react';
import InputField from '../../components/atoms/InputField';

const FormPersonalDetails = ({ nextStep, previousStep, handleInput, form }) => {
  console.log(form);
  return (
    <div className="max-w-md mx-auto p-5 border rounded-lg shadow-md bg-white">
      
      <h2 className="text-2xl font-bold mb-4">  Información personal.</h2>
      
      <InputField type="text" name="nombre" placeholder={"nombre"} value={form.nombre} onChange={handleInput}/>
      <InputField type="text" name="apellido" placeholder={"apellido"} value={form.apellido} onChange={handleInput}/>
      <InputField type="text" name="cedula" placeholder={"cedula"} value={form.cedula} onChange={handleInput} />
      <InputField type="text" name="teléfono" placeholder={"telefono"} value={form.telefono} onChange={handleInput}/>
      
      
      {/* Add your personal details form fields here */}
      <button onClick={previousStep}>Back</button>
      <button onClick={nextStep}>Next</button>
      
      </div>
  );
};

export default FormPersonalDetails;