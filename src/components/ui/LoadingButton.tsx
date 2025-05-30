import React from 'react'

export default function LoadingButton({
    isLoading,
    label,
    onClickHandler,
    disabled,
    icon,
    iconSize,
    classname,
}: {
    isLoading: boolean
    label: string
    disabled?: boolean
    classname?: string
    icon?: React.ReactNode
    iconSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    onClickHandler?: () => void
}) {
    return (
        <button
            type="submit"
            className={classname ? classname : 'btn btn-primary flex w-full'}
            disabled={isLoading || disabled}
            onClick={onClickHandler}
        >
            {isLoading ? (
                <span
                    className={`loading loading-spinner !loading-${iconSize} items-center !border-0 text-sm`}
                ></span>
            ) : (
                label
            )}
            {icon && <span className="ml-2">{icon}</span>}
        </button>
    )
}
