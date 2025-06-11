import LoadingButton from './LoadingButton'
import { IoAdd } from 'react-icons/io5'
import { useFollow } from '@/hooks/users/useFollow'
import { UserInfo, UserPreView } from '@/types'
import { useGetMe } from '@/hooks/auth/useGetMe'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useUnfollow } from '@/hooks/users/useUnfollow'
import { useState } from 'react'

export default function UserItem({
    user,
}: {
    user: any
    currentUser?: string
}) {
    const [isFollowed, setIsFollowed] = useState(user?.is_follow ?? false)
    const { follow, isFollowing } = useFollow()
    const { unfollow, isUnfollowing } = useUnfollow()
    const { isLoggedIn, user: me } = useGetMe()
    const navigate = useNavigate()

    const handleClick = () => {
        if (user.username === me?.username) return
        setIsFollowed(!isFollowed)
    }

    return (
        <li
            className="bg-base-200 flex items-center justify-between rounded-md p-3"
            key={user.username}
        >
            <span className="flex items-center gap-2">
                <img
                    src={
                        user.avatar
                            ? user.avatar
                            : 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'
                    }
                    alt={`avatar ${user.username}`}
                    className="h-10 w-10 rounded-full"
                />
                <span className="text-base-content text-sm">
                    <Link to={`/user/${user.username}`}>{user.username}</Link>
                </span>
            </span>
            {user.username === me?.username ? (
                <Link
                    className="btn btn-sm text-accent shadow-none"
                    to={`user/${user.username}`}
                >
                    مشاهده پروفایل
                </Link>
            ) : (
                <span>
                    {!isFollowed ? (
                        <LoadingButton
                            icon={<IoAdd />}
                            label="دنبال کردن"
                            iconSize="xs"
                            classname="btn btn-primary btn-sm !border-0 font-normal text-white text-sm shadow-none"
                            isLoading={isFollowing}
                            onClickHandler={() => {
                                if (!isLoggedIn) {
                                    return Swal.fire({
                                        text: 'لطفا وارد شوید',
                                        icon: 'warning',
                                        confirmButtonText: 'ورود',
                                    }).then((result) => {
                                        if (result.isConfirmed) {
                                            navigate('/sign-in')
                                        }
                                    })
                                }
                                follow({
                                    username: user.username,
                                })
                                handleClick()
                            }}
                        />
                    ) : (
                        <LoadingButton
                            // icon={<IoAdd />}
                            label="دنبال نکردن"
                            iconSize="xs"
                            classname="btn btn-error btn-sm !border-0 font-normal text-white text-sm shadow-none"
                            isLoading={isUnfollowing}
                            onClickHandler={() => {
                                if (!isLoggedIn) {
                                    return Swal.fire({
                                        text: 'لطفا وارد شوید',
                                        icon: 'warning',
                                        confirmButtonText: 'ورود',
                                    }).then((result) => {
                                        if (result.isConfirmed) {
                                            navigate('/sign-in')
                                        }
                                    })
                                }
                                unfollow({
                                    username: user.username,
                                })
                                handleClick()
                            }}
                        />
                    )}
                </span>
            )}
        </li>
    )
}
