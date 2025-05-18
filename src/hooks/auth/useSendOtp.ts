import { apiClient } from '@/utils'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'

interface ISendOtp {
    email: string
}

export function useSendOtp() {
    const {
        mutate: sendOtp,
        isPending: isSendingOtp,
        error,
    } = useMutation({
        mutationFn: async ({ email }: ISendOtp) => {
            return await apiClient.post('auth/password_reset_code/', {
                email,
            })
        },
        onSuccess: (res) => {
            console.log(res)
            toast.success('رمز یکبارمصرف ارسال شد')
        },
        onError: (error: any) => {
            console.error('send Otp verify error:', error)
            // toast.error(
            //     error.response.data.errors.detail || 'خطا در تغییر رمز عبور'
            // )
        },
    })

    return { sendOtp, isSendingOtp, error }
}
