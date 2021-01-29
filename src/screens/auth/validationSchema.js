import * as yup from 'yup';

export const basicValidationSchema = yup.object().shape({
  first_name: yup.string().required('First name is required.'),
  last_name: yup.string().required('Last name is required.'),
  email: yup
    .string()
    .email('Email must be valid.')
    .required('Email is required.'),
  gender: yup.string().required('Gender is required.'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Seems a bit short...')
    .max(15, 'We prefer insecure system, try a shorter password'),
  repeat_password: yup
    .string()
    .required('Confirm password is requried')
    .test('passwords-match', 'Passwords must match', function (value) {
      return this.parent.password === value;
    }),
});

export const employmentValidtaionSchema = yup.object().shape({
  department: yup.string().required('Department is required.'),
  job_title: yup.string().required('Job title is required.'),
  country: yup.string().required('Country name is required.'),
});

export const groupValidationSchema = yup.object().shape({
  group_name: yup.string().required('Group Name is required.'),
});

export const signInValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email must be valid.')
    .required('Email is required.'),
  password: yup.string().required('Password is required'),
});
