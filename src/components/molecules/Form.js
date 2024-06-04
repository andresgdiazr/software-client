import React from 'react';
import InputField from '../atoms/InputField';
import Icon from '../atoms/Icon';
import { FaEnvelope } from 'react-icons/fa';

const FormInput = ({text,type,placeholder}) => {
  return (
    <>
    <p>Ingresa tu {placeholder}</p>
    <InputField type={type} placeholder={placeholder} icon={<Icon><FaEnvelope /></Icon>} />
    </>
  );
};

export default FormInput;