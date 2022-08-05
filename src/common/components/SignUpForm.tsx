/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import { Field, Formik, Form } from 'formik';
import { observer } from 'mobx-react-lite';
import { /* positionController, */ getPositionStore } from 'store/getPosition/positionStore';
import { LoadStatus } from 'common/const/load-status.const';
import { Input } from 'common/components/Input';
import { FormButton } from 'common/components/FormButton';
import { UploadPhoto } from 'common/components/UploadPhoto';

export const SignUpForm = observer(() => {
  const { loadingPos, position } = getPositionStore;
  const { positions } = position;

  useEffect(() => {}, []);

  const validationSchema = {};

  const initFormValues = {};
  const onSubmit = () => {};

  if (loadingPos === LoadStatus.pending) {
    return <div />;
  }

  return (
    <Formik initialValues={initFormValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ errors, values, touched, isValid, handleChange, handleBlur }) => (
        <Form>
          <Field component={Input} />
          <Field component={Input} />
          <Field component={Input} />
          <ul>
            <figcaption> Select your position</figcaption>
            {positions.map((item: any) => (
              <li key={item.id}>
                <input type="radio" id={item.id} value={item.name} name={'contact'} />
                <label htmlFor={item.id}>{item.name}</label>
              </li>
            ))}
          </ul>
          <Field component={UploadPhoto} />
          <FormButton type="submit" label="Save" disabled={isValid} />
        </Form>
      )}
    </Formik>
  );
});
