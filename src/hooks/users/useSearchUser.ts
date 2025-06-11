import { apiClient } from '@/utils'
import { useMutation } from '@tanstack/react-query'

export function useSearchUser() {
    const {
        mutate: searchUser,
        isPending: isLoadingUsers,
        error,
        data,
    } = useMutation({
        mutationFn: async (username: string) => {
            return await apiClient.get(`auth/search/${username}/`)
        },
        onSuccess: (data) => {
            console.log(data)
        },
        onError: (error: any) => {
            console.error('user search error:', error)
        },
    })

    return { searchUser, isLoadingUsers, error, users: data?.data.data }
}
