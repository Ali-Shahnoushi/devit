import React from 'react'

export default function LoadingButton({
    isLoading,
    label,
    onClickHandler,
    disabled,
}: {
    isLoading: boolean
    label: string
    disabled?: boolean
    onClickHandler?: () => void
}) {
    return (
        <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={isLoading || disabled}
            onClick={onClickHandler}
        >
            {isLoading ? (
                <span className="loading loading-spinner loading-xs !border-0"></span>
            ) : (
                label
            )}
        </button>
    )
}
