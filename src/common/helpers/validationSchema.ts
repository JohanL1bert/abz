/* eslint-disable no-control-regex */
/* eslint-disable no-useless-escape */
import * as yup from 'yup';
const FILE_SIZE = 5242880;
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg'];

export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Name should contain more than 2 symbols')
    .max(320, 'Name should contain maximum 320 symbols')
    .required('Required'),
  email: yup
    .string()
    .min(2, 'Email should contain more than 2 symbols')
    .max(120, 'Email should contain maximum 320 symbols')
    .matches(
      /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
      'email is not valid'
    )
    .required('Required'),
  phone: yup
    .string()
    .matches(/^[\+]{0,1}380([0-9]{9})$/, 'phone number is not valid')
    .required('Required'),
  position_id: yup.number().min(1, 'Min one').required('Required'),
  photo: yup
    .mixed()
    .nullable()
    .test('fileSize', 'File too large', (value) => value && value.size <= FILE_SIZE)
    .test(
      'fileFormat',
      'Unsupported Format',
      (value) => value && SUPPORTED_FORMATS.includes(value.type)
    )
    .required('Required'),
});
