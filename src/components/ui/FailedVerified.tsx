import Lottie from 'lottie-react'
import React from 'react'
import groovyWalkAnimation from '../../../public/lotties/error.json'
import { Link } from 'react-router-dom'

export default function FailedVerify() {
    return (
        <div className="bg-base-300/40 flex min-w-[500px] flex-col items-center justify-center rounded-md p-4 backdrop-blur-lg">
            <Lottie
                className="w-50"
                animationData={groovyWalkAnimation}
                loop={false}
            />
            <h3 className="mt-[-16px] text-xl font-bold">
                تایید حساب با خطا مواجه شد
            </h3>
            <p className="mt-2 text-sm">لطفا مجدد تلاش کنید</p>
            <Link to="/sign-up" className="btn btn-primary mt-4">
                تلاش مجدد
            </Link>
        </div>
    )
}
