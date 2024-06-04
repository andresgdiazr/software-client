import React from 'react';
import InputField from '../atoms/InputField';
import Icon from '../atoms/Icon';
import { FaEnvelope } from 'react-icons/fa';

const EmailInput = () => {
  return (
    <>
  
    <InputField type="email" placeholder="Correo electrónico" icon={<Icon><FaEnvelope /></Icon>} />
    </>
  );
};

export default EmailInput;