import LoadingLayout from '@/components/ui/LoadingLayout'
import { useGetUser } from '@/hooks/users/useGetUser'
import { useParams } from 'react-router-dom'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import { FaUsers } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'
import { PiWarning } from 'react-icons/pi'
import { CiChat1 } from 'react-icons/ci'
import { useGetMe } from '@/hooks/auth/useGetMe'
import { useUnfollow } from '@/hooks/users/useUnfollow'
import { useGetFollowers } from '@/hooks/users/useGetFollowers'
import { UserInfo } from '@/types'
import FollowButton from '@/components/ui/FollowButton'
import UserItem from '@/components/ui/UserItem'
import { useGetFollowings } from '@/hooks/users/useGetFollowings'

export default function UserProfile() {
    const { user: me } = useGetMe()
    const { username } = useParams()

    const { user, isLoadingUser } = useGetUser(username as string)

    const { unfollow, isUnfollowing } = useUnfollow()
    const { isGettingFollowers, userFollowers } = useGetFollowers(
        user?.username as string
    )
    const { isGettingFollowings, userFollowings } = useGetFollowings(
        user?.username as string
    )

    if (isLoadingUser) return <LoadingLayout isPage={true} />

    return (
        <main className="p-4 px-10">
            <div className="relative">
                <div className="bg-profile h-32 w-full rounded-md bg-amber-600"></div>
                <div className="flex w-full flex-row items-center justify-between">
                    <div className="p-4 pl-36">
                        <img
                            src={
                                user?.avatar
                                    ? user?.avatar
                                    : 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'
                            }
                            alt="avatar"
                            className="ring-primary absolute top-21 left-10 h-22 w-22 rounded-full ring-4"
                        />
                        <h2 className="text-xl font-semibold">
                            {user?.username}
                        </h2>
                    </div>
                    <div className="flex gap-2 p-4 pl-36">
                        {user?.username !== me?.username && (
                            <>
                                <span className="flex gap-2">
                                    {user?.is_follow ? (
                                        <div className="dropdown dropdown-end">
                                            <button
                                                className="btn btn-ghost border-primary border-1 font-normal shadow-none"
                                                tabIndex={0}
                                                role="button"
                                            >
                                                دنبال می‌کنید <IoIosArrowDown />
                                            </button>
                                            <ul
                                                tabIndex={0}
                                                className="menu menu-md dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-2 shadow-md"
                                            >
                                                <li dir="rtl">
                                                    <button
                                                        disabled={isUnfollowing}
                                                        onClick={() => {
                                                            unfollow({
                                                                username:
                                                                    user?.username!,
                                                            })
                                                        }}
                                                    >
                                                        دنبال نکردن
                                                    </button>
                                                </li>
                                                <li dir="rtl">
                                                    <a>ساکت کردن</a>
                                                </li>
                                            </ul>
                                        </div>
                                    ) : (
                                        <FollowButton
                                            username={user?.username!}
                                            currentUser={username!}
                                        />
                                    )}
                                </span>
                                <div className="dropdown dropdown-end">
                                    <div
                                        tabIndex={0}
                                        role="button"
                                        className="btn btn-ghost btn-circle avatar"
                                    >
                                        <HiOutlineDotsVertical size={20} />
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="menu menu-md dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-2 shadow-md"
                                    >
                                        <li className="flex gap-2" dir="rtl">
                                            <a>
                                                <CiChat1 size={20} />
                                                گفتگو
                                            </a>
                                        </li>
                                        <li dir="rtl">
                                            <a>
                                                <PiWarning size={20} />
                                                گزارش
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-4 grid-rows-1 gap-4">
                <div className="bg-base-200/30 col-span-3 rounded-md">1</div>
                <div
                    dir="rtl"
                    className="bg-base-200/30 col-start-4 flex flex-col gap-2 rounded-md p-4"
                >
                    <div className="flex justify-between text-sm font-bold">
                        <span>
                            {user?.first_name} {user?.last_name}
                        </span>
                        <span>{user?.username}@</span>
                    </div>
                    <div className="text-xs font-light">{user?.bio}</div>
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="followers"
                            className="btn dark:btn-neutral flex items-center gap-2 shadow-none"
                        >
                            <FaUsers size={18} />
                            دنبال کنندگان {user?.followers}
                        </label>
                        <input
                            type="checkbox"
                            id="followers"
                            className="modal-toggle"
                        />
                        <div className="modal" role="dialog">
                            <div className="modal-box">
                                <h3 className="text-lg font-bold">
                                    دنبال کنندگان
                                </h3>
                                <div className="py-4">
                                    {isGettingFollowers && (
                                        <LoadingLayout isPage={false} />
                                    )}
                                    <ul className="space-y-2">
                                        {userFollowers?.map(
                                            (follower: UserInfo) => (
                                                <UserItem
                                                    currentUser={username!}
                                                    key={follower.username}
                                                    user={follower}
                                                />
                                            )
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <label
                                className="modal-backdrop"
                                htmlFor="followers"
                            >
                                Close
                            </label>
                        </div>

                        <label
                            htmlFor="followings"
                            className="btn dark:btn-neutral flex items-center gap-2 shadow-none"
                        >
                            <FaUsers size={18} />
                            دنبال شونده‌ها {user?.following}
                        </label>
                        <input
                            type="checkbox"
                            id="followings"
                            className="modal-toggle"
                        />
                        <div className="modal" role="dialog">
                            <div className="modal-box">
                                <h3 className="text-lg font-bold">
                                    دنبال شونده‌ها
                                </h3>
                                <div className="py-4">
                                    {isGettingFollowings && (
                                        <LoadingLayout isPage={false} />
                                    )}
                                    <ul className="space-y-2">
                                        {userFollowings?.map(
                                            (follower: UserInfo) => (
                                                <UserItem
                                                    currentUser={username!}
                                                    key={follower.username}
                                                    user={follower}
                                                />
                                            )
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <label
                                className="modal-backdrop"
                                htmlFor="followings"
                            >
                                Close
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
