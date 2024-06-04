import React, { useState } from 'react';
import Button from '../atoms/Button';
import FormStep from '../molecules/FormStep';
import Input from '../atoms/Input';

const RegistrationForm = () => {
  const [form, setForm] = useState({
    step: 1,
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    age: '',
  });

  const nextStep = () => setForm({ ...form, step: form.step + 1 });
  const prevStep = () => setForm({ ...form, step: form.step - 1 });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="flex flex-col md:flex-row md:h-screen">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white p-8">
        <h2 className="text-2xl font-bold">Register</h2>

        <FormStep isVisible={form.step === 1}>
          <Input
            type="email"
            name="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
          <Button onClick={nextStep} className="bg-blue-600 text-white">Next</Button>
        </FormStep>

        <FormStep isVisible={form.step === 2}>
          <Input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
          />
          <div className="flex justify-between w-full">
            <Button onClick={prevStep} className="bg-gray-400 text-white">Back</Button>
            <Button onClick={nextStep} className="bg-blue-600 text-white">Next</Button>
          </div>
        </FormStep>

        <FormStep isVisible={form.step === 3}>
          <Input
            type="number"
            name="age"
            placeholder="Age"
            value={form.age}
            onChange={handleChange}
          />
          <div className="flex justify-between w-full">
            <Button onClick={prevStep} className="bg-gray-400 text-white">Back</Button>
            <Button onClick={() => alert('Form submitted!')} className="bg-green-600 text-white">Submit</Button>
          </div>
        </FormStep>
      </div>
      
      <div className="hidden md:block w-1/2 bg-blue-50 p-8">
        <h2 className="text-2xl font-bold">Welcome to Chatbo!</h2>
        <p className="mt-4">Create your account to start collaborating and exploring our services.</p>
        <div className="mt-8">
          <img src="/path/to/your/image.png" alt="Chatbo illustration" />
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;