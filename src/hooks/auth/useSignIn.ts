import { apiClient } from '@/utils'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

interface ISignInInput {
    username: string
    password: string
}

export function useSignIn() {
    const navigate = useNavigate()
    const queryClient = useQueryClient()

    const {
        mutate: signIn,
        isPending: isSigningIn,
        error,
    } = useMutation({
        mutationFn: async ({ username, password }: ISignInInput) => {
            return await apiClient.post(`auth/signin/`, {
                username,
                password,
            })
        },
        onSuccess: (user) => {
            // queryClient.setQueryData(["user"], user.data);
            // queryClient.removeQueries();
            queryClient.invalidateQueries({ queryKey: ['user'] })

            navigate('/', { replace: true })
            toast.success('ورود با موفقیت انجام شد')
        },
        onError: (error: any) => {
            console.error('signin error:', error)
        },
    })

    return { signIn, isSigningIn, error }
}
