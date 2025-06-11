import { UserInfo } from '@/types'
import { apiClient } from '@/utils'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export function useGetMe() {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            try {
                const response = await apiClient.get('auth/me/')
                return response.data.data as UserInfo
            } catch (err) {
                const axiosError = err as AxiosError
                if (axiosError.response?.status === 401) {
                    return null
                }
                throw err
            }
        },
        retry: false,
    })

    const isLoggedIn = !isError && !!data

    return { isLoading, user: data ?? undefined, isLoggedIn }
}
