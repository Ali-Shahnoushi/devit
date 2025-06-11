import React, { useEffect, useRef, useState } from 'react'
import UserItem from './UserItem'
import { useSearchUser } from '@/hooks/users/useSearchUser'
import { UserInfo } from '@/types'
import LoadingLayout from './LoadingLayout'

const SearchInput = React.memo(function SearchInputComponent() {
    const inputRef = useRef<HTMLInputElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    const [isFocused, setIsFocused] = useState(false)
    const [searchText, setSearchText] = useState('')
    const { users, isLoadingUsers, searchUser } = useSearchUser()

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.code === 'KeyK') {
                e.preventDefault()
                inputRef.current?.focus()
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                setIsFocused(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (searchText.trim()) {
                searchUser(searchText.trim())
            }
        }, 300)

        return () => clearTimeout(timeout)
    }, [searchText])

    return (
        <div className="w-full" ref={containerRef}>
            <label className="input !outline-primary relative hidden w-full border-0 md:flex">
                <svg
                    className="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                {!isFocused && !searchText && (
                    <kbd className="kbd kbd-sm hidden md:block">Ctrl + K</kbd>
                )}
                <input
                    onFocus={() => setIsFocused(true)}
                    ref={inputRef}
                    type="search"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    required
                    placeholder="دنبال چی می‌گردی..."
                />
                {isFocused && searchText && (
                    <div className="bg-base-200 absolute top-[100%] left-0 -z-10 w-full rounded-md p-4">
                        {/* <UserItem user={} /> */}
                        <div className="border-base-300 mb-2 flex items-center justify-between border-b-1 pb-3">
                            <span>کاربران</span>{' '}
                            <button className="btn btn-primary btn-xs">
                                مشاهده همه
                            </button>
                        </div>
                        {isLoadingUsers && (
                            <div className="text-center">
                                <span className="loading loading-spinner loading-xs"></span>
                            </div>
                        )}
                        {users?.length === 0 ? (
                            <div className="text-center">
                                <span className="text-muted-content">
                                    هیچ موردی یافت نشد
                                </span>
                            </div>
                        ) : (
                            <ul className="space-y-2">
                                {users?.map((follower: UserInfo) => (
                                    <UserItem
                                        key={follower.username}
                                        user={follower}
                                    />
                                ))}
                            </ul>
                        )}
                        <div className="border-base-300 mb-2 flex items-center justify-between border-b-1 pb-3">
                            <span>پست‌ها</span>{' '}
                            <button className="btn btn-primary btn-xs">
                                مشاهده همه
                            </button>
                        </div>
                        <div className="text-center">
                            <span className="text-muted-content">
                                هیچ موردی یافت نشد
                            </span>
                        </div>
                    </div>
                )}
            </label>
        </div>
    )
})

export default SearchInput
