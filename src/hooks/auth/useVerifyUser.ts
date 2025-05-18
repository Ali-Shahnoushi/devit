import { apiClient } from '@/utils'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'

interface IVerifyInput {
    userId: string
    token: string
}

let isSuccess: boolean = false

export function useVerifyUser() {
    const {
        mutate: verify,
        isPending: isVerifying,
        error,
    } = useMutation({
        mutationFn: async ({ userId, token }: IVerifyInput) => {
            return await apiClient.get(`auth/activate/${userId}/${token}/`)
        },
        onSuccess: (res) => {
            console.log(res)
            if (res.status === 200) {
                isSuccess = true
            }
        },
        onError: (error: any) => {
            console.error('verify error:', error)
        },
    })

    return { verify, isVerifying, error, isSuccess }
}
