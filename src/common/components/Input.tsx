/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useState } from 'react';

export interface IInputProps {
  id: string;
  type: string;
  placeholder: string;
  errors: string;
  touched: string;
  onChange: () => void;
  onBlur: () => void;
}

export const Input = (props: IInputProps) => {
  const { id, type, placeholder, errors, touched, onChange, onBlur } = props;

  const [isShow, setIsShow] = useState<boolean>(false);

  return (
    <fieldset>
      {isShow && <legend>label</legend>}
      <input />
    </fieldset>
  );
};
