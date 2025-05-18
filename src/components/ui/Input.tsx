import React, { useState } from 'react'
import { RegisterOptions, useFormContext } from 'react-hook-form'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

type InputProps = {
    placeholder: string
    type: 'email' | 'password' | 'text'
    icon: React.ReactNode
    name: string
    validations: RegisterOptions
}

export default function Input({
    placeholder,
    type,
    name,
    validations,
    icon,
}: InputProps) {
    const [showPassword, setShowPassword] = useState(false)
    const {
        register,
        formState: { errors },
    } = useFormContext()

    const passwordType = showPassword ? 'text' : 'password'
    const error = errors[name]

    return (
        <>
            <label className="input bg-base-200 mb-0 w-full flex-col gap-1 border-0 md:flex">
                <div className="flex h-full w-full items-center gap-2">
                    {icon}
                    <input
                        type={type === 'password' ? passwordType : type}
                        placeholder={placeholder}
                        {...register(name, validations)}
                    />
                    {type === 'password' && (
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="cursor-pointer px-2"
                        >
                            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                        </button>
                    )}
                </div>
            </label>
            {error && (
                <span className="text-error mb-0 text-sm">
                    {error.message as string}
                </span>
            )}
        </>
    )
}
