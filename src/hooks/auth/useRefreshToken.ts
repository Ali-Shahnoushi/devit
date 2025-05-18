import { apiClient } from '@/utils'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'

export function useRefreshToken() {
    const {
        mutate: refreshUserToken,
        isPending: isRefreshing,
        error,
    } = useMutation({
        mutationFn: async () => {
            return await apiClient.post(`auth/refresh_from_cookie/`)
        },
        onSuccess: (res) => {
            console.log('refresh token success:', res)
        },
        onError: (error: any) => {
            console.error('refresh error:', error)
        },
    })

    return { refreshUserToken, isRefreshing, error }
}
