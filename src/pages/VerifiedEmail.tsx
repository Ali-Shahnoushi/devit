import React, { useEffect } from 'react'
import Lottie from 'lottie-react'
import groovyWalkAnimation from '../../public/lotties/check.json'
import { useParams } from 'react-router-dom'
import { useVerifyUser } from '@/hooks/auth/useVerifyUser'
import SuccessVerified from '@/components/ui/SuccessVerified'
import FailedVerify from '@/components/ui/FailedVerified'
import LoadingLayout from '@/components/ui/LoadingLayout'

export default function VerifiedEmail() {
    const { userId, token } = useParams<{ userId: string; token: string }>()
    const { verify, isVerifying, isSuccess } = useVerifyUser()

    useEffect(() => {
        if (userId && token) {
            verify({ userId, token })
        }
    }, [])

    if (isVerifying) return <LoadingLayout isPage={true} />

    return (
        <div className="flex h-dvh w-dvw items-center justify-center">
            <span
                data-aos="fade-down-right"
                className="fixed top-20 right-80 h-72 w-72 rounded-full bg-teal-500 blur-[140px]"
            ></span>
            <span
                data-aos="fade-up-left"
                className="fixed bottom-20 left-60 h-72 w-72 rounded-full bg-teal-500 blur-[250px]"
            ></span>

            {isSuccess ? <SuccessVerified /> : <FailedVerify />}
        </div>
    )
}
