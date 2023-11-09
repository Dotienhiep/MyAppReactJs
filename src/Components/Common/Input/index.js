import React from "react";

const Input = ({
  onChange,
  type,
  value,
  name,
  placeholder,
  autoComplete,
  autoFocus,
  label,
  onKeyDown,
}) => {
  return (
    <label>
      <span>{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        autoFocus={autoFocus}
        autoComplete={autoComplete}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </label>
  );
};

export default Input;
