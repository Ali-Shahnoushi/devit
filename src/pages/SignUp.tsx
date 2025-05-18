import { useRef, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useSignup } from '@/hooks/auth/useSignUp'
import { FiUser, FiAtSign } from 'react-icons/fi'
import { IoKey } from 'react-icons/io5'
import { FaRegCheckCircle, FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Input from '@/components/ui/Input'
import validations from '@/features/validations'
import LoadingButton from '@/components/ui/LoadingButton'

interface ISignupForm {
    username: string
    email: string
    password: string
    passwordRepeat: string
}

export default function SignUp() {
    const { signup, isSigningUp } = useSignup()
    const [isEmailSent, setIsEmailSent] = useState(false)

    const methods = useForm<ISignupForm>({ mode: 'onChange' })
    const {
        setError,
        reset,
        formState: { errors },
    } = methods

    const onSubmit = (data: ISignupForm) => {
        signup(data, {
            onSuccess: () => {
                reset()
                setIsEmailSent(true)
            },
            onError: (e) => {
                Object.entries(e.response.data.errors).forEach(
                    ([key, value]) => {
                        setError(key as keyof ISignupForm, {
                            message: (value as string[])[0], // safely extract first message
                        })
                    }
                )
            },
        })
    }

    return (
        <div className="flex h-dvh flex-col items-center justify-center gap-3 p-12">
            <span
                data-aos="fade-down-right"
                className="bg-primary fixed top-20 left-80 h-72 w-72 rounded-full blur-[100px]"
            ></span>
            <span
                data-aos="fade-up-left"
                className="bg-primary fixed right-60 bottom-20 h-72 w-72 rounded-full blur-[200px]"
            ></span>
            {!isEmailSent ? (
                <div
                    data-aos="fade-up"
                    className="bg-base-100/30 border-primary/40 z-10 w-full max-w-96 rounded-lg border-2 p-4 backdrop-blur-xl sm:w-2/3 md:w-3/5 lg:w-1/3"
                >
                    <div className="mb-3 text-center text-xl font-bold">
                        ثبت‌نام
                    </div>
                    <FormProvider {...methods}>
                        <form
                            onSubmit={methods.handleSubmit(onSubmit)}
                            className="flex flex-col gap-3 space-y-4"
                        >
                            <Input
                                name="username"
                                icon={<FiUser className="opacity-50" />}
                                placeholder="نام کاربری"
                                type="text"
                                validations={validations.username}
                            />
                            <Input
                                icon={<FiAtSign className="opacity-50" />}
                                type="email"
                                name="email"
                                placeholder="ایمیل"
                                validations={validations.email}
                            />
                            <Input
                                icon={<IoKey className="opacity-50" />}
                                type="password"
                                placeholder="رمز عبور"
                                name="password"
                                validations={validations.password}
                            />

                            <Input
                                icon={<IoKey className="opacity-50" />}
                                type="password"
                                placeholder="تکرار رمز عبور"
                                name="passwordRepeat"
                                validations={validations.passwordRepeat}
                            />

                            <LoadingButton
                                isLoading={isSigningUp}
                                label="ثبت‌نام"
                            />

                            <span className="flex items-center justify-center gap-1 text-sm">
                                <p> آیا حساب کاربری دارید؟ </p>
                                <Link className="text-secondary" to="/sign-in">
                                    وارد شوید
                                </Link>
                            </span>
                        </form>
                    </FormProvider>
                </div>
            ) : (
                <div
                    data-aos="fade-up"
                    className="bg-base-100/30 border-primary/40 z-10 w-full max-w-96 rounded-lg border-2 p-4 backdrop-blur-xl sm:w-2/3 md:w-3/5 lg:w-1/3"
                >
                    <h2 className="flex items-center justify-center gap-2 text-lg text-teal-400">
                        ایمیل ثبت نام ارسال شد <FaRegCheckCircle />
                    </h2>
                    <p className="text-base-content/80 mt-4 text-sm">
                        لطفا ایمیل خود را بررسی کنید
                    </p>
                    <p className="text-base-content mt-8 text-center text-sm">
                        آیا ایمیلی دریافت نکردید؟{' '}
                        <Link
                            className="text-secondary"
                            to="/email-verification"
                        >
                            اینجا کلیک کن
                        </Link>
                    </p>
                </div>
            )}
        </div>
    )
}
