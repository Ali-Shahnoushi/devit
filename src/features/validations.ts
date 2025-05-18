import { RegisterOptions } from 'react-hook-form'

type TName = 'username' | 'email' | 'password' | 'passwordRepeat' | 'otp'

const validations: Record<TName, RegisterOptions> = {
    username: {
        required: 'نام کاربری الزامی است.',
        minLength: {
            value: 8,
            message: 'نام کاربری باید حداقل ۸ کاراکتر باشد.',
        },
    },
    otp: {
        required: 'رمز یکبارمصرف الزامی است.',
        minLength: {
            value: 6,
            message: 'رمز یکبارمصرف باید حداقل ۶ کاراکتر باشد.',
        },
        maxLength: {
            value: 6,
            message: 'رمز یکبارمصرف باید حداکثر ۶ کاراکتر باشد.',
        },
    },
    email: {
        required: 'ایمیل الزامی است.',
        pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'فرمت ایمیل صحیح نیست.',
        },
    },
    password: {
        required: 'رمز عبور الزامی است.',
        minLength: {
            value: 8,
            message: 'رمز عبور باید حداقل ۸ کاراکتر باشد.',
        },
        pattern: {
            value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d\S]{8,}$/,
            message:
                'رمز عبور باید حداقل ۸ کاراکتر، شامل حرف، عدد و نماد باشد.',
        },
    },
    passwordRepeat: {
        required: 'رمز عبور الزامی است.',
        validate: (value, formValues) =>
            value === formValues.password ||
            'رمز عبور و تکرار آن باید یکسان باشند.',
    },
}

export default validations
