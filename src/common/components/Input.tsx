/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

interface IField {
  name: string;
  onBlue: () => void;
  onChange: () => void;
  value: string;
}

export interface IInputProps {
  id: string;
  type: string;
  placeholder: string;
  errors: string;
  touched: string;
  field: IField;
  name: string;
  onChange: () => void;
  onBlur: () => void;
}

export const Input = (props: IInputProps) => {
  const { id, type, placeholder, name, errors, touched, onChange, onBlur } = props;
  const colorError = { color: errors && touched ? '#CB3D40' : '' };

  return (
    <div className="form__group">
      <input
        type={type}
        id={id}
        name={name}
        className="form__input__field"
        style={{ borderColor: errors && touched ? '#CB3D40' : '' }}
        placeholder={placeholder}
        autoComplete="off"
        onChange={onChange}
        onBlur={onBlur}
      />
      <label htmlFor={id} className="form__input__label" style={colorError}>
        {placeholder}
      </label>
      {touched && errors && (
        <span className="form__input__error" style={colorError}>
          {errors}
        </span>
      )}
    </div>
  );
};
