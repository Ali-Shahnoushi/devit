import Input from '@/components/ui/Input'
import LoadingButton from '@/components/ui/LoadingButton'
import validations from '@/features/validations'
import { useSignIn } from '@/hooks/auth/useSignIn'
import { useState } from 'react'
import { FormProvider, set, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { FcGoogle } from 'react-icons/fc'
import { FiUser } from 'react-icons/fi'
import { IoKey } from 'react-icons/io5'
import { Link } from 'react-router-dom'

export default function SignIn() {
    const { isSigningIn, signIn, error } = useSignIn()

    interface ISigninForm {
        username: string
        password: string
    }

    const methods = useForm<ISigninForm>({ mode: 'onChange' })
    const {
        setError,
        reset,
        formState: { errors },
    } = methods

    console.log(errors)
    const onSubmit = (data: ISigninForm) => {
        signIn(data, {
            onSuccess: () => {
                reset()
            },
            onError: (e) => {
                if (typeof e.response?.data?.errors === 'string') {
                    toast.error(e.response?.data?.errors)
                    setError('username', {
                        message: e.response?.data?.errors,
                    })
                } else {
                    Object.entries(e.response.data.errors).forEach(
                        ([key, value]) => {
                            setError(key as keyof ISigninForm, {
                                message: (value as string[])[0], // safely extract first message
                            })
                        }
                    )
                }
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
            <div
                data-aos="fade-up"
                className="bg-base-100/30 fade-up border-primary/40 z-10 w-full max-w-96 rounded-lg border-2 p-4 backdrop-blur-xl sm:w-2/3 md:w-3/5 lg:w-1/3"
            >
                <div className="mb-3 text-center text-xl font-bold">ورود</div>
                <FormProvider {...methods}>
                    <form
                        onSubmit={methods.handleSubmit(onSubmit)}
                        className="flex flex-col gap-2 space-y-4"
                    >
                        <Input
                            icon={<FiUser className="opacity-50" />}
                            type="text"
                            placeholder="نام کاربری یا ایمیل"
                            name="username"
                            validations={validations.username}
                        />

                        <Input
                            icon={<IoKey className="opacity-50" />}
                            type="password"
                            placeholder="رمز عبور"
                            name="password"
                            validations={validations.password}
                        />

                        <LoadingButton iconSize='lg' isLoading={isSigningIn} label="ورود" />
                        <span className="m-0 flex items-center justify-start gap-1 text-sm">
                            <p> هنوز ثبت‌نام نکردی؟ </p>
                            <Link className="text-secondary" to="/sign-up">
                                {' '}
                                ثبت‌نام کنید{' '}
                            </Link>
                        </span>
                        <span className="flex items-center justify-start gap-1 text-sm">
                            <Link
                                className="text-base-content"
                                to="/reset-password"
                            >
                                <p> رمزعبور خود را فراموش کرده اید؟ </p>
                            </Link>
                        </span>
                    </form>
                </FormProvider>

                <div className="border-t-base-300 mt-2 border-t-1 py-3">
                    <button className="btn w-full !py-6 font-light">
                        ورود با گوگل
                        <FcGoogle />
                    </button>
                </div>
            </div>
        </div>
    )
}
