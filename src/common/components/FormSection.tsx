import React from 'react';
import { observer } from 'mobx-react-lite';
import { SignUpForm } from 'common/components/SignUpForm';
import { Success } from 'common/components/Success';
import { getUserStore } from 'store/getUser/userStore';

export const FormSection = observer(() => {
  const { isAuth } = getUserStore;

  return isAuth ? (
    <Success />
  ) : (
    <section>
      <div className="form__inner">
        <div className="form__wrapper">
          <h2 className="form__heading" id="sign-in">
            Working with POST request
          </h2>
          <SignUpForm />
        </div>
      </div>
    </section>
  );
});
