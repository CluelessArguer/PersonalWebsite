import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
    name: Yup
    .string()
    .required('Required'),
    email: Yup
    .string()
    .email('Invalid email')
    .required('Required'),
    subject: Yup
    .string()
    .required('Required'),
    message: Yup
    .string()
    .min(10,'Must contain at least 10 characters')
    .required('Required')
});
