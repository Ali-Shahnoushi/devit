import { UserInfo } from '@/types'
import { apiClient } from '@/utils'
import { useQuery } from '@tanstack/react-query'

export function useGetMe() {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const response = await apiClient.get('auth/me/')

            console.log('response data :', response.data.data)

            return response.data.data as UserInfo
        },
        retry: false, // برای اینکه روی خطای 401 دوباره سعی نکنه
    })

    const isLoggedIn = !isError && !!data

    return { isLoading, user: data ?? undefined, isLoggedIn }
}
