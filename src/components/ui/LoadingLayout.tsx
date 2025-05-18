import React from 'react'

export default function LoadingLayout({
    isPage = false,
}: {
    isPage?: boolean
}) {
    return (
        <div
            className={`fixed top-0 left-0 z-[99999999999999] flex backdrop-blur-2xl ${isPage ? 'h-dvh' : 'h-full'} w-full items-center justify-center`}
        >
            <span className="loading loading-spinner loading-xl text-primary !border-0"></span>
        </div>
    )
}
