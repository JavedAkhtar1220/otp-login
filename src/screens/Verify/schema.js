import * as yup from 'yup';

export const verifySchema = yup
    .object({
        otp: yup.string().required('OTP number is required').length(6, "Enter Complete OTP"),
    })
    .required();
