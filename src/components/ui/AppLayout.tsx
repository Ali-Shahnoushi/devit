import { Outlet } from 'react-router-dom'
import Header from './Header'
import SidearApp from './SidearApp'
import Footer from '../Footer'
import { useGetMe } from '@/hooks/auth/useGetMe'
import LoadingLayout from './LoadingLayout'
export default function AppLayout() {
    const { isLoading, user, isLoggedIn } = useGetMe()

    if (isLoading) return <LoadingLayout isPage={true} />

    return (
        <>
            <div className="grid h-screen grid-cols-[0_0_0_4fr_0] grid-rows-[60px_0_0_0_0_0_0_0_0_9fr] gap-0 overflow-y-hidden lg:grid-cols-[0_0_0_4fr_1fr]">
                <div className="col-start-4 col-end-6 row-start-1 row-end-2">
                    <Header isLoggedIn={isLoggedIn} user={user} />
                </div>
                <main
                    dir="ltr"
                    className="col-start-4 col-end-5 row-start-10 row-end-11 overflow-y-auto"
                >
                    <Outlet />
                    <Footer />
                </main>
                <SidearApp />
            </div>
        </>
    )
}
