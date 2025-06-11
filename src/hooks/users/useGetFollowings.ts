    import { UserInfo } from '@/types'
    import { apiClient } from '@/utils'
    import { useQuery } from '@tanstack/react-query'

    export function useGetFollowings(username: string) {
        const {
            data,
            error,
            isLoading: isGettingFollowings,
            refetch,
        } = useQuery({
            queryKey: ['followings', username],
            queryFn: async () => {
                const response = await apiClient.get(
                    `auth/user/${username}/following/`
                )
                return response.data.data as UserInfo[]
            },
            enabled: !!username,
            retry: false,
        })

        return {
            userFollowings: data,
            isGettingFollowings,
            error,
            refetch,
        }
    }
