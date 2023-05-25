import * as yup from 'yup';

export const loginSchema = yup
    .object({
        phone: yup.string().required('Phone number is required').min(10, "Phone number is invalid"),
    })
    .required();
