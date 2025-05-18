import { apiClient } from '@/utils'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export function useSignout() {
    const navigate = useNavigate()
    const queryClient = useQueryClient()

    const { mutate: signout, isPending: isSigningOut } = useMutation({
        mutationFn: async () => {
            return await apiClient.post(`auth/signout/`)
        },
        onSuccess: (res) => {
            toast.success('با موفقیت خارج شدی')
            queryClient.invalidateQueries({ queryKey: ['user'] })

            navigate('/', { replace: true })
        },
        onError: (error: any) => {
            console.error('signout error:', error)
            toast.error(error?.response?.data?.message || 'خطا در خروج')
        },
    })

    return { signout, isSigningOut }
}
