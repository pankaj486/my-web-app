import React from 'react';

type InputProps = {
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  className?: string;
  placeholder?: string;
};

const InputField: React.FC<InputProps> = React.memo((
    { 
        label, 
        name, 
        value,
        onChange, 
        type = 'text', 
        className,
        placeholder 
    }
    ) => (
  <div className="mb-3">
    <label htmlFor={name}>{label}</label>
    <input 
        type={type} 
        id={name} 
        name={name} 
        value={value} 
        onChange={onChange} 
        className={className}
        placeholder={placeholder} 
    />
  </div>
));

export default InputField;
