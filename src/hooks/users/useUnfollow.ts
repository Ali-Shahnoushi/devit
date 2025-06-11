import { apiClient } from '@/utils'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { useGetMe } from '../auth/useGetMe'

interface IUnfollowInput {
    username: string
}

export function useUnfollow() {
    const queryClient = useQueryClient()
    const { user: me } = useGetMe()

    const {
        mutate: unfollow,
        isPending: isUnfollowing,
        error,
    } = useMutation({
        mutationFn: async ({ username }: IUnfollowInput) => {
            return await apiClient.delete(`auth/user/${username}/follow/`)
        },
        onSuccess: (_, variables) => {
            const { username } = variables

            queryClient.invalidateQueries({ queryKey: ['user', username] })
            queryClient.invalidateQueries({ queryKey: ['user', me?.username] })
            queryClient.invalidateQueries({
                queryKey: ['followings', me?.username],
            })

            toast.success('کاربر دیگر دنبال نمی‌شود.')
        },
        onError: (error: any) => {
            toast.error('خطا در آنفالو کردن کاربر')
        },
    })

    return { unfollow, isUnfollowing, error }
}
