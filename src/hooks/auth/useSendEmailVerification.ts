import { apiClient } from '@/utils'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'

interface ISendVerification {
    username: string
    password: string
}

export function useSendEmailVerification() {
    const {
        mutate: sendVerification,
        isPending: isSendingVerification,
        error,
    } = useMutation({
        mutationFn: async ({ username, password }: ISendVerification) => {
            return await apiClient.post('auth/send_activation/', {
                username,
                password,
            })
        },
        onSuccess: (res) => {
            console.log(res)
            toast.success('ایمیل تایید ارسال شد')
        },
        onError: (error: any) => {
            toast.error(error.response.data.errors)
            console.error('send email verify error:', error)
        },
    })

    return { sendVerification, isSendingVerification, error }
}
