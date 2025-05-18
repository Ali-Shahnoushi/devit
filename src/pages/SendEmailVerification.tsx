import { FormProvider, useForm } from 'react-hook-form'
import Input from '../components/ui/Input'
import { FiUser } from 'react-icons/fi'
import validations from '@/features/validations'
import { IoKey } from 'react-icons/io5'
import LoadingButton from '../components/ui/LoadingButton'
import { useSendEmailVerification } from '@/hooks/auth/useSendEmailVerification'

interface IVefirtyAccount {
    username: string
    email: string
    password: string
    passwordRepeat: string
}

export default function SendEmailVerification() {
    const { sendVerification, isSendingVerification } =
        useSendEmailVerification()

    const methods = useForm<IVefirtyAccount>({ mode: 'onChange' })
    const {
        setError,
        reset,
        formState: { errors },
    } = methods

    const onSubmit = (data: IVefirtyAccount) => {
        sendVerification(data, {
            onSuccess: () => {
                reset()
            },
            onError: (e: any) => {
                if (e.response.data.errors) {
                    setError('username', {
                        message: e.response.data.errors,
                    })
                } else if (!e.response.data.errors) {
                    Object.entries(e.response.data.errors).forEach(
                        ([key, value]) => {
                            setError(key as keyof IVefirtyAccount, {
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
                className="bg-base-100/30 border-primary/40 z-10 w-full max-w-96 rounded-lg border-2 p-4 backdrop-blur-xl sm:w-2/3 md:w-3/5 lg:w-1/3"
            >
                <div className="mb-3 text-center text-xl font-bold">
                    دریافت ایمیل تایید
                </div>
                <FormProvider {...methods}>
                    <form
                        onSubmit={methods.handleSubmit(onSubmit)}
                        className="flex flex-col gap-3 space-y-4"
                    >
                        <Input
                            name="username"
                            icon={<FiUser className="opacity-50" />}
                            placeholder="نام کاربری یا ایمیل"
                            type="text"
                            validations={validations.username}
                        />
                        <Input
                            icon={<IoKey className="opacity-50" />}
                            type="password"
                            placeholder="رمز عبور"
                            name="password"
                            validations={validations.password}
                        />

                        <LoadingButton
                            isLoading={isSendingVerification}
                            label="ارسال ایمیل"
                        />
                    </form>
                </FormProvider>
            </div>
        </div>
    )
}
