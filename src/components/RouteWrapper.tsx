import { useGetMe } from '@/hooks/auth/useGetMe'
import { useRefreshToken } from '@/hooks/auth/useRefreshToken'
import React, { useEffect, useRef } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
// ... other imports

export default function RouteWrapper() {
    const navigate = useNavigate()
    const { isLoggedIn, isLoading } = useGetMe()
    const { refreshUserToken, data, isRefreshing, error, isError } =
        useRefreshToken()

    const hasShownSessionExpired = useRef(false)

    useEffect(() => {
        if (isLoggedIn) {
            hasShownSessionExpired.current = false
        }
    }, [isLoggedIn])

    useEffect(() => {
        const interval = setInterval(
            () => {
                if (!isLoading && isLoggedIn) {
                    refreshUserToken()
                }
            },
            55 * 60 * 1000 // 55 minutes
        )

        return () => clearInterval(interval)
    }, [isLoggedIn, isLoading])

    useEffect(() => {
        if (
            !isLoading &&
            !isLoggedIn &&
            error &&
            !hasShownSessionExpired.current
        ) {
            hasShownSessionExpired.current = true

            Swal.fire({
                title: 'نشست شما منقضی شده است',
                icon: 'warning',
                confirmButtonText: 'ورود مجدد',
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/sign-in', { replace: true })
                }
            })
        }
    }, [isError, navigate, isLoading, isLoggedIn, error])

    return <Outlet />
}
