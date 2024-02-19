// src/components/SignUpForm.js
import React, { useState } from 'react';

const SignUpForm = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    address: '',
    dob: '',
    gender: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  // State for form validation
  const [formErrors, setFormErrors] = useState({
    name: false,
    mobile: false,
    email: false,
    address: false,
    dob: false,
    gender: false,
    username: false,
    password: false,
    confirmPassword: false,
  });

  // Function to handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  // Function to handle form reset
  const handleReset = () => {
    setFormData({
      name: '',
      mobile: '',
      email: '',
      address: '',
      dob: '',
      gender: '',
      username: '',
      password: '',
      confirmPassword: '',
    });
    setFormErrors({
      name: false,
      mobile: false,
      email: false,
      address: false,
      dob: false,
      gender: false,
      username: false,
      password: false,
      confirmPassword: false,
    });
  };

  // Function to validate form fields
  const validateForm = () => {
    // Add your validation logic here
    // For simplicity, I'm just checking if all fields are filled
    const isValid = Object.values(formData).every((value) => value !== '');
    return isValid;
  };

  // Update form validation when form data changes
  React.useEffect(() => {
    setFormErrors({
      name: formData.name === '',
      mobile: formData.mobile === '',
      email: formData.email === '',
      address: formData.address === '',
      dob: formData.dob === '',
      gender: formData.gender === '',
      username: formData.username === '',
      password: formData.password === '',
      confirmPassword: formData.confirmPassword !== formData.password,
    });
  }, [formData]);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className={formErrors.name ? 'error' : ''}
        />
      </label>
      {/* Add similar label and input elements for other form fields */}
      
      <button type="submit" disabled={!validateForm()}>
        Submit
      </button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
};

export default SignUpForm;
