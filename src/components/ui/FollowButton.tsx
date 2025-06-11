import React from 'react'
import LoadingButton from './LoadingButton'
import { IoAdd } from 'react-icons/io5'
import { useFollow } from '@/hooks/users/useFollow'
import { useGetMe } from '@/hooks/auth/useGetMe'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function FollowButton({
    username,
    currentUser,
}: {
    username: string
    currentUser: string
}) {
    const { follow, isFollowing } = useFollow()
    const { isLoggedIn } = useGetMe()
    const navigate = useNavigate()

    return (
        <LoadingButton
            icon={<IoAdd />}
            label="دنبال کردن"
            iconSize="sm"
            classname="btn btn-primary !border-0 font-normal text-white shadow-none"
            isLoading={isFollowing}
            onClickHandler={() => {
                if (!isLoggedIn) {
                    return Swal.fire({
                        title: 'لطفا وارد شوید',
                        icon: 'warning',
                        confirmButtonText: 'خروج',
                    }).then((result) => {
                        if (result.isConfirmed) {
                            navigate('/sign-in', { replace: true })
                        }
                    })
                }
                follow({ username: username })
            }}
        />
    )
}
