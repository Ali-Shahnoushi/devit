import { UserInfo } from '@/types'
import { apiClient } from '@/utils'
import { useQuery } from '@tanstack/react-query'

export function useGetFollowers(username: string) {
    const {
        data,
        error,
        isLoading: isGettingFollowers,
        refetch,
    } = useQuery({
        queryKey: ['followers', username],
        queryFn: async () => {
            const response = await apiClient.get(`auth/user/${username}/followers/`)
            return response.data.data as UserInfo[]
        },
        enabled: !!username, // only run if username is truthy
        retry: false,
    })

    return {
        userFollowers: data,
        isGettingFollowers,
        error,
        refetch,
    }
}
