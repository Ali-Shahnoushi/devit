import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import './index.css'
import AppLayout from './components/ui/AppLayout'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import { useEffect } from 'react'
import useThemeState from './states/useThemeState'
import Profile from './pages/Profile'
import ProfileLayout from './components/ui/ProfileLayout'
import VerifiedEmail from './pages/VerifiedEmail'
import { useRefreshToken } from './hooks/auth/useRefreshToken'
import SendEmailVerification from './pages/SendEmailVerification'
import ResetPassword from './pages/ResetPassword'

function App() {
    const { theme, toggleTheme } = useThemeState((state) => state)
    const { refreshUserToken } = useRefreshToken()

    useEffect(() => {
        document.querySelector('html')?.setAttribute('data-theme', theme)
        if (theme === 'dark') {
            document.querySelector('html')?.classList.add('dark')
        } else {
            document.querySelector('html')?.classList.remove('dark')
        }
    }, [theme, toggleTheme])

    useEffect(() => {
        const interval = setInterval(
            () => {
                refreshUserToken()
            },
            60 * 55 * 1000
        )

        return () => clearInterval(interval)
    }, [])

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/" element={<Home />} />
                </Route>
                <Route path="/about" element={<About />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route
                    path="/verified/:userId/:token"
                    element={<VerifiedEmail />}
                />
                <Route
                    path="/email-verification"
                    element={<SendEmailVerification />}
                />
                <Route path="/reset-password" element={<ResetPassword />} />

                <Route path="/dashboard" element={<ProfileLayout />}>
                    <Route index element={<p>dashboard</p>} />
                    <Route path="settings" element={<p>settings</p>} />
                    <Route path="posts" element={<p>posts</p>} />
                    <Route path="profile" element={<Profile />} />
                </Route>
            </Routes>{' '}
        </BrowserRouter>
    )
}

export default App
