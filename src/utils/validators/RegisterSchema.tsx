import * as yup from 'yup';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const RegisterSchema = yup.object({
    email: yup.string()
        .matches(emailRegex, 'Invalid email format')
        .required('Email is required'),
    firstName: yup.string()
        .required('First name is required'),
    lastName: yup.string()
        .required('Last name is required'),
    password: yup.string()
        .min(8, 'Password must be at least 8 characters')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .required('Password is required'),
    passwordConfirmation: yup.string()
        .oneOf([yup.ref('password')], 'Passwords must match')
        .required('Password confirmation is required'),
});

export type RegisterFormValues = yup.InferType<typeof RegisterSchema>;

export const registerInitialValues: RegisterFormValues = {
    email: 'g@g.com',
    firstName: 'G',
    lastName: 'B',
    password: 'qwerty24G',
    passwordConfirmation: 'qwerty24G',
};

// export const registerInitialValues: RegisterFormValues = {
//     email: '',
//     firstName: '',
//     lastName: '',
//     password: '',
//     passwordConfirmation: '',
// };