import * as yup from 'yup';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const LoginSchema = yup.object({
    email: yup.string()
        .matches(emailRegex, 'Invalid email format')
        .required('Email is required'),
    password: yup.string()
        .min(8, 'Password must be at least 8 characters')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .required('Password is required'),
});

export type LoginFormValues = yup.InferType<typeof LoginSchema>;

export const loginInitialValues: LoginFormValues = {
    email: '',
    password: '',
};