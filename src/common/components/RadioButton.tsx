import React from 'react';

interface IRadionButton {
  id: number;
  name: string;
  onChange: () => void;
  type: string;
  value: string;
  values: string;
}
export const RadioButton = (props: IRadionButton) => {
  const { name, onChange, type, value } = props;

  return (
    <li className="form__radio__item">
      <input
        type={type}
        id={value}
        value={name}
        name="contact"
        className="form__radio__input"
        onChange={onChange}
      />
      <label htmlFor={value} className="form__radio__label">
        {value}
      </label>
    </li>
  );
};
