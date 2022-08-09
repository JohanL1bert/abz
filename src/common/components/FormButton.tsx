import React from 'react';

interface IFormSubmitBtn {
  disabled: boolean;
  label: string;
  type: 'submit';
}

export const FormButton = (props: IFormSubmitBtn) => {
  const { type, disabled } = props;

  return (
    <button className="form__submit__btn" type={type} disabled={disabled}>
      Sign Up
    </button>
  );
};
