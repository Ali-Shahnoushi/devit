import { FormProvider, useForm } from 'react-hook-form'
import Input from '../components/ui/Input'
import { FiUser } from 'react-icons/fi'
import validations from '@/features/validations'
import LoadingButton from '../components/ui/LoadingButton'
import { useSendOtp } from '@/hooks/auth/useSendOtp'
import { useState } from 'react'
import { TbLockPassword } from 'react-icons/tb'
import { IoKey } from 'react-icons/io5'
import Timer from '../components/ui/Timer'
import { useCheckOtp } from '@/hooks/auth/useCheckOtp'
import { useNavigate } from 'react-router-dom'

interface IVefirtyAccount {
    email: string
    password: string
    passwordRepeat: string
    otp: string
}

export default function ResetPassword() {
    const navigate = useNavigate()
    const { isSendingOtp, sendOtp } = useSendOtp()
    const { checkOtp, isCheckingOtp } = useCheckOtp()
    const [isOtpSent, setIsOtpSent] = useState(false)
    const [email, setEmail] = useState('')
    const [timeIsUp, setTimeIsUp] = useState(false)

    const methods = useForm<IVefirtyAccount>({ mode: 'onChange' })
    const {
        setError,
        reset,
        formState: { errors },
    } = methods

    function setTimeIsUpHandler(state: boolean) {
        setTimeIsUp(state)
    }

    const onSubmit = (data: IVefirtyAccount) => {
        sendOtp(data, {
            onSuccess: () => {
                reset()
                setIsOtpSent(true)
                setEmail(data.email)

                // Save OTP start time for timer persistence
                localStorage.setItem('otp_start_time', Date.now().toString())
                setTimeIsUp(false)
            },
            onError: (e: any) => {
                if (typeof e.response?.data?.errors === 'string') {
                    setError('email', {
                        message: e.response?.data?.errors,
                    })
                } else {
                    Object.entries(e.response.data.errors).forEach(
                        ([key, value]) => {
                            setError(key as keyof IVefirtyAccount, {
                                message: (value as string[])[0],
                            })
                        }
                    )
                }
            },
        })
    }

    const onCheckOtpSubmit = (data: IVefirtyAccount) => {
        console.log(data)

        const checkOtpData = {
            email: email,
            new_password: data.password,
            confirm_password: data.passwordRepeat,
            code: data.otp,
        }
        checkOtp(checkOtpData, {
            onSuccess: () => {
                reset()
                localStorage.removeItem('otp_start_time')
                navigate('/sign-in', { replace: true })
            },
            onError: (e: any) => {
                console.log(e)
                if (typeof e.response?.data?.errors === 'string') {
                    setError('otp', {
                        message: e.response?.data?.errors,
                    })
                } else {
                    Object.entries(e.response.data.errors).forEach(
                        ([key, value]) => {
                            setError(key as keyof IVefirtyAccount, {
                                message: (value as string[])[0],
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
                className="bg-base-100/30 border-primary/40 z-10 w-full max-w-96 rounded-lg border-2 p-4 backdrop-blur-xl sm:w-2/3 md:w-3/5 lg:w-1/3"
            >
                {!isOtpSent ? (
                    <>
                        <div className="mb-3 text-center text-lg font-bold">
                            فراموشی رمزعبور
                        </div>
                        <FormProvider {...methods}>
                            <form
                                onSubmit={methods.handleSubmit(onSubmit)}
                                className="flex flex-col gap-3 space-y-4"
                            >
                                <Input
                                    name="email"
                                    icon={<FiUser className="opacity-50" />}
                                    placeholder="ایمیل"
                                    type="text"
                                    validations={validations.email}
                                />
                                <LoadingButton
                                    iconSize="lg"
                                    disabled={!timeIsUp}
                                    isLoading={isSendingOtp}
                                    label="ارسال رمز یکبار مصرف"
                                />

                                <Timer
                                    duration={120}
                                    onExpire={() => setTimeIsUp(true)}
                                />
                            </form>
                        </FormProvider>
                    </>
                ) : (
                    <>
                        <div className="mb-3 text-center text-lg font-bold">
                            رمز جدید
                        </div>
                        <FormProvider {...methods}>
                            <form
                                onSubmit={methods.handleSubmit(
                                    onCheckOtpSubmit
                                )}
                                className="flex flex-col gap-3 space-y-4"
                            >
                                <Input
                                    name="otp"
                                    icon={
                                        <TbLockPassword className="opacity-50" />
                                    }
                                    placeholder="رمز یکبارمصرف"
                                    type="text"
                                    validations={validations.otp}
                                />
                                <Input
                                    name="password"
                                    icon={<IoKey className="opacity-50" />}
                                    placeholder="رمزعبور"
                                    type="password"
                                    validations={validations.password}
                                />
                                <Input
                                    name="passwordRepeat"
                                    icon={<IoKey className="opacity-50" />}
                                    placeholder="رمزعبور"
                                    type="password"
                                    validations={validations.passwordRepeat}
                                />
                                <LoadingButton
                                    iconSize="lg"
                                    isLoading={isCheckingOtp}
                                    label="تغییر رمز عبور"
                                />
                            </form>
                        </FormProvider>
                    </>
                )}
            </div>
        </div>
    )
}
