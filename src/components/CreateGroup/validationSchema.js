import * as yup from 'yup';

export const groupValidationSchema = yup.object().shape({
  group_name: yup.string().required('Group Name is required.'),
});
