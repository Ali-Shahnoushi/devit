import { apiClient } from '@/utils'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'

interface IUpdateUserInput {
    user: any
}

export function useUpdateUser() {
    const queryClient = useQueryClient()

    const {
        mutate: updateUser,
        isPending: isUpdatingUser,
        error,
    } = useMutation({
        mutationFn: async ({ user }: IUpdateUserInput) => {
            return await apiClient.put(`auth/me/`, user, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
        },
        onSuccess: (res) => {
            toast.success('کاربر با موفقیت به روز رسانی شد.')
            queryClient.invalidateQueries({ queryKey: ['user'] })
        },
        onError: (error: any) => {
            console.error('Signup error:', error)
            // toast.error(error.response?.data?.message.username || "خطا در ثبت‌نام");
        },
    })

    return { updateUser, isUpdatingUser, error }
}
