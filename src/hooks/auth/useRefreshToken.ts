import { apiClient } from '@/utils'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export function useRefreshToken() {
    const queryClient = useQueryClient()
    const {
        mutate: refreshUserToken,
        isPending: isRefreshing,
        error,
        isError,
        data,
    } = useMutation({
        mutationFn: async () => {
            return await apiClient.post(`auth/refresh_from_cookie/`)
        },
        onSuccess: (res) => {
            console.log('refresh token success:', res)
        },
        onError: (error: any) => {            queryClient.invalidateQueries({ queryKey: ['user'] })
        },
    })

    return { refreshUserToken, isRefreshing, error, data, isError }
}
