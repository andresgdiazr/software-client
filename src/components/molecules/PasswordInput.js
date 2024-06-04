import React from 'react';
import InputField from '../atoms/InputField';
import Icon from '../atoms/Icon';
import { FaLock, FaEye } from 'react-icons/fa';

const PasswordInput = () => {
  return (
    <InputField type="password" placeholder="Password" icon={<Icon><FaLock /></Icon>} />
  );
};

export default PasswordInput;