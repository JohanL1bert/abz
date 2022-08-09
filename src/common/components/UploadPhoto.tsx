/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { observer } from 'mobx-react-lite';
import { getUserStore } from 'store/getUser/userStore';
import { LoadStatus } from 'common/const/load-status.const';
import { ErrorMessage } from 'common/components/ErrorMessage';

interface IField {
  name: string;
  onBlue: () => void;
  onChange: () => void;
  value: string;
}

interface IValuesImage {
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
}

export interface IUploadFile {
  id: string;
  type: string;
  placeholder: string;
  errors: string;
  touched: string;
  field: IField;
  values: IValuesImage;
  onChange: (args: any) => void;
  onBlur: () => void;
}

export const UploadPhoto = observer((props: IUploadFile) => {
  const { err, loading } = getUserStore;
  const { type, id, placeholder, errors, values, onChange, onBlur } = props;

  return (
    <div
      className="form__upload__inner"
      style={{ borderColor: errors && !!values ? '#CB3D40' : '' }}
    >
      <label
        htmlFor={id}
        style={{ borderColor: errors && !!values ? '#CB3D40' : '' }}
        className={
          errors ? 'form__upload__label form__upload__label-active' : 'form__upload__label'
        }
      >
        {values.name || 'Upload your photo'}
      </label>
      <input
        className="form__upload__input"
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        accept="image/jpg,image/jpeg"
      />
      {errors && !!values && <span className="form__upload__error">{errors}</span>}
      {loading === LoadStatus.error && err !== undefined ? <ErrorMessage err={err} /> : null}
    </div>
  );
});
