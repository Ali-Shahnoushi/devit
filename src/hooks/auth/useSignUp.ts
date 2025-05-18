import { apiClient } from '@/utils'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'

interface ISignupInput {
    username: string
    password: string
    email: string
}

export function useSignup() {
    const {
        mutate: signup,
        isPending: isSigningUp,
        error,
    } = useMutation({
        mutationFn: async ({ username, password, email }: ISignupInput) => {
            return await apiClient.post(`auth/signup/`, {
                username,
                password,
                email,
            })
        },
        onSuccess: (res) => {
            toast.success(
                'کاربر با موفقیت ساخته شد. برای تایید ایمیل خود را بررسی کنید '
            )
        },
        onError: (error: any) => {
            console.error('Signup error:', error)
            // toast.error(error.response?.data?.message.username || "خطا در ثبت‌نام");
        },
    })

    return { signup, isSigningUp, error: error?.response?.data.errors }
}
