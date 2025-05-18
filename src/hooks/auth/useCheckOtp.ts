import { apiClient } from '@/utils'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'

interface ICheckOtp {
    email: string
    code: string
    new_password: string
    confirm_password: string
}

export function useCheckOtp() {
    const {
        mutate: checkOtp,
        isPending: isCheckingOtp,
        error,
    } = useMutation({
        mutationFn: async ({
            email,
            code,
            new_password,
            confirm_password,
        }: ICheckOtp) => {
            return await apiClient.post('auth/password_reset/', {
                email,
                code,
                new_password,
                confirm_password,
            })
        },
        onSuccess: (res) => {
            console.log(res)
            toast.success(res.data.message)
        },
        onError: (error: any) => {
            console.error('check Otp verify error:', error)
            toast.error(
                error.response?.data?.message || 'خطا در تغییر رمز عبور'
            )
        },
    })

    return { checkOtp, isCheckingOtp, error }
}
