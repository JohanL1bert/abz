/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import { Field, Formik, Form } from 'formik';
import { observer } from 'mobx-react-lite';
import { positionController, getPositionStore } from 'store/getPosition/positionStore';
import { LoadStatus } from 'common/const/load-status.const';
import { Input } from 'common/components/Input';
import { FormButton } from 'common/components/FormButton';
import { UploadPhoto } from 'common/components/UploadPhoto';
import { validationSchema } from 'common/helpers/validationSchema';
import { RadioButton } from 'common/components/RadioButton';
import { userController } from 'store/getUser/userStore';
import { Preloader } from 'common/components/Preloader';

export const SignUpForm = observer(() => {
  const { loadingPos, position } = getPositionStore;
  const { positions } = position;

  useEffect(() => {
    positionController.uploadPosition();
  }, []);

  const initFormValues = {
    name: '',
    email: '',
    phone: '',
    position_id: '',
    photo: '',
  };

  const onSubmitData = (values: any) => {
    const formData = new FormData();
    formData.append('position_id', values.position_id);
    formData.append('name', values.name);
    formData.append('email', values.email);
    formData.append('phone', values.phone);
    formData.append('photo', values.photo);
    userController.createUser(formData);
  };

  if (loadingPos === LoadStatus.pending) {
    return <Preloader />;
  }

  return (
    <Formik
      initialValues={initFormValues}
      onSubmit={onSubmitData}
      validationSchema={validationSchema}
    >
      {({
        errors,
        values,
        touched,
        isValid,
        dirty,
        handleChange,
        handleBlur,
        setFieldValue,
        validateOnBlur,
      }) => (
        <Form>
          <div className="form__input__wrap">
            <Field
              type="text"
              name="name"
              id="name"
              label="Name"
              placeholder="Your Name"
              errors={errors.name}
              values={values.name}
              touched={touched.name}
              onChange={handleChange}
              onBlur={handleBlur}
              component={Input}
            />
            <Field
              type="email"
              name="email"
              id="email"
              label="Email"
              placeholder="Email"
              errors={errors.email}
              values={values.name}
              touched={touched.email}
              onChange={handleChange}
              onBlur={handleBlur}
              component={Input}
            />
            <Field
              type="tel"
              name="phone"
              id="phone"
              label="Phone"
              placeholder="Phone"
              errors={errors.phone}
              values={values.phone}
              touched={touched.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              component={Input}
            />
          </div>

          <div className="form__radio">
            <div className="form__radio__inner">
              <figcaption className="form__radio__heading"> Select your position</figcaption>
              <ul className="form__radio__items">
                {positions!.map((item) => (
                  <RadioButton
                    key={item.id}
                    type="radio"
                    id={item.id}
                    value={item.name}
                    name="contact"
                    values={values.name}
                    onChange={() => setFieldValue('position_id', item.id)}
                  />
                ))}
              </ul>
            </div>
          </div>

          <div className="form__upload__wrap">
            <Field
              type="file"
              id="photo"
              name="photo"
              label="Photo"
              placeholder="Upload your photo"
              errors={errors.photo}
              values={values.photo}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFieldValue('photo', e.target.files![0])
              }
              onBlur={handleBlur}
              component={UploadPhoto}
            />
          </div>

          <div className="form__submit__inner">
            <FormButton type="submit" label="Continue" disabled={!(isValid && dirty)} />
          </div>
        </Form>
      )}
    </Formik>
  );
});
