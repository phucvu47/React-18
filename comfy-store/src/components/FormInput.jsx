import React from 'react';

const FormInput = ({ label, name, type, defaultValue, size }) => {
  return (
    <div className='form-control'>
      <div className='label'>
        <span className='label-text capitalize'>{label}</span>
      </div>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        placeholder='Type here'
        className={`input input-bordered ${size}`}
      />
    </div>
  );
};

export default FormInput;
