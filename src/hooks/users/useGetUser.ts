import {  UserInfo, UserPreView } from '@/types'
import { apiClient } from '@/utils'
import { useQuery } from '@tanstack/react-query'

export function useGetUser(username: string) {
    const { data, error, isLoading, refetch } = useQuery({
        queryKey: ['user', username], 
        queryFn: async () => {
            const response = await apiClient.get(`auth/user/${username}/`)
            return response.data.data as UserPreView & UserInfo
        },
        enabled: !!username, 

        retry: false,
    })

    return { user: data, isLoadingUser: isLoading, error, refetch }
}
