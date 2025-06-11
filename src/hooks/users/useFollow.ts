import { apiClient } from '@/utils'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { useGetMe } from '../auth/useGetMe'

interface IFollowInput {
    username: string
}

export function useFollow() {
    const queryClient = useQueryClient()
    const { user: me } = useGetMe()

    const {
        mutate: follow,
        isPending: isFollowing,
        error,
    } = useMutation({
        mutationFn: async ({ username }: IFollowInput) => {
            return await apiClient.post(`auth/user/${username}/follow/`)
        },
        onSuccess: (_, variables) => {
            const { username } = variables

            queryClient.invalidateQueries({ queryKey: ['user', username] })

            queryClient.invalidateQueries({ queryKey: ['user', me?.username] })
            queryClient.invalidateQueries({
                queryKey: ['followings', me?.username],
            })

            toast.success('کاربر با موفقیت دنبال شد.')
        },
        onError: (error: any) => {
            toast.error(
                error.response?.data?.errors || 'خطا در دنبال کردن کاربر'
            )
        },
    })

    return { follow, isFollowing, error }
}
