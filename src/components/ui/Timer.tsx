import { useEffect, useState } from 'react'

interface TimerProps {
    duration: number // in seconds
    onExpire: () => void
}

export default function Timer({ duration, onExpire }: TimerProps) {
    const [remainingTime, setRemainingTime] = useState(duration)

    useEffect(() => {
        const storedStartTime = localStorage.getItem('otp_start_time')
        if (storedStartTime) {
            const startTime = parseInt(storedStartTime, 10)
            const elapsed = Math.floor((Date.now() - startTime) / 1000)
            const timeLeft = Math.max(duration - elapsed, 0)
            setRemainingTime(timeLeft)

            if (timeLeft === 0) {
                onExpire()
            }
        }

        const interval = setInterval(() => {
            setRemainingTime((prev) => {
                if (prev <= 1) {
                    clearInterval(interval)
                    onExpire()
                    return 0
                }
                return prev - 1
            })
        }, 1000)

        return () => clearInterval(interval)
    }, [duration, onExpire])

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60)
            .toString()
            .padStart(2, '0')
        const s = (seconds % 60).toString().padStart(2, '0')
        return `${m}:${s}`
    }

    if (remainingTime > 0)
        return (
            <div className="mt-2 text-center text-sm text-gray-500">
                زمان باقی‌مانده: {formatTime(remainingTime)}
            </div>
        )
}
