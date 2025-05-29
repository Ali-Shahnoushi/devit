import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="flex w-full flex-row items-center justify-around border-t-2 border-slate-300 p-4 text-sm dark:border-slate-600">
            <p>
                <Link to="/about" className="text-primary font-bold">
                    دویت
                </Link>{' '}
                یک پروژه برای دهندگان ایرانی ایجاد شده و هیچ‌گونه پشتیبانی مالی
                ندارد
            </p>
            <p>ایجاد شده با ❤️ - © 2025 </p>
        </footer>
    )
}
