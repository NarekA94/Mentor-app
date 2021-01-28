import * as yup from 'yup';

export const basicValidationSchema = yup.object().shape({
  first_name: yup.string().required('First name is required.'),
  last_name: yup.string().required('Last name is required.'),
  email: yup
    .string()
    .email('Email must be valid.')
    .required('Email is required.'),
  gender: yup.string().required('Gender is required.'),
});

export const employmentValidtaionSchema = yup.object().shape({
  department: yup.string().required('Department is required.'),
  job_title: yup.string().required('Job title is required.'),
  country: yup.string().required('Country name is required.'),
});
