import React from 'react';
import { SignUpForm } from 'common/components/SignUpForm';

export const FormSection = () => {
  return (
    <section>
      <div className="form__inner">
        <div className="form__wrapper">
          <h2 className="form__heading">Working with POST request</h2>
          <SignUpForm />
        </div>
      </div>
    </section>
  );
};
